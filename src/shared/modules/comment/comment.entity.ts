import { defaultClasses, getModelForClass, modelOptions, prop, Ref } from '@typegoose/typegoose';
import { UserEntity } from '../user';
import { OfferEntity } from '../offer';


export interface CommentEntity extends defaultClasses.Base { }

@modelOptions({
  schemaOptions: {
    collection: 'comments',
  }
})

export class CommentEntity extends defaultClasses.TimeStamps {
  @prop({ trim: true, required: true, type: () => String,})
  public description: string;

  @prop({
    ref: OfferEntity,
    required: true
  })
  public offerId: Ref<OfferEntity>;

  @prop({
    required: true,
    type: () => Date,
  })
  public postDate: Date;

  @prop({
    ref: UserEntity,
    required: true,
  })
  public authorId: Ref<UserEntity>;
}

export const CommentModel = getModelForClass(CommentEntity);
