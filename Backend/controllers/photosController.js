const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function getAllPhotos(req, res) {
  try {
    const photos = await prisma.photo.findMany();
    res.json(photos);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

async function createPhoto(req, res) {
  if (!req.body) {
    return res.status(400).json({ message: 'Request body is missing' });
  }

  const { title, description, image, visible, categoryId } = req.body;

  try {
    const newPhoto = await prisma.photo.create({
      data: {
        title,
        description,
        image,
        visible,
        categories: {
          connect: {
            id: categoryId,
          },
        },
      },
    });
    res.json(newPhoto);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

async function getPhotoById(req, res) {
  const { id } = req.params;

  try {
    const photo = await prisma.photo.findUnique({
      where: { id: parseInt(id) },
    });
    res.json(photo);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

async function deletePhoto(req, res) {
  const { id } = req.params;

  try {
    const deletedPhoto = await prisma.photo.delete({
      where: { id: parseInt(id) },
    });
    res.json(deletedPhoto);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

module.exports = {
  getAllPhotos,
  createPhoto,
  getPhotoById,
  deletePhoto,
};

// const photos = await prisma.photo.findMany({
// where: {
//     visible: true,
// },
//potrebbe essere utile se si vogliono filtrare solo le foto "visible"
