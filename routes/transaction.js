var express = require('express');
var router = express.Router();
var controllers = require('../controllers/transaction')
var middleware = require('../middleware/auth')
/* GET users listing. */
router.get('/findByUser', middleware.decrypt, controllers.findByUser);
router.post('/create', middleware.decrypt, controllers.create);
router.delete('/delete/:id', middleware.decrypt, controllers.delete);
module.exports = router;
