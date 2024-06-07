import { Offer, City, HouseType, Facilities, User, Coordinates, UserType } from '../types/index.js';


export function createOffer(offerData: string): Offer {
  const [
    title,
    description,
    postDate,
    city,
    previewPhoto,
    photos,
    isPremium,
    isFavorite,
    rating,
    type,
    roomCount,
    guestsCount,
    price,
    facilities,
    name,
    email,
    avatarPath,
    coordinates,
    numberComments
  ] = offerData.replace('\n', '').split('\t');

  const user: User = {
    name,
    email,
    avatarPath,
    type: type as UserType
  };

  return {
    title,
    description,
    postDate: new Date(postDate),
    city: city as City,
    previewPhoto,
    photos: photos ? photos.split(';').map((url) => url.trim()) : [],
    isPremium: isPremium === 'true',
    isFavorite: isFavorite === 'true',
    rating: parseInt(rating, 10),
    type: type as HouseType,
    roomCount: parseInt(roomCount, 10),
    guestsCount: parseInt(guestsCount, 10),
    price: Number.parseInt(price, 10),
    facilities: facilities ? facilities.split(';').map((facility) => facility.trim()) as Facilities[] : [],
    author: user,
    coordinates: coordinates as Coordinates,
    numberComments: parseInt(numberComments, 10),
  };
}
