import { City, HouseType, Offer, User, UserType } from '../types';
import { Facilities } from '../types/facilities.enum';


export function createOffer(offerData: string): Offer {
  const offer: string[] = [];
  let currentData: string[] = [];

  for (const char of offerData) {
    if (char === '\t' || char === '\n') {
      offer.push(currentData.join(''));
      currentData = [];
    } else {
      currentData.push(char);
    }

    if (char === '\n') {
      break;
    }
  }

  const [
    name,
    description,
    datePublished,
    city,
    previewImagePath,
    photosPaths,
    isPremium,
    isFavorite,
    rating,
    houseType,
    numberRooms,
    numberGuests,
    rentPrice,
    facilities,
    authorName,
    authorEmail,
    avatarPath,
    type,
    numberComments,
    coordinates
  ] = offer;

  return {
    name,
    description,
    datePublished: new Date(datePublished),
    city: city as City,
    previewImagePath,
    photosPaths: photosPaths.split(';'),
    isPremium: isPremium === 'true',
    isFavorite: isFavorite === 'true',
    rating: parseFloat(rating),
    houseType: houseType as HouseType,
    numberRooms: parseInt(numberRooms, 10),
    numberGuests: parseInt(numberGuests, 10),
    rentPrice: parseInt(rentPrice, 10),
    facilities: facilities.split(';').map((facility) => facility as Facilities),
    author: {
      name: authorName,
      email: authorEmail,
      avatarPath: avatarPath,
      type: type as UserType
    } as unknown as User,
    numberComments: parseInt(numberComments, 10),
    coordinates
  } as Offer;
}
