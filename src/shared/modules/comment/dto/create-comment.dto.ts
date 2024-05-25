import { IsMongoId, IsString, Length } from 'class-validator';
import { CreateCommentMessages } from './create-comment.messages';

export class CreateCommentDto {
  @IsString({ message: CreateCommentMessages.description.invalidFormat })
  @Length(5, 1024, { message: 'min is 5, max is 1024 '})
  public description: string;

  @IsMongoId({ message: CreateCommentMessages.offerId.invalidFormat })
  public offerId: string;

  @IsMongoId({ message: CreateCommentMessages.userId.invalidFormat })
  public userId: string;
}
