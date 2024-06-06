import { Facilities } from '../../../types/facilities.enum.js';
import { HouseType, City, Coordinates } from '../../../types/index.js';
import { CreateOfferValidationMessage } from './create-offer.messages.js';
import { IsArray, IsBoolean, IsEnum, IsObject, Max, MaxLength, Min, MinLength } from 'class-validator';


export class CreateOfferDto {
  @MinLength(10, { message: CreateOfferValidationMessage.name.minLength })
  @MaxLength(100, { message: CreateOfferValidationMessage.name.maxLength })
  public name: string;

  @MinLength(20, { message: CreateOfferValidationMessage.description.minLength })
  @MaxLength(1024, { message: CreateOfferValidationMessage.description.maxLength })
  public description: string;

  public datePublished: Date;

  @IsEnum(City, { message: CreateOfferValidationMessage.city.invalidFormat })
  public city: City;

  @MaxLength(256, { message: CreateOfferValidationMessage.previewImagePath.maxLength })
  public previewImagePath: string;

  @IsArray({ message: CreateOfferValidationMessage.photosPaths.invalidFormat })
  public photosPaths: string[];

  @IsBoolean({ message: CreateOfferValidationMessage.isPremium.invalid })
  public isPremium: boolean;

  @IsBoolean({message: CreateOfferValidationMessage.isFavorite.invalidFormat})
  public isFavorite: boolean;

  public rating: number;

  @IsEnum(HouseType, {message: CreateOfferValidationMessage.houseType.invalidFormat})
  public houseType: HouseType;

  @Min(1, { message: CreateOfferValidationMessage.numberRooms.min })
  @Max(8, { message: CreateOfferValidationMessage.numberRooms.max })
  public numberRooms: number;

  @Min(1, { message: CreateOfferValidationMessage.numberGuests.min })
  @Max(10, { message: CreateOfferValidationMessage.numberGuests.max })
  public numberGuests: number;

  @Min(100, { message: CreateOfferValidationMessage.rentPrice.min })
  @Max(100000, { message: CreateOfferValidationMessage.rentPrice.max })
  public rentPrice: number;

  @IsArray({ message: CreateOfferValidationMessage.facilities.invalidFormat })
  @IsEnum(Facilities, {message: CreateOfferValidationMessage.facilities.invalidElementFormat})
  public facilities: Facilities[];

  public userId: string;

  public numberComments: number;

  @IsObject({ message: CreateOfferValidationMessage.coordinates.invalidFormat })
  public coordinates: Coordinates;
}
