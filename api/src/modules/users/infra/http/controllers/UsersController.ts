import { CreateUserService } from '@modules/users/services/CreateUserService';
import { Request, Response } from 'express';

import { UsersRepository } from '../../typeorm/repositories/UsersRepository';

export class UsersController {
  public async create(request: Request, response: Response): Promise<Response> {
    const { name, email, password } = request.body;
    const usersRepository = new UsersRepository();
    const createUser = new CreateUserService(usersRepository);

    const user = await createUser.execute({ name, email, password });

    return response.json(user);
  }
}
