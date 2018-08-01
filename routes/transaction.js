var express = require('express');
var router = express.Router();
var controllers = require('../controllers/transaction')
var middleware = require('../middleware/auth')
/* GET users listing. */
<<<<<<< HEAD
router.get('/findByUser', middleware.decrypt ,controllers.findByUser);
router.put('/create', middleware.decrypt, controllers.create);
=======
router.get('/findByUser', middleware.decrypt, controllers.findByUser);
router.post('/create', middleware.decrypt, controllers.create);
>>>>>>> 71d1cab61da60a7d9324a190013cf646cf5f0bbb
router.delete('/delete/:id', middleware.decrypt, controllers.delete);
module.exports = router;
