import { ICreateCategoryDTO } from 'modules/categories/dtos/ICreateCategoryDTO';
import { ICategoriesRepository } from 'modules/categories/repositories/ICategoriesRepository';
import { getRepository, Repository } from 'typeorm';

import { Category } from '../entities/Category';

export class CategoriesRepository implements ICategoriesRepository {
  private ormRepository: Repository<Category>;

  constructor() {
    this.ormRepository = getRepository(Category);
  }

  public async create({ name }: ICreateCategoryDTO): Promise<Category> {
    const category = this.ormRepository.create({
      name,
    });

    await this.ormRepository.save(category);

    return category;
  }
}
