import { CreateOfferDto } from './dto/create-offer.dto.js';
import { DocumentType } from '@typegoose/typegoose';
import { OfferEntity } from './offer.entity.js';
import { UpdateOfferDto } from './dto/update-offer.dto.js';


export interface OfferService {
  create(dto: CreateOfferDto): Promise<DocumentType<OfferEntity>>;
  findById(id: string): Promise<DocumentType<OfferEntity> | null>;
  find(): Promise<DocumentType<OfferEntity>[]>;
  deleteById(offerId: string): Promise<DocumentType<OfferEntity> | null>;
  updateById(offerId: string, dto: UpdateOfferDto): Promise<DocumentType<OfferEntity> | null>;
  findByCityAndPremium(city: string, isPremium: boolean): Promise<DocumentType<OfferEntity>[] | null>;
  findByFavorite(isFavorite: boolean): Promise<DocumentType<OfferEntity>[] | null>;
  addToFavorite(id: string): Promise<DocumentType<OfferEntity> | null>;
  removeFromFavorite(id: string): Promise<DocumentType<OfferEntity> | null>;
  incCommentCount(offerId: string): Promise<DocumentType<OfferEntity> | null>;
  exists(id: string): Promise<boolean>;
  updateOfferRating(id: string): Promise<DocumentType<OfferEntity | null> | null>
}
