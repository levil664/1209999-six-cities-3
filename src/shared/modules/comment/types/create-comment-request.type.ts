import { type Request } from 'express';
import { RequestBody } from '../../../libs/rest/types/request-body.type';
import { CreateCommentDto } from '../dto/create-comment.dto';
import {RequestOfferId} from '../../../libs/rest/types/request.offerId.params.type';

export type CreateCommentRequest = Request<RequestOfferId, RequestBody, CreateCommentDto>;
