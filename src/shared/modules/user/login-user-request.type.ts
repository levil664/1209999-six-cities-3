import { Request } from 'express';
import { RequestParams } from '../../libs/rest/types/request.params.type';
import { RequestBody } from '../../libs/rest/types/request-body.type';
import { LoginUserDto } from './dto/login-user.dto';


export type LoginUserRequest = Request<RequestParams, RequestBody, LoginUserDto>;
