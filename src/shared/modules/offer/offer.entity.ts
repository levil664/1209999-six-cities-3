import { defaultClasses, getModelForClass, modelOptions, prop, Ref } from '@typegoose/typegoose';
import { HouseType, City, Facilities, Coordinates } from '../../types/index.js';
import { UserEntity } from '../user/index.js';


export interface OfferEntity extends defaultClasses.Base {}

@modelOptions({
  schemaOptions: {
    collection: 'offers'
  }
})

export class OfferEntity extends defaultClasses.TimeStamps {
  @prop({ trim: true, required: true })
  public title!: string;

  @prop({trim: true})
  public description!: string;

  @prop()
  public postDate!: Date;

  @prop({
    type: () => String,
    enum: City
  })
  public city!: City;

  @prop()
  public previewPhoto!: string;

  @prop({ type: () => [String] })
  public photos!: string[];

  @prop()
  public isPremium!: boolean;

  @prop()
  public isFavorite!: boolean;

  @prop()
  public rating!: number;

  @prop({
    type: () => String,
    enum: HouseType
  })
  public type!: HouseType;

  @prop()
  public roomCount!: number;

  @prop()
  public guestsCount!: number;

  @prop()
  public price!: number;

  @prop({
    type: () => String,
    enum: Facilities
  })
  public facilities!: Facilities[];

  @prop({
    type: () => String,
    enum: Coordinates
  })
  public coordinates: Coordinates;

  @prop({
    ref: UserEntity,
    required: true
  })
  public authorId!: Ref<UserEntity>;

  @prop({type: Number, default: 0})
  public numberComments: number;
}

export const OfferModel = getModelForClass(OfferEntity);
