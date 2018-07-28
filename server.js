const express = require('express');
const app = express();

app.use(express.static('public'))

app.get('/', (request, response) => {
  response.send('hello world, this is the real deal');
});

app.listen(3000, () => {
  console.log('Express intro running on localhost:3000');
});
