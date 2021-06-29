import { User } from '../infra/typeorm/entities/User';
import { IAuthProvider } from '../lib/token/models/IAuthProvider';
import { IUsersRepository } from '../repositories/IUsersRepository';

interface IResponse {
  user: User;
  token: string;
}

export class AuthenticateService {
  constructor(
    private usersRepository: IUsersRepository,
    private authProvider: IAuthProvider,
  ) {}

  public async execute(email: string, password: string): Promise<IResponse> {
    const user = await this.usersRepository.findByEmail(email);

    if (!user) {
      throw new Error();
    }

    if (user.password !== password) {
      throw new Error();
    }

    const token = await this.authProvider.sign(user.id);
    return { user, token };
  }
}
