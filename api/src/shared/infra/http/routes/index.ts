import { categoriesRouter } from '@modules/categories/infra/http/routes/categories.routes';
import { productsRouter } from '@modules/products/infra/http/routes/products.routes';
import { Router } from 'express';

export const router = Router();

router.use('/api/categories', categoriesRouter);
router.use('/api/products', productsRouter);
