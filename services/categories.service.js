import { faker } from '@faker-js/faker';
import boom from '@hapi/boom';

class CategoriesService {

  constructor() {
    this.categories = [];
    this.generate();
  }
}