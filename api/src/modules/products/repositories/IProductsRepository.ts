import { ICreateProductDTO } from '../dtos/ICreateProductDTO';
import { IListProductsByCategoryDTO } from '../dtos/IListProductsByCategoryDTO';
import { Product } from '../infra/typeorm/entities/Product';

export interface IProductsRepository {
  create(data: ICreateProductDTO): Promise<Product>;
  listByCategory(
    data: IListProductsByCategoryDTO,
  ): Promise<{ products: Product[]; count: number }>;
}
