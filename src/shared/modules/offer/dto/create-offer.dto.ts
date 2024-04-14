import { HouseType, City, Facilities, Coordinates } from '../../../types';

export class CreateOfferDto {
  public title: string;
  public description: string;
  public postDate: Date;
  public city: City;
  public previewPhoto: string;
  public photos: string[];
  public isPremium: boolean;
  public isFavorite: boolean;
  public rating: number;
  public type: HouseType;
  public roomCount: number;
  public guestsCount: number;
  public price: number;
  public facilities: Facilities[];
  public coordinates: Coordinates;
  public authorId: string;
}
