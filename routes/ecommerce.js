var express = require('express');
var router = express.Router();
var controllers = require('../controllers/ecommerce')
var middleware = require('../middleware/auth')
var images = require('../helpers/images')
/* GET users listing. */
router.get('/find', middleware.decrypt ,controllers.find);
router.post('/create', middleware.decrypt, images.multer.single('image'),
  images.sendUploadToGCS ,controllers.create);
router.put('/update/:id', middleware.decrypt,images.multer.single('image'),
  images.sendUploadToGCS , controllers.update);
router.delete('/delete/:id', middleware.decrypt, controllers.delete);
module.exports = router;
    1   
