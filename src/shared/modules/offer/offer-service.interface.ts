import { CreateOfferDto } from './dto/create-offer.dto.js';
import { DocumentType } from '@typegoose/typegoose';
import { OfferEntity } from './offer.entity.js';
import { UpdateOfferDto } from './dto/update-offer.dto.js';


export interface OfferService {
  create(dto: CreateOfferDto): Promise<DocumentType<OfferEntity>>;
  findById(offerId: string): Promise<DocumentType<OfferEntity> | null>;
  find(): Promise<DocumentType<OfferEntity>[]>;
  findNew(count: number): Promise<DocumentType<OfferEntity>[]>;
  findDiscussed(count: number): Promise<DocumentType<OfferEntity>[]>;
  findByCategoryId(categoryId: string, count?: number): Promise<DocumentType<OfferEntity>[]>;
  deleteById(offerId: string): Promise<DocumentType<OfferEntity> | null>;
  updateById(offerId: string, dto: UpdateOfferDto): Promise<DocumentType<OfferEntity> | null>;
  incCommentCount(offerId: string): Promise<DocumentType<OfferEntity> | null>;
  calculateTotalRating(id: string, newRating: number, newCommentsCount: number): Promise<DocumentType<OfferEntity> | null>;
  exists(documentId: string): Promise<boolean>;
  updateOfferRating(id: string): Promise<DocumentType<OfferEntity | null> | null>
}
