import { User } from './user.type.js';
import { Category } from './category.type.js';
export type Offer = {
  title: string;
  description: string;
  postDate: Date;
  previewPhoto: string,
  photos: string[],
  type: 'Куплю' | 'Продам',
  commentCount: number,
  price: number,
  author: User,
  category: Category[],
}
