import { ParamsDictionary } from 'express-serve-static-core';

export type RequestOfferId = {
  offerId: string;
} | ParamsDictionary;
