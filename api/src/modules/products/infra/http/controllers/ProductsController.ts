import { CreateProductService } from '@modules/products/services/CreateProductService';
import { Request, Response } from 'express';

import { ProductsRepository } from '../../typeorm/repositories/ProductsRepository';

export class ProductsController {
  public async create(request: Request, response: Response): Promise<Response> {
    const { category_id, name, description, price } = request.body;

    const productsRepository = new ProductsRepository();
    const createProduct = new CreateProductService(productsRepository);

    const product = await createProduct.execute({
      category_id,
      name,
      description,
      price,
    });

    return response.json(product);
  }
}
