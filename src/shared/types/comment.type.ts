import { User } from './user.type.js';

export type Comment = {
  text: string;
  postDate: Date;
  rating: string,
  author: User;
}
