import { CreateOfferService } from '@modules/products/services/CreateOfferService';
import { Request, Response } from 'express';

import { OffersRepository } from '../../typeorm/repositories/OffersRepository';

export class OffersController {
  public async create(request: Request, response: Response): Promise<Response> {
    const { end_date, offer_price, product_id, start_date } = request.body;
    const offersRepository = new OffersRepository();
    const createOffer = new CreateOfferService(offersRepository);

    const offer = await createOffer.execute({
      end_date,
      offer_price,
      product_id,
      start_date,
    });

    return response.json(offer);
  }
}
