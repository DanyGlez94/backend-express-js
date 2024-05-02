import express from 'express';
import { faker } from '@faker-js/faker';

const router = express.Router();

router.get('/:categoryId/products/:productId', (req, res) => {
  const { categoryId, productId } = req.params;
  res.json({
    categoryId,
    productId,
    name: `Product ${productId}`,
    price: 100 * productId,
  });
});

export default router;
