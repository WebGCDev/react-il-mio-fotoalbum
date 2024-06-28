const express = require('express');
const categoriesController = require('../controllers/categoriesController');
const router = express.Router();

router.get('/', categoriesController.getAllCategories);
router.post('/', categoriesController.createCategory);

module.exports = router;
