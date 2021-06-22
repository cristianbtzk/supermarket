import { Offer } from '../infra/typeorm/entities/Offer';
import { IOffersRepository } from '../repositories/IOffersRepository';

interface IRequest {
  end_date: Date;
  offer_price: number;
  product_id: string;
  start_date: Date;
}

export class CreateOfferService {
  constructor(private offersRepository: IOffersRepository) {}

  public async execute({
    end_date,
    offer_price,
    product_id,
    start_date,
  }: IRequest): Promise<Offer> {
    const offer = await this.offersRepository.create({
      end_date,
      offer_price,
      product_id,
      start_date,
    });

    return offer;
  }
}
