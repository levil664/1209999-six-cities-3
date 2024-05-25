export const CreateOfferValidationMessage = {
  name: {
    minLength: 'Name must be at least 10 characters long.',
    maxLength: 'Name cannot exceed 100 characters.',
  },
  description: {
    minLength: 'Description must be at least 20 characters long.',
    maxLength: 'Description cannot exceed 1024 characters.',
  },
  city: {
    invalidFormat: 'City must be one of the following: Paris, Cologne, Brussels, Amsterdam, Hamburg, or Dusseldorf.',
  },
  previewImagePath: {
    maxLength: 'Preview image path cannot exceed 256 characters.',
  },
  photosPaths: {
    invalidFormat: 'Photos paths must be an array.',
  },
  isPremium: {
    invalid: 'Premium status must be a boolean value (true or false).',
  },
  isFavorite: {
    invalidFormat: 'Favorite status must be a boolean value (true or false).',
  },
  houseType: {
    invalidFormat: 'House type must be one of the following: Apartment, House, Room, or Hotel.',
  },
  numberRooms: {
    min: 'Minimum number of rooms is 1.',
    max: 'Maximum number of rooms is 8.',
  },
  numberGuests: {
    min: 'Minimum number of guests is 1.',
    max: 'Maximum number of guests is 10.',
  },
  rentPrice: {
    min: 'Minimum rent price is 100.',
    max: 'Maximum rent price is 100,000.',
  },
  facilities: {
    invalidFormat: 'Facilities must be an array.',
    invalidElementFormat:
      'Each facility must be one of the following: Breakfast, Air conditioning, Laptop friendly workspace, Baby seat, Washer, Towels, or Fridge.',
  },
  userId: {
    invalidId: 'User ID is invalid.',
  },
  coordinates: {
    invalidFormat: 'Location coordinates are invalid.',
  },
} as const;
