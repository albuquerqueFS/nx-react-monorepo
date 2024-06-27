const express = require('express');
const cors = require('cors');
const { getFoodObject } = require('./generators');

const app = express();
app.use(cors());

let count = 0;

app.get('/api/foods/:id', (req, res) => {
  res.send(getFoodObject());
});

app.get('/api/foods', (req, res) => {
  // console.log('Generating foods...' + count++);

  if (count < 5) {
    res.send({
      data: Array(10)
        .fill(0)
        .map(() => getFoodObject()),
      nextPage: count,
    });
    return;
  }
  if (count === 5) {
    res.send({
      data: Array(10)
        .fill(0)
        .map(() => getFoodObject()),
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
