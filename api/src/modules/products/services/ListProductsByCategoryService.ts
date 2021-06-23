import { Product } from '../infra/typeorm/entities/Product';
import { IProductsRepository } from '../repositories/IProductsRepository';

interface IRequest {
  category_id: string;
  page: number;
  quantity: number;
}

interface IResponse {
  products: Product[];
  count: number;
}

export class ListProductsByCategoryService {
  constructor(private productsRepository: IProductsRepository) {}

  public async execute({
    category_id,
    page,
    quantity,
  }: IRequest): Promise<IResponse> {
    const response = await this.productsRepository.listByCategory({
      category_id,
      page,
      quantity,
    });

    return response;
  }
}
