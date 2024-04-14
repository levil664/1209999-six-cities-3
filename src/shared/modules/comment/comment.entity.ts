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
    @prop({
        required: true,
        ref: UserEntity
    })
    public authorId!: Ref<UserEntity>;

    @prop({
        ref: OfferEntity,
        required: true
    })
    public offerId!: Ref<OfferEntity>;

    @prop({
        required: true,
        trim: true
    })
    public description!: string;

    @prop({ required: true })
    public rating!: number;
}

export const CommentModel = getModelForClass(CommentEntity);
