import { Router } from 'express';

import { ProductsController } from '../controllers/ProductsController';

const productsController = new ProductsController();
const productsRouter = Router();

productsRouter.post('/', productsController.create);

export { productsRouter };
