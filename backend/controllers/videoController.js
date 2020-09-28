const multer = require('multer');
const dotenv = require('dotenv');
const VideoDetails = require('./../models/videoModel');
const catchAsync = require('./../utils/catchAsync');
dotenv.config({ path: './../config.env' });
const thumbnailGenerator = require('./../utils/videoThumbnail');

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'media/uploads/');
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname.replace(/ /g, '_'));
  }
});

 exports.ups = multer({
  storage: storage,
  limits: {
    fileSize: 1024 * 1024 * 50    // 50 MB
  }
});

exports.upload= (req,res,next)=>{

   thumbnailGenerator.generateThumbnail(
    // /api/videos is made publically available in App.js
    'http://127.0.0.1:' + process.env.PORT + '/api/videos/' + req.file.filename.replace(/ /g, '_'), 
    req.file.filename.replace(/ /g, '_'),
    req.userData.firstName);
  res.status(200).json({
    message: 'Video upload successful'
  });

};

exports.list= (req, res, next) => {
  VideoDetails
    .find()
    .exec()
    .then(docs => {
      res.status(200).json(docs);
    })
    .catch(err => {
      res.status(500).json({
        error: err
      });
    });
}

