const express = require('express');

const router = express.Router();

const homeController = require('../controllers/home_controller')

router.get('/', homeController.home);
router.get('/about',homeController.about);
router.get('/explore',homeController.explore);
router.get('/new-review',homeController.review);
router.post('/add-review',homeController.add_review);
router.get('/delete-review', homeController.delete_review);

module.exports = router;