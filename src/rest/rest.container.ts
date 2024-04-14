import { Container } from 'inversify';
import { RestApplication } from './rest.application.js';
import { Component } from '../shared/types';
import { Logger, PinoLogger } from '../shared/libs/logger';
import { Config, RestConfig, RestSchema } from '../shared/libs/config';
import { DatabaseClient, MongoDatabaseClient } from '../shared/libs/database-client';

export function createRestApplicationContainer() {
  const restApplicationContainer = new Container();

  restApplicationContainer.bind<RestApplication>(Component.RestApplication).to(RestApplication).inSingletonScope();
  restApplicationContainer.bind<Logger>(Component.Logger).to(PinoLogger).inSingletonScope();
  restApplicationContainer.bind<Config<RestSchema>>(Component.Config).to(RestConfig).inSingletonScope();
  restApplicationContainer.bind<DatabaseClient>(Component.DatabaseClient).to(MongoDatabaseClient).inSingletonScope();

  return restApplicationContainer;
}
