import { Product } from '../infra/typeorm/entities/Product';
import { IProductsRepository } from '../repositories/IProductsRepository';

interface IRequest {
  category_id: string;
  name: string;
  description: string;
  price: number;
}

export class CreateProductService {
  constructor(private productsRepository: IProductsRepository) {}

  public async execute({
    category_id,
    price,
    description,
    name,
  }: IRequest): Promise<Product> {
    const product = await this.productsRepository.create({
      category_id,
      price,
      description,
      name,
    });

    return product;
  }
}
