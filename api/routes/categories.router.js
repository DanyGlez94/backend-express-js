import express from 'express';
import CategoriesService from '../services/categories.service.js';
import validatorHandler from '../middlewares/validator.handler.js';
import {
  createCategorySchema,
  updateCategorySchema,
  getCategorySchema,
} from '../schemas/categories.schema.js';

const router = express.Router();
const service = new CategoriesService();

router.get('/', async (req, res) => {
  const categories = await service.find();
  res.json(categories);
});

router.get('/:categoryId',
validatorHandler(getCategorySchema, 'params'),
async (req, res) => {
  const { categoryId } = req.params;
  const category = await service.findOne(categoryId);
  res.json(category);
});

router.post('/',
validatorHandler(createCategorySchema, 'body'),
async (req, res) => {
  const body = req.body;
  const newCategory = await service.create(body);
  res.status(201).json(newCategory);
});

router.patch('/:categoryId',
validatorHandler(getCategorySchema, 'params'),
validatorHandler(updateCategorySchema, 'body'),
async (req, res, next) => {
  try {
    const body = req.body;
    const { categoryId } = req.params;
    const category = await service.update(categoryId, body);
    res.json(category);
  } catch (error) {
    next(error);
  }
});

router.delete('/:categoryId', async (req, res, next) => {
  try {
    const { categoryId } = req.params;
    const category = await service.delete(categoryId);
    res.json(category);
  } catch (error) {
    next(error);
  }
});

export default router;
