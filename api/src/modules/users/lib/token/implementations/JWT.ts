import authConfig from '@config/auth/auth';
import { sign } from 'jsonwebtoken';

import { IAuthProvider } from '../models/IAuthProvider';

export class JWT implements IAuthProvider {
  public async sign(userId: string): Promise<string> {
    const token = sign({}, authConfig.jwt.secret, {
      subject: userId,
      expiresIn: authConfig.jwt.expiresIn,
    });

    return token;
  }
}
