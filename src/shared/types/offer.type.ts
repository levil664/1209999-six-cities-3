import { User } from './user.type.js';
import { City } from './city.enum.js';
import { Coordinates } from './coordinates.enum.js';
import { HouseType } from './house-type.enum.js';
import { Facilities } from './facilities.enum.js';

export type Offer = {
  title: string;
  description: string;
  postDate: Date;
  city: City,
  previewPhoto: string,
  photos: string[],
  isPremium: boolean,
  isFavorite: boolean,
  rating: number,
  type: HouseType,
  roomCount: number,
  guestsCount: number,
  price: number,
  facilities: Facilities[],
  author: User,
  coordinates: Coordinates,
  numberComments: number
}
