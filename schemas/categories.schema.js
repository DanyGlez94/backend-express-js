import Joi from 'joi';

const categoryId = Joi.string().uuid();
const name = Joi.string().min(3).max(15);

export const createCategorySchema = Joi.object({
  name: name.required(),
});

export const updateCategorySchema = Joi.object({
  name: name,
});

export const getCategorySchema = Joi.object({
  categoryId: categoryId.required(),
});