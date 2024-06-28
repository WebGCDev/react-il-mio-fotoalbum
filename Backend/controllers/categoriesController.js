const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function getAllCategories(req, res) {
  try {
    const categories = await prisma.category.findMany();
    res.json(categories);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

async function createCategory(req, res) {
  if (!req.body) {
    return res.status(400).json({ message: 'Request body is missing' });
  }

  const { name } = req.body;

  try {
    const newCategory = await prisma.category.create({
      data: { name },
    });
    res.json(newCategory);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

module.exports = {
  getAllCategories,
  createCategory,
};
