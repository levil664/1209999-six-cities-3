import { Command } from './command.interface.js';
import { createReadStream } from 'fs';
import { createInterface } from 'readline';
import { createOffer, getErrorMessage } from '../../shared/helpers/index.js';

export class ImportCommand implements Command {
  public getName(): string {
    return '--import';
  }

  public async execute(...parameters: string[]): Promise<void> {
    const [filename] = parameters;
    const inputStream = createReadStream(filename.trim(), { encoding: 'utf8' });
    const lineReader = createInterface({ input: inputStream });

    let count = 0;

    lineReader.on('line', (line) => {
      const offer = createOffer(line);
      console.info(offer);
      count++;
    });

    lineReader.on('close', () => {
      console.info(`${count} rows imported.`);
    });

    lineReader.on('error', (error) => {
      console.error(`Can't import data from file: ${filename}`);
      console.error(getErrorMessage(error));
    });
  }
}
