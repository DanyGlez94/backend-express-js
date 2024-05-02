import express from 'express';
import productsRouter from './products.router.js';
import usersRouters from './users.router.js';
import categoriesRouter from './categories.router.js';

const routerApi = (app) => {
  const router = express.Router();
  app.use('/api/v1', router);
  router.use('/products', productsRouter);
  router.use('/users', usersRouters);
  router.use('/categories', categoriesRouter);
}

export default routerApi;
