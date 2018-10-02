const express = require('express');
const path = require('path');
const fs = require('fs');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Home | Pralisha International Ghana Company Limited' });
});

router.get('/about', function(req, res, next) {
  res.render('about', { title: 'About | Pralisha International Ghana Company Limited' });
});

router.get('/factory-process', function(req, res, next) {
  res.render('process', { title: 'Process | Pralisha International Ghana Company Limited' });
});

router.get('/quality', function(req, res, next) {
  res.render('quality', { title: 'Quality Assurance | Pralisha International Ghana Company Limited' });
});

router.get('/contact', function(req, res, next) {
  res.render('contact', { title: 'Contact us | Pralisha International Ghana Company Limited' });
});

router.get('/products', function(req, res, next) {
  res.render('products', { title: 'Products | Pralisha International Ghana Company Limited' });
});

router.get('/gallery', function(req, res, next) {
  let fullpath = path.join(__dirname, '..', 'public', 'gallery')
  fs.readdir(fullpath, (err, files) => {
    if (!err) {
      res.render('gallery', { title: 'Photo Gallery | Pralisha International Ghana Company Limited', pictures: files });
    }
  })
});

router.get('/product/:product', (req, res, next) => {
  var name = req.params.product
  let fullpath = path.join(__dirname, '..', 'public', name)
  let dirs = []
  fs.readdir(fullpath, (err, files) => {
    if (!err) {
      res.render(name, {product: name, title: name.toUpperCase()+" - Pralisha Int.", pictures: files})
    }
  })

  
})

module.exports = router;
