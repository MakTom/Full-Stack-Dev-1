var express = require('express');
var bodyParser = require('body-parser');
var router = express.Router();
var urlCodedParser = bodyParser.urlencoded({extended: true});
router.use(urlCodedParser);
/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

/* Post users. */
router.post('/names', urlCodedParser,function(req, res, next) {
  console.log(req.body);
  res.send('respond on a Post');
});

module.exports = router;