import { AuthenticateService } from '@modules/users/services/AuthenticateService';
import { Request, Response } from 'express';

import { JWT } from '../../../lib/token/implementations/JWT';
import { UsersRepository } from '../../typeorm/repositories/UsersRepository';

export class AuthenticateController {
  public async create(request: Request, response: Response): Promise<Response> {
    const { email, password } = request.body;
    const usersRepository = new UsersRepository();
    const jwt = new JWT();
    const authenticate = new AuthenticateService(usersRepository, jwt);

    const user = await authenticate.execute(email, password);

    return response.json(user);
  }
}
