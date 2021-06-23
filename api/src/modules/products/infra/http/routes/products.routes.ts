import { Router } from 'express';

import { ProductsController } from '../controllers/ProductsController';

const productsController = new ProductsController();
const productsRouter = Router();

productsRouter.post('/', productsController.create);
productsRouter.get('/:category_id', productsController.index);

export { productsRouter };
