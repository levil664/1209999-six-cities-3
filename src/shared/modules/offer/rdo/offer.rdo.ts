import { Expose } from 'class-transformer';
import { Coordinates } from '../../../types';
import { City } from '../../../types';
import { HouseType } from '../../../types';
import { Facilities } from '../../../types/facilities.enum';
import { UserEntity } from '../../user';
import { Ref } from '@typegoose/typegoose';


export class OfferRdo {
  @Expose()
  public id:string;

  @Expose()
  public name: string;

  @Expose()
  public description:string;

  @Expose()
  public datePublished: Date;

  @Expose()
  public city: City;

  @Expose()
  public previewImagePath: string;

  @Expose()
  public photosPaths: string[];

  @Expose()
  public isPremium: boolean;

  @Expose()
  public isFavorite: boolean;

  @Expose()
  public numberRooms: number;

  @Expose()
  public numberGuests: number;

  @Expose()
  public rating:number;

  @Expose()
  public houseType: HouseType;

  @Expose()
  public rentPrice: number;

  @Expose()
  public facilities: Facilities[];

  @Expose()
  public userId: Ref<UserEntity>;

  @Expose()
  public numberComments: number;

  @Expose()
  public coordinates: Coordinates;
}
