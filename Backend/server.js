const express = require('express');
const { PrismaClient } = require('@prisma/client');
const dotenv = require('dotenv');

dotenv.config();

const prisma = new PrismaClient();
const app = express();
const port = process.env.PORT || 3000;
const host = process.env.HOST || 'localhost';

app.get('/', async (req, res) => {
  try {
    const photos = await prisma.photo.findMany();
    res.json(photos);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

app.listen(port, host, () => {
  console.log(`Server running at http://${host}:${port}/`);
});
