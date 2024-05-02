import { faker } from '@faker-js/faker';
import boom from '@hapi/boom';

class UserService {
  constructor() {
    this.users = [];
    this.generate();
  }

  generate() {
    const limit = 100;
    for (let i = 0; i < limit; i++) {
      this.users.push({
        id: faker.string.uuid(),
        name: faker.person.fullName(),
        email: faker.internet.email(),
        image: faker.image.avatar(),
        isBlock: faker.datatype.boolean(),
      });
    }
  }

  async create(data) {
    const newUser = {
      id: faker.string.uuid(),
      ...data,
    };
    this.users.push(newUser);
    return newUser;
  }

  find() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(this.users);
      }, 2000);
    });
  }

  async findOne(id) {
    const user = this.users.find((user) => user.id === id);
    if (!user) {
      throw boom.notFound('User not found');
    }
    if (user.isBlock) {
      throw boom.conflict('User is blocked');
    }
    return user;
  }

  async update(id, changes) {
    const userIndex = this.users.findIndex(
      (user) => user.id === id,
    );
    if (userIndex === -1) {
      throw boom.notFound('User not found');
    }
    const user = this.users[userIndex];
    this.users[userIndex] = {
      ...user,
      ...changes,
    };
    return this.users[userIndex];
  }

  async delete(id) {
    const userIndex = this.users.findIndex(
      (user) => user.id === id,
    );
    if (userIndex === -1) {
      throw boom.notFound('User not found');
    }
    const user = this.users[userIndex];
    this.users.splice(userIndex, 1);
    return user;
  }
}

export default UserService;