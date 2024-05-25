import dayjs from 'dayjs';
import { generateRandomValue, getRandomItem, getRandomItems } from '../../helpers';
import { MockServerData } from '../../types';
import { OfferGenerator } from './offer-generator.interface.js';


export class TSVOfferGenerator implements OfferGenerator {
  constructor(private readonly mockData: MockServerData) {}

  generate(): string {
    const title = getRandomItem<string>(this.mockData.titles);
    const description = getRandomItem<string>(this.mockData.descriptions);
    const postDate = dayjs().subtract(generateRandomValue(1, 14), 'day').toISOString();
    const city = getRandomItem<string>(this.mockData.cities);
    const previewPhoto = getRandomItem<string>(this.mockData.previewPhotos);
    const photos = getRandomItems<string>(this.mockData.photos, 6).join(';');
    const isPremium = getRandomItem<boolean>([true, false]).toString();
    const isFavorite = getRandomItem<boolean>([true, false]).toString();
    const rating = generateRandomValue(1, 5).toString();
    const type = getRandomItem<string>(this.mockData.types);
    const roomCount = generateRandomValue(1, 8).toString();
    const guestCount = generateRandomValue(1, 10).toString();
    const price = generateRandomValue(100, 100000).toString();
    const facilities = getRandomItems<string>(this.mockData.facilities).join(';');
    const author = getRandomItem<string>(this.mockData.authorNames);
    const email = getRandomItem<string>(this.mockData.authorEmails);
    const avatarPath = getRandomItem<string>(this.mockData.authorAvatars);
    const authorType = getRandomItem<string>(this.mockData.authorTypes);
    const numberComments = generateRandomValue(0, 30);
    const coordinates = getRandomItem<string>(this.mockData.coordinates);

    return [
      title, description, postDate, city, previewPhoto, photos, isPremium,
      isFavorite, rating, type, roomCount, guestCount, price, facilities,
      author, email, avatarPath, authorType, numberComments, coordinates
    ].join('\t');
  }
}
