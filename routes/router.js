// import express
var express = require('express');

// inst a express router Obj
var router = express.Router();

//get defult route
router.get('/', function(req, res, next) {
    return res.send('working');
});

//export router
module.exports = router;