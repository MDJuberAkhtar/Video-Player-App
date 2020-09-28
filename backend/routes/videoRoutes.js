const express = require('express');
const videoController = require('./../controllers/videoController');
const authController = require('./../controllers/authController');


const router = express.Router();



router.post('/upload', authController.protect, videoController.ups.single('file'), videoController.upload);

router.get('/videoList', authController.protect , videoController.list);

module.exports = router;