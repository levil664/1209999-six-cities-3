import { inject, injectable } from 'inversify';
import { OfferService } from './offer-service.interface.js';
import { Logger } from '../../libs/logger';
import { DocumentType, types } from '@typegoose/typegoose';
import { OfferEntity } from './offer.entity.js';
import { CreateOfferDto } from './dto/create-offer.dto.js';
import { Component } from '../../types';
import { SortType } from '../../types';
import { DEFAULT_OFFER_COUNT, PREMIUM_OFFER_COUNT } from './offer.constant.js';
import { UpdateOfferDto } from './dto/update-offer.dto.js';


@injectable()
export class DefaultOfferService implements OfferService {
  constructor(
    @inject(Component.Logger) private readonly logger: Logger,
    @inject(Component.OfferModel) private readonly offerModel: types.ModelType<OfferEntity>
  ) {}

  public async create(dto: CreateOfferDto): Promise<DocumentType<OfferEntity>> {
    const result = await this.offerModel.create(dto);
    this.logger.info(`New offer created: ${dto.name}`);

    return result;
  }

  public async findById(offerId: string): Promise<DocumentType<OfferEntity> | null> {
    return this.offerModel.findById(offerId).exec();
  }

  public async find(): Promise<DocumentType<OfferEntity>[]> {
    return this.offerModel
      .find()
      .populate(['userId'])
      .exec();
  }

  public async deleteById(offerId: string): Promise<DocumentType<OfferEntity> | null> {
    return this.offerModel
      .findByIdAndDelete(offerId)
      .exec();
  }

  public async updateById(offerId: string, dto: UpdateOfferDto): Promise<DocumentType<OfferEntity> | null> {
    return this.offerModel
      .findByIdAndUpdate(offerId, dto, { new: true })
      .populate(['userId'])
      .exec();
  }

  public async exists(documentId: string): Promise<boolean> {
    return (await this.offerModel
      .exists({ _id: documentId })) !== null;
  }

  public async incCommentCount(offerId: string): Promise<DocumentType<OfferEntity> | null> {
    return this.offerModel
      .findByIdAndUpdate(offerId, {
        '$inc': {
          commentCount: 1,
        }
      }).exec();
  }

  public async findByCityAndPremium(city: string, isPremium: boolean, count?: number, offset?: number): Promise<DocumentType<OfferEntity>[] | null> {
    const limit = count ?? PREMIUM_OFFER_COUNT;
    const skip = offset ?? 0;
    return this.offerModel
      .find({ city: city, isPremium: isPremium })
      .sort({ createdAt: SortType.Down })
      .skip(skip)
      .limit(limit)
      .populate('userId')
      .exec();
  }

  public async findByFavorite(isFavorite: boolean, count?: number, offset?: number): Promise<DocumentType<OfferEntity>[] | null> {
    const limit = count ?? DEFAULT_OFFER_COUNT;
    const skip = offset ?? 0;
    return this.offerModel
      .find({ isFavorite: isFavorite })
      .skip(skip)
      .limit(limit)
      .populate('userId')
      .exec();
  }

  public async addToFavorite(id: string): Promise<DocumentType<OfferEntity> | null> {
    return this.offerModel
      .findByIdAndUpdate(id, {isFavorite: true}, {new: true})
      .exec();
  }

  public async removeFromFavorite(id: string): Promise<DocumentType<OfferEntity> | null> {
    return this.offerModel
      .findByIdAndUpdate(id, {isFavorite: false}, {new: true})
      .exec();
  }

  public async updateOfferRating(id: string): Promise<DocumentType<OfferEntity | null> | null> {
    const rating = await this.offerModel
      .aggregate([
        {
          $lookup: {
            from: 'comments',
            pipeline: [
              {$match: {offerId: id}}, {$project: {rating: 1}},
              {$group: {_id: null, avg: {'$avg': '$rating'}}}
            ], as: 'avg'
          },
        },
      ]).exec();

    return this.offerModel
      .findByIdAndUpdate(id, {rating: rating[0]}, {new: true})
      .populate('userId')
      .exec();
  }
}
