import { categoriesRouter } from '@modules/categories/infra/http/routes/categories.routes';
import { offersRouter } from '@modules/products/infra/http/routes/offers.routes';
import { productsRouter } from '@modules/products/infra/http/routes/products.routes';
import { usersRouter } from '@modules/users/infra/http/routes/users.routes';
import { Router } from 'express';

export const router = Router();

router.use('/api/categories', categoriesRouter);
router.use('/api/products', productsRouter);
router.use('/api/offers', offersRouter);
router.use('/api/users', usersRouter);
