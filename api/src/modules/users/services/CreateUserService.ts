import { ICreateUserDTO } from '../dtos/ICreateUserDTO';
import { User } from '../infra/typeorm/entities/User';
import { IUsersRepository } from '../repositories/IUsersRepository';

export class CreateUserService {
  constructor(private usersRepository: IUsersRepository) {}

  public async execute({
    email,
    password,
    name,
  }: ICreateUserDTO): Promise<User> {
    const user = await this.usersRepository.create({ email, password, name });

    return user;
  }
}
