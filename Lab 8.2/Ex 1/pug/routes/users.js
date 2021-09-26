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
console.log("Before post");
router.post('/', urlCodedParser,function(req, res, next) {
  console.log("Inside post");
  console.log(req.body);
  //res.send('respond on a Post');
});

module.exports = router;