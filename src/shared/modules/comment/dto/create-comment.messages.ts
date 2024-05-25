export const CreateCommentMessages = {
  description: {
    invalidFormat: 'Please provide a description for the offer.',
    lengthField: 'Description must be between 5 and 2024 characters.',
  },
  offerId: {
    invalidFormat: 'Invalid offer ID. Please check the format.',
  },
  userId: {
    invalidFormat: 'Invalid user ID. Please check the format.',
  }
} as const;
