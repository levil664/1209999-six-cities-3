import { User } from './user.type.js';
import { HouseType } from './house-type.enum.js';
import { City, Coordinates } from './index.js';
import { Facilities } from './facilities.enum.js';


export type Offer = {
  name: string,
  description: string,
  datePublished: Date,
  city: City,
  previewImagePath: string,
  photosPaths: string[],
  isPremium: boolean,
  isFavorite: boolean,
  rating: number,
  houseType: HouseType,
  numberRooms: number,
  numberGuests: number,
  rentPrice: number,
  facilities: Facilities[],
  author: User,
  numberComments: number,
  coordinates: Coordinates
}
