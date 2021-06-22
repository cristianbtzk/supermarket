import { ICreateOfferDTO } from '../dtos/ICreateOfferDTO';
import { Offer } from '../infra/typeorm/entities/Offer';

export interface IOffersRepository {
  create(data: ICreateOfferDTO): Promise<Offer>;
}
