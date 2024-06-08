import { Request } from 'express';
import { LogoutUserDto } from './dto/logout-user.dto.js';
import { RequestBody } from '../../libs/rest/types/request-body.type';
import { RequestParams } from '../../libs/rest/types/request.params.type';

export type LogoutUserRequest = Request<RequestParams, RequestBody, LogoutUserDto>;
