import { Category } from '../infra/typeorm/entities/Category';
import { ICategoriesRepository } from '../repositories/ICategoriesRepository';

interface IRequest {
  name: string;
}

export class CreateCategoryService {
  constructor(private categoriesRepository: ICategoriesRepository) {}

  public async execute({ name }: IRequest): Promise<Category> {
    const category = await this.categoriesRepository.create({ name });

    return category;
  }
}
