import { Router } from 'express';

import { OffersController } from '../controllers/OffersController';

const offersController = new OffersController();
const offersRouter = Router();

offersRouter.post('/', offersController.create);

export { offersRouter };
