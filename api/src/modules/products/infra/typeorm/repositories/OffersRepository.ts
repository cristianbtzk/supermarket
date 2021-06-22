import { ICreateOfferDTO } from '@modules/products/dtos/ICreateOfferDTO';
import { IOffersRepository } from '@modules/products/repositories/IOffersRepository';
import { getRepository, Repository } from 'typeorm';

import { Offer } from '../entities/Offer';

export class OffersRepository implements IOffersRepository {
  private ormRepository: Repository<Offer>;

  constructor() {
    this.ormRepository = getRepository(Offer);
  }

  async create({
    end_date,
    offer_price,
    product_id,
    start_date,
  }: ICreateOfferDTO): Promise<Offer> {
    const offer = this.ormRepository.create({
      product_id,
      end_date,
      start_date,
      offer_price,
    });

    await this.ormRepository.save(offer);

    return offer;
  }
}
