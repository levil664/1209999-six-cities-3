import { CreateOfferDto } from './dto/create-offer.dto.js';
import { DocumentType } from '@typegoose/typegoose';
import { OfferEntity } from './offer.entity.js';
import { UpdateOfferDto } from './dto/update-offer.dto.js';
import { DocumentExists } from '../../types/document-exists.interface.js';


export interface OfferService extends DocumentExists {
  create(dto: CreateOfferDto): Promise<DocumentType<OfferEntity>>;
  findById(id: string): Promise<DocumentType<OfferEntity> | null>;
  find(): Promise<DocumentType<OfferEntity>[]>;
  deleteById(id: string): Promise<DocumentType<OfferEntity> | null>;
  updateById(id: string, dto: UpdateOfferDto): Promise<DocumentType<OfferEntity> | null>;
  findByCityAndPremium(city: string, isPremium: boolean): Promise<DocumentType<OfferEntity>[] | null>;
  findByFavorite(isFavorite: boolean): Promise<DocumentType<OfferEntity>[] | null>;
  addToFavorite(id: string): Promise<DocumentType<OfferEntity> | null>;
  removeFromFavorite(id: string): Promise<DocumentType<OfferEntity> | null>;
  incCommentCount(id: string): Promise<DocumentType<OfferEntity> | null>;
  updateOfferRating(id: string): Promise<DocumentType<OfferEntity | null> | null>
  exists(id: string): Promise<boolean>;
}
