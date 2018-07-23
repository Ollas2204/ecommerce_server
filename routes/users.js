var express = require('express');
var router = express.Router();
var controllers = require('../controllers/user')
/* GET users listing. */
router.post('/login_fb', controllers.login_fb);

module.exports = router;
