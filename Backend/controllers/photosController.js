const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function getAllPhotos(req, res) {
  try {
    const photos = await prisma.photo.findMany({
      include: {
        categories: true,
        user: true,
      },
    });
    res.json(photos);
  } catch (error) {
    res.status(500).json({ error: 'Error retrieving photos' });
  }
}

async function createPhoto(req, res) {
  if (!req.body) {
    return res.status(400).json({ message: 'Request body is missing' });
  }

  try {
    const { title, description, image, categoryIds, visible, userId } =
      req.body;
    const newPhoto = await prisma.photo.create({
      data: {
        title,
        description,
        image,
        visible,
        categories: {
          connect: categoryIds.map((id) => ({ id })),
        },
        user: {
          connect: { id: userId },
        },
      },
    });
    res.json(newPhoto);
  } catch (error) {
    res.status(500).json({ error: 'Error creating photo' });
  }
}

async function getPhotoById(req, res) {
  const { id } = req.params;
  try {
    const photo = await prisma.photo.findUnique({
      where: {
        id: parseInt(id),
      },
      include: {
        categories: true,
        user: true,
      },
    });
    if (photo) {
      res.json(photo);
    } else {
      res.status(404).json({ message: 'Photo not found' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Error retrieving photo' });
  }
}

async function updatePhoto(req, res) {
  //Da Completare
}

async function deletePhoto(req, res) {
  const { id } = req.params;
  try {
    const deletedPhoto = await prisma.photo.delete({
      where: {
        id: parseInt(id),
      },
    });
    res.json(deletedPhoto);
  } catch (error) {
    res.status(500).json({ error: 'Error deleting photo' });
  }
}

module.exports = {
  getAllPhotos,
  createPhoto,
  getPhotoById,
  updatePhoto,
  deletePhoto,
};
