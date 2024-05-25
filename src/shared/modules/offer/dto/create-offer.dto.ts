import { Facilities } from '../../../types/facilities.enum.js';
import { HouseType, City, Coordinates } from '../../../types';


export class CreateOfferDto {
  public name: string;
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
  public userId: string;
  public numberComments: number;
  public coordinates: Coordinates;
}
