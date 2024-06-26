/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

import express from 'express';
import { faker } from '@faker-js/faker';
import cors from 'cors';

const app = express();
app.use(cors());
let count = 0;

app.get('/api/foods', (req, res) => {
  // console.log('Generating foods...' + count++);

  if (count < 5) {
    res.send({
      data: Array(10)
        .fill(0)
        .map(() => ({
          name: faker.food.dish(),
          price: faker.commerce.price({ min: 10, max: 80, dec: 2 }),
          category: faker.food.ethnicCategory(),
          description: faker.food.description(),
          image: faker.image.urlLoremFlickr({
            width: 200,
            height: 200,
            category: 'food',
          }),
        })),
      nextPage: count,
    });
    return;
  }
  if (count === 5) {
    res.send({
      data: Array(10)
        .fill(0)
        .map(() => ({
          name: faker.food.dish(),
          price: faker.commerce.price({ min: 10, max: 80, dec: 2 }),
          category: faker.food.ethnicCategory(),
          description: faker.food.description(),
          image: faker.image.urlLoremFlickr({
            width: 200,
            height: 200,
            category: 'food',
          }),
        })),
    });
    return;
  }
  res.send({ data: [] });
});

const port = process.env.PORT || 3333;
const server = app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}/api`);
});

// server.on('error', console.error);
