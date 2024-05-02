import Joi from 'joi';

const id = Joi.string().uuid();
const name = Joi.string().min(3).max(15);
const email = Joi.string().email();
const image = Joi.string().uri();
const isBlock = Joi.boolean();

export const createUserSchema = Joi.object({
  name: name.required(),
  email: email.required(),
  image: image.required(),
});

export const updateUserSchema = Joi.object({
  name: name,
  email: email,
  image: image,
  isBlock: isBlock,
});

export const getUserSchema = Joi.object({
  id: id.required(),
});
