import { type Request } from 'express';
import { RequestParams } from '../../../libs/rest/types/request.params.type';
import { RequestBody } from '../../../libs/rest/types/request-body.type';
import { CreateCommentDto } from '../dto/create-comment.dto';

export type CreateCommentRequest = Request<RequestParams, RequestBody, CreateCommentDto>;
