import { Command } from './command.interface.js';
import { TSVFileReader } from '../../shared/libs/file-reader';
import { UserService } from '../../shared/modules/user/user-service.interface.js';
import { OfferService } from '../../shared/modules/offer/index.js';
import { DatabaseClient } from '../../shared/libs/database-client/index.js';
import { Logger } from '../../shared/libs/logger/index.js';
import { ConsoleLogger } from '../../shared/libs/logger/console.logger.js';
import { DefaultOfferService } from '../../shared/modules/offer/index.js';
import { DefaultUserService } from '../../shared/modules/user/index.js';
import { MongoDatabaseClient } from '../../shared/libs/database-client/index.js';
import { Offer } from '../../shared/types/index.js';
import { DEFAULT_DB_PORT, DEFAULT_USER_PASSWORD } from './command.constant.js';
import { OfferModel } from '../../shared/modules/offer/index.js';
import { UserModel } from '../../shared/modules/user/index.js';
import { getErrorMessage, getMongoURI } from '../../shared/helpers/index.js';
import { createOffer } from '../../shared/helpers/offer.js';


export class ImportCommand implements Command {
  private userService: UserService;
  private offerService: OfferService;
  private databaseClient: DatabaseClient;
  private logger: Logger;
  private salt: string;

  constructor() {
    this.onImportedLine = this.onImportedLine.bind(this);
    this.onCompleteImport = this.onCompleteImport.bind(this);

    this.logger = new ConsoleLogger();
    this.offerService = new DefaultOfferService(this.logger, OfferModel);
    this.userService = new DefaultUserService(this.logger, UserModel);
    this.databaseClient = new MongoDatabaseClient(this.logger);
  }

  private async onImportedLine(line: string, resolve: () => void) {
    const offer = createOffer(line);
    await this.saveOffer(offer);
    resolve();
  }

  private onCompleteImport(count: number) {
    console.info(`${count} rows imported.`);
    this.databaseClient.disconnect();
  }

  private async saveOffer(offer: Offer): Promise<void> {
    try {
      const user = await this.userService.findOrCreate({
        ...offer.author,
        password: DEFAULT_USER_PASSWORD,
      }, this.salt);

      const offerData = {
        userId: user.id,
        ...offer,
      };

      await this.offerService.create(offerData);
    } catch (error) {
      console.error('Error saving offer:', getErrorMessage(error));
    }
  }

  public getName(): string {
    return '--import';
  }

  public async execute(filename: string, host: string, dbname: string, salt: string): Promise<void> {
    const uri = getMongoURI(host, DEFAULT_DB_PORT, dbname);
    this.salt = salt;

    await this.databaseClient.connect(uri);

    const fileReader = new TSVFileReader(filename.trim());

    fileReader.on('line', this.onImportedLine);
    fileReader.on('end', this.onCompleteImport);
    try {
      await fileReader.read();
    } catch (error) {
      console.error(`Can't import data from file: ${filename}`);
      console.error(getErrorMessage(error));
    }
  }
}
