export const CreateUserMessages = {
  email: {
    invalidFormat: 'Please enter a valid email address.',
  },
  avatarPath: {
    invalidFormat: 'Avatar image is required.',
  },
  name: {
    invalidFormat: 'First name is required.',
    lengthField: 'First name must be between 1 and 15 characters long.',
  },
  lastname: {
    invalidFormat: 'Last name is required.',
    lengthField: 'Last name must be between 1 and 15 characters long.',
  },
  password: {
    invalidFormat: 'Password is required.',
    lengthField: 'Password must be between 6 and 12 characters long.',
  },
  type: {
    invalidFormat: 'Account type must be either Ordinary or Pro.',
  },
} as const;
