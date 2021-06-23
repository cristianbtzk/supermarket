import { ICreateProductDTO } from '@modules/products/dtos/ICreateProductDTO';
import { IListProductsByCategoryDTO } from '@modules/products/dtos/IListProductsByCategoryDTO';
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

  public async listByCategory({
    category_id,
    page,
    quantity,
  }: IListProductsByCategoryDTO): Promise<{
    products: Product[];
    count: number;
  }> {
    const [products, count] = await this.ormRepository.findAndCount({
      where: {
        category_id,
      },
      skip: (page - 1) * quantity,
      take: quantity,
    });

    return { products, count };
  }
}
