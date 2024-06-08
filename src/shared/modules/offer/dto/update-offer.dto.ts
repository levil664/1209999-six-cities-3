import { HouseType, City, Facilities, Coordinates } from '../../../types/index.js';
import { IsArray, IsBoolean, IsEnum, IsMongoId, Max, MaxLength, Min, MinLength } from 'class-validator';
import { CreateOfferValidationMessage } from './create-offer.messages.js';


export class UpdateOfferDto {
  @MinLength(10, { message: CreateOfferValidationMessage.title.minLength })
  @MaxLength(100, { message: CreateOfferValidationMessage.title.maxLength })
  public title: string;

  @MinLength(20, { message: CreateOfferValidationMessage.description.minLength })
  @MaxLength(1024, { message: CreateOfferValidationMessage.description.maxLength })
  public description: string;

  public postDate: Date;

  @IsEnum(City, { message: CreateOfferValidationMessage.city.invalidFormat })
  public city: City;

  @MaxLength(256, { message: CreateOfferValidationMessage.previewPhoto.maxLength })
  public previewPhoto: string;

  @IsArray({ message: CreateOfferValidationMessage.photos.invalidFormat })
  public photos: string[];

  @IsBoolean({ message: CreateOfferValidationMessage.isPremium.invalid })
  public isPremium: boolean;

  @IsBoolean({message: CreateOfferValidationMessage.isFavorite.invalidFormat})
  public isFavorite: boolean;

  public rating: number;

  @IsEnum(HouseType, {message: CreateOfferValidationMessage.type.invalidFormat})
  public type: HouseType;

  @Min(1, { message: CreateOfferValidationMessage.roomCount.min })
  @Max(8, { message: CreateOfferValidationMessage.roomCount.max })
  public roomCount: number;

  @Min(1, { message: CreateOfferValidationMessage.guestsCount.min })
  @Max(10, { message: CreateOfferValidationMessage.guestsCount.max })
  public guestsCount: number;

  @Min(100, { message: CreateOfferValidationMessage.price.min })
  @Max(100000, { message: CreateOfferValidationMessage.price.max })
  public price: number;

  @IsArray({ message: CreateOfferValidationMessage.facilities.invalidFormat })
  @IsEnum(Facilities, { message: CreateOfferValidationMessage.facilities.invalidElementFormat, each: true })
  public facilities: Facilities[];

  @IsEnum(Coordinates, {message: CreateOfferValidationMessage.coordinates.invalidFormat})
  public coordinates: Coordinates;

  @IsMongoId({ message: CreateOfferValidationMessage.authorId.invalidId })
  public authorId: string;

  public numberComments: number;

}
