import { faker } from '@faker-js/faker';
import boom from '@hapi/boom';

class CategoriesService {
  constructor() {
    this.categories = [];
    this.generate();
  }

  generate() {
    const categoriesMap = new Map();
    const limit = 10;
    for (let i = 0; i < limit; i++) {
      const categoryName = faker.commerce.department();
      const categoryId = categoriesMap.has(categoryName)
        ? categoriesMap.get(categoryName)
        : faker.string.uuid();
      categoriesMap.set(categoryName, categoryId);
      this.categories.push({
        id: categoryId,
        name: categoryName,
      });
    }
  }

  async create(data) {
    const newCategory = {
      id: faker.string.uuid(),
      ...data,
    };
    this.categories.push(newCategory);
    return newCategory;
  }

  find() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(this.categories);
      }, 2000);
    });
  }

  async findOne(id) {
    const category = this.categories.find((category) => category.id === id);
    if (!category) {
      throw boom.notFound('Category not found');
    }
    return category;
  }

  async update(id, changes) {
    const categoryIndex = this.categories.findIndex(
      (category) => category.id === id,
    );
    if (categoryIndex === -1) {
      throw boom.notFound('Category not found');
    }
    const category = this.categories[categoryIndex];
    this.categories[categoryIndex] = {
      ...category,
      ...changes,
    };
    return this.categories[categoryIndex];
  }

  async delete(id) {
    const categoryIndex = this.categories.findIndex(
      (category) => category.id === id,
    );
    if (categoryIndex === -1) {
      throw boom.notFound('Category not found');
    }
    const category = this.categories[categoryIndex];
    this.categories.splice(categoryIndex, 1);
    return category;
  }
}

export default CategoriesService;
