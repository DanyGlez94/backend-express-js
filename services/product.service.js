import { faker } from '@faker-js/faker';
import boom from '@hapi/boom';

class ProductsService {
  constructor() {
    this.products = [];
    this.generate();
  }

  generate() {
    const limit = 100;
    for (let i = 0; i < limit; i++) {
      this.products.push({
        id: faker.string.uuid(),
        name: faker.person.fullName(),
        price: parseInt(
          faker.commerce.price({
            min: 1000,
            max: 3000,
            dec: 0,
          }),
        ),
        image: faker.image.url(),
        isBlock: faker.datatype.boolean(),
      });
    }
  }

  async create(data) {
    const newProduct = {
      id: faker.string.uuid(),
      ...data,
    };
    this.products.push(newProduct);
    return newProduct;
  }

  find() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(this.products);
      }, 2000);
    });
  }

  async findOne(id) {
    const product = this.products.find((product) => product.id === id);
    if (!product) {
      throw boom.notFound('Product not found');
    }
    if (product.isBlock) {
      throw boom.conflict('Product is blocked');
    }
    return product;
  }

  async update(id, changes) {
    const productIndex = this.products.findIndex(
      (product) => product.id === id,
    );
    if (productIndex === -1) {
      throw boom.notFound('Product not found');
    }
    const product = this.products[productIndex];
    this.products[productIndex] = {
      ...product,
      ...changes,
    };
    return this.products[productIndex];
  }

  async delete(id) {
    const productIndex = this.products.findIndex(
      (product) => product.id === id,
    );
    if (productIndex === -1) {
      throw boom.notFound('Product not found');
    }
    this.products.splice(productIndex, 1);
    return { id };
  }
}

export default ProductsService;
