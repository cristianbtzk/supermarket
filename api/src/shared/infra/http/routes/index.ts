import { categoriesRouter } from '@modules/categories/infra/http/routes/categories.routes';
import { Router } from 'express';

export const router = Router();

router.use('/api/categories', categoriesRouter);
