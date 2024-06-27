const express = require('express');
const dotenv = require('dotenv');
const photoRouter = require('./routers/photoRouter');

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;
const host = process.env.HOST || 'localhost';

app.use(express.json());
app.use('/photos', photoRouter);

app.listen(port, host, () => {
  console.log(`Server running at http://${host}:${port}/`);
});
