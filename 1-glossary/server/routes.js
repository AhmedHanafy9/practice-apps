var controller = require('./controllers.js');
var router = require('express').Router();

router.get('/words', controller.get);
router.post('/words', controller.post);
router.put('/words', controller.put);
router.delete('/words', controller.delete)

module.exports = router;