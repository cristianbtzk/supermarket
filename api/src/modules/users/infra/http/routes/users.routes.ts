import { Router } from 'express';

import { AuthenticateController } from '../controllers/AuthenticateController';
import { UsersController } from '../controllers/UsersController';

const usersRouter = Router();

const usersController = new UsersController();
const authenticateController = new AuthenticateController();

usersRouter.post('/', usersController.create);
usersRouter.post('/authenticate', authenticateController.create);

export { usersRouter };
