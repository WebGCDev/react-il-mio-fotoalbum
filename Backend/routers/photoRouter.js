const express = require('express');
const router = express.Router();
const photosController = require('../controllers/photosController');

router.get('/', photosController.getAllPhotos);
router.get('/:id', photosController.getPhotoById);
router.post('/', photosController.createPhoto);
router.put('/:id', photosController.updatePhoto);
router.delete('/:id', photosController.deletePhoto);

module.exports = router;
