
import { OfferGenerator } from './offer-generator.interface.js';
import { MockServerData } from '../../types/index.js';
import { generateRandomValue, getRandomItem, getRandomItems } from '../../helpers/index.js';


export class TSVOfferGenerator implements OfferGenerator {
  constructor(private readonly mockData: MockServerData) {}

  public generate(): string {
    const title = getRandomItem<string>(this.mockData.titles);
    const description = getRandomItem<string>(this.mockData.descriptions);
    const postDate = getRandomItem<string>(this.mockData.postDates);
    const city = getRandomItem<string>(this.mockData.cities);
    const previewPhoto = getRandomItem<string>(this.mockData.previewPhotos);
    const photos = getRandomItems<string>(this.mockData.photos, 6).join(';');
    const isPremium = getRandomItem<boolean>(this.mockData.isPremiums);
    const isFavorite = getRandomItem<boolean>(this.mockData.isFavorites);
    const rating = getRandomItem<number>(this.mockData.ratings);
    const type = getRandomItem<string>(this.mockData.types);
    const roomCount = getRandomItem<number>(this.mockData.roomCounts);
    const guestsCount = getRandomItem<number>(this.mockData.guestsCounts);
    const price = getRandomItem<number>(this.mockData.prices);
    const facilities = getRandomItems<string>(this.mockData.facilities).join(';');
    const author = getRandomItem<string>(this.mockData.authorNames);
    const email = getRandomItem<string>(this.mockData.authorEmails);
    const avatarPath = getRandomItem<string>(this.mockData.authorAvatars);
    const coordinates = getRandomItem<string>(this.mockData.coordinates);
    const numberComments = generateRandomValue(0, 30);

    return [
      title, description, postDate, city, previewPhoto, photos, isPremium,
      isFavorite, rating, type, roomCount, guestsCount, price, facilities,
      author, email, avatarPath, coordinates, numberComments
    ].join('\t');
  }
}
