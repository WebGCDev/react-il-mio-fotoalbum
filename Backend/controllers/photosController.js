const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const getAllPhotos = async (req, res) => {
  try {
    const photos = await prisma.photo.findMany({
      include: {
        categories: true,
      },
    });
    res.status(200).json(photos);
  } catch (error) {
    res.status(500).json({ error: 'Errore durante il recupero delle foto' });
  }
};

const createPhoto = async (req, res) => {
  const { title, description, image, visible, categoryId } = req.body;

  if (!title || !description || !image || categoryId === undefined) {
    return res
      .status(400)
      .json({ message: 'Alcuni campi obbligatori sono mancanti' });
  }

  try {
    const newPhoto = await prisma.photo.create({
      data: {
        title,
        description,
        image,
        visible,
        categories: {
          connect: { id: categoryId },
        },
      },
    });
    res.status(201).json(newPhoto);
  } catch (error) {
    res.status(500).json({ error: 'Errore durante la creazione della foto' });
  }
};

const getPhotoById = async (req, res) => {
  const { id } = req.params;

  try {
    const photo = await prisma.photo.findUnique({
      where: { id: parseInt(id, 10) },
      include: {
        categories: true,
      },
    });

    if (!photo) {
      return res.status(404).json({ message: 'Foto non trovata' });
    }

    res.status(200).json(photo);
  } catch (error) {
    res.status(500).json({ error: 'Errore durante il recupero della foto' });
  }
};

const updatePhoto = async (req, res) => {
  // Da Completare
};

const deletePhoto = async (req, res) => {
  const { id } = req.params;

  try {
    const photo = await prisma.photo.delete({
      where: { id: parseInt(id, 10) },
    });
    res.status(200).json(photo);
  } catch (error) {
    res.status(500).json({ error: "Errore durante l'eliminazione della foto" });
  }
};

module.exports = {
  getAllPhotos,
  createPhoto,
  getPhotoById,
  updatePhoto,
  deletePhoto,
};

// const photos = await prisma.photo.findMany({
// where: {
//     visible: true,
// },
//potrebbe essere utile se si vogliono filtrare solo le foto "visible"
