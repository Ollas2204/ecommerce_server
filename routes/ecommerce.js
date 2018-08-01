var express = require('express');
var router = express.Router();
var controllers = require('../controllers/ecommerce')
var middleware = require('../middleware/auth')
var images = require('../helpers/images')
/* GET users listing. */
<<<<<<< HEAD
router.get('/find',controllers.find);
router.post('/create', images.multer.single('image'),
  images.sendUploadToGCS ,controllers.create);
router.put('/update/:id', middleware.decrypt,images.multer.single('image'),
  images.sendUploadToGCS , controllers.update);
=======
router.get('/find', middleware.decrypt, controllers.find);
router.post('/create', middleware.decrypt, images.multer.single('image'),
  images.sendUploadToGCS, controllers.create);
router.put('/update/:id', middleware.decrypt, images.multer.single('image'),
  images.sendUploadToGCS, controllers.update);
>>>>>>> 71d1cab61da60a7d9324a190013cf646cf5f0bbb
router.delete('/delete/:id', middleware.decrypt, controllers.delete);
module.exports = router;
