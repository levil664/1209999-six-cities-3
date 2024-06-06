import { IsArray, IsBoolean, IsEnum, IsMongoId, IsObject, IsOptional, Max, MaxLength, Min, MinLength } from 'class-validator';
import { Coordinates, HouseType } from '../../../types/index.js';
import { City } from '../../../types/index.js';
import { Facilities } from '../../../types/facilities.enum.js';
import { CreateOfferValidationMessage } from './create-offer.messages.js';


export class UpdateOfferDto {
  @IsOptional()
  @MinLength(10, { message: CreateOfferValidationMessage.name.minLength })
  @MaxLength(100, { message: CreateOfferValidationMessage.name.maxLength })
  public name?: string;

  @IsOptional()
  @MinLength(20, { message: CreateOfferValidationMessage.description.minLength })
  @MaxLength(1024, { message: CreateOfferValidationMessage.description.maxLength })
  public description?: string;

  @IsOptional()
  public datePublished?: Date;

  @IsOptional()
  @IsEnum(City, { message: CreateOfferValidationMessage.city.invalidFormat })
  public city?: City;

  @IsOptional()
  @MaxLength(256, { message: CreateOfferValidationMessage.previewImagePath.maxLength })
  public previewImagePath?: string;

  @IsOptional()
  @IsArray({ message: CreateOfferValidationMessage.photosPaths.invalidFormat })
  public photosPaths?: string[];

  @IsOptional()
  @IsBoolean({ message: CreateOfferValidationMessage.isPremium.invalid })
  public isPremium?: boolean;

  @IsOptional()
  @IsBoolean({message: CreateOfferValidationMessage.isFavorite.invalidFormat})
  public isFavorite?: boolean;

  @IsOptional()
  public rating?: number;

  @IsOptional()
  @IsEnum(HouseType, {message: CreateOfferValidationMessage.houseType.invalidFormat})
  public houseType?: HouseType;

  @IsOptional()
  @Min(1, { message: CreateOfferValidationMessage.numberRooms.min })
  @Max(8, { message: CreateOfferValidationMessage.numberRooms.max })
  public numberRooms?: number;

  @IsOptional()
  @Min(1, { message: CreateOfferValidationMessage.numberGuests.min })
  @Max(10, { message: CreateOfferValidationMessage.numberGuests.max })
  public numberGuests?: number;

  @IsOptional()
  @Min(100, { message: CreateOfferValidationMessage.rentPrice.min })
  @Max(100000, { message: CreateOfferValidationMessage.rentPrice.max })
  public rentPrice?: number;

  @IsOptional()
  @IsArray({ message: CreateOfferValidationMessage.facilities.invalidFormat })
  @IsEnum(Facilities, {message: CreateOfferValidationMessage.facilities.invalidElementFormat})
  public facilities?: Facilities[];

  @IsOptional()
  @IsMongoId({ message: CreateOfferValidationMessage.userId.invalidId })
  public userId?: string;

  @IsOptional()
  public numberComments?: number;

  @IsOptional()
  @IsObject({ message: CreateOfferValidationMessage.coordinates.invalidFormat })
  public coordinates?: Coordinates;
}
