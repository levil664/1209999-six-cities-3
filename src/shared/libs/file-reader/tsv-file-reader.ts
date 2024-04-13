import { FileReader } from './file-reader.interface.js';
import { readFileSync } from 'node:fs';
import { Offer, User, Category, categoryTitle } from '../../types';

export class TSVFileReader implements FileReader {
  private rawData = '';

  constructor(
    private readonly filename: string
  ) {}

  public read(): void {
    this.rawData = readFileSync(this.filename, { encoding: 'utf-8' });
  }

  public toArray(): Offer[] {
    if (!this.rawData) {
      throw new Error('File was not read');
    }

    return this.rawData
      .split('\n')
      .filter((row) => row.trim().length > 0)
      .map((line) => line.split('\t'))
      .map(([title, description, postDate, previewPhoto, photos, type, price, name, lastName, email, avatar, password, categoryTitle, photo, countAdvertisement]) => ({
        title,
        description,
        postDate: new Date(postDate),
        previewPhoto,
        photos: photos ? photos.split(';').map((url) => url.trim()) : [],
        type: type as 'Куплю' | 'Продам',
        commentCount: 0,
        price: parseInt(price, 10),
        author: { name, lastName, email, avatar, password } as User,
        category: [{ title: categoryTitle as categoryTitle, photo, countAdvertisement: parseInt(countAdvertisement, 10) }] as Category[],
      }));
  }
}
