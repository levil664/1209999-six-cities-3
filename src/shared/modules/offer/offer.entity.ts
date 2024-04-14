import { defaultClasses, getModelForClass, modelOptions, prop, Ref } from '@typegoose/typegoose';
import { HouseType, City, Facilities, Coordinates } from '../../types';
import { UserEntity } from '../user';

export interface OfferEntity extends defaultClasses.Base {}

@modelOptions({
  schemaOptions: {
    collection: 'offers'
  }
})
export class OfferEntity extends defaultClasses.TimeStamps {
  @prop({ trim: true, required: true })
  public title!: string;

  @prop({ trim: true })
  public description?: string;

  @prop()
  public postDate?: Date = new Date();

  @prop({
    type: () => String,
    enum: City
  })
  public city!: City;

  @prop()
  public previewPhoto?: string;

  @prop()
  public photos?: string[] = [];

  @prop()
  public isPremium?: boolean = false;

  @prop()
  public isFavorite?: boolean = false;

  @prop()
  public rating?: number = 0;

  @prop({
    type: () => String,
    enum: HouseType
  })
  public type!: HouseType;

  @prop()
  public roomCount?: number;

  @prop()
  public guestsCount?: number;

  @prop()
  public price?: number;

  @prop({
    type: () => String,
    enum: Facilities
  })
  public facilities?: Facilities[] = [];

  @prop({
    type: () => String,
    enum: Coordinates
  })
  public coordinates?: Coordinates;

  @prop({
    ref: UserEntity,
    required: true
  })
  public authorId!: Ref<UserEntity>;
}

export const OfferModel = getModelForClass(OfferEntity);
