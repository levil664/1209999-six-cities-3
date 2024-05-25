import { HouseType, City, Coordinates } from '../../../types';
import { Facilities } from '../../../types/facilities.enum';

export class UpdateOfferDto {
  public name: string;
  public description: string;
  public datePublished: Date;
  public city: City;
  public previewImagePath: string;
  public photosPaths: string[];
  public isPremium: boolean;
  public isFavorite: boolean;
  public rating: number;
  public houseType: HouseType;
  public numberRooms: number;
  public numberGuests: number;
  public rentPrice: number;
  public facilities: Facilities[];
  public userId: string;
  public numberComments: number;
  public coordinates: Coordinates;
}
