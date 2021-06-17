import { ICreateProductDTO } from '@modules/products/dtos/ICreateProductDTO';
import { IProductsRepository } from '@modules/products/repositories/IProductsRepository';
import { getRepository, Repository } from 'typeorm';

import { Product } from '../entities/Product';

export class ProductsRepository implements IProductsRepository {
  private ormRepository: Repository<Product>;

  constructor() {
    this.ormRepository = getRepository(Product);
  }
  public async create({
    category_id,
    name,
    description,
    price,
  }: ICreateProductDTO): Promise<Product> {
    const product = this.ormRepository.create({
      category_id,
      name,
      description,
      price,
    });

    await this.ormRepository.save(product);

    return product;
  }
}
