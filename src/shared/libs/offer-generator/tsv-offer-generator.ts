import { OfferGenerator } from './offer-generator.interface.js';
import { MockServerData } from '../../types/index.js';
import { getRandomItem, getRandomItems } from '../../helpers/index.js';

export class TSVOfferGenerator implements OfferGenerator {
  constructor(private readonly mockData: MockServerData) {}

  public generate(): string {
    const generatedData: any[] = [];

    for (const key in this.mockData) {
      if (Object.prototype.hasOwnProperty.call(this.mockData, key)) {
        const value = this.mockData[key as keyof MockServerData];

        if (Array.isArray(value)) {
          generatedData.push(getRandomItem<string | boolean | number>(value));
        } else {
          generatedData.push(value);
        }
      }
    }

    const photosStr = getRandomItems<string>(generatedData[5], 6).join(';');
    const facilitiesStr = getRandomItems<string>(generatedData[13]).join(';');

    generatedData[5] = photosStr;
    generatedData[13] = facilitiesStr;

    return generatedData.join('\t');
  }
}
