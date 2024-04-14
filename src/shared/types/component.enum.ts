export const Component = {
  DatabaseClient: Symbol.for('DatabaseClient'),
  Config: Symbol.for('Config'),
  UserService: Symbol.for('UserService'),
  UserModel: Symbol.for('UserModel'),
  RestApplication: Symbol.for('RestApplication'),
  Logger: Symbol.for('Logger'),
  OfferService: Symbol.for('OfferService'),
  OfferModel: Symbol.for('OfferModel'),
} as const;
