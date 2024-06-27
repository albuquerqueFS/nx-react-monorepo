const { faker } = require('@faker-js/faker');

exports.getFoodObject = function getFoodObject() {
  return {
    id: faker.string.uuid(),
    name: faker.food.dish(),
    price: faker.commerce.price({ min: 10, max: 80, dec: 2 }),
    category: faker.food.ethnicCategory(),
    description: faker.food.description(),
    image: faker.image.urlLoremFlickr({
      width: 200,
      height: 200,
      category: 'food',
    }),
  };
};
