import { CreateProductService } from '@modules/products/services/CreateProductService';
import { ListProductsByCategoryService } from '@modules/products/services/ListProductsByCategoryService';
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

  public async index(request: Request, response: Response): Promise<Response> {
    const { page, quantity } = request.query;
    const { category_id } = request.params;

    const productsRepository = new ProductsRepository();
    const listProductsByCategory = new ListProductsByCategoryService(
      productsRepository,
    );

    const product = await listProductsByCategory.execute({
      category_id,
      page: Number(page),
      quantity: Number(quantity),
    });

    return response.json(product);
  }
}
