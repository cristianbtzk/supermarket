import { Request, Response } from 'express';
import { CreateCategoryService } from 'modules/categories/services/CreateCategoryService';

import { CategoriesRepository } from '../../typeorm/repositories/CategoriesRepository';

export class CategoriesController {
  public async create(request: Request, response: Response): Promise<Response> {
    const { name } = request.body;

    const categoriesRepository = new CategoriesRepository();
    const createCategory = new CreateCategoryService(categoriesRepository);
    const category = await createCategory.execute({ name });

    return response.json(category);
  }
}
