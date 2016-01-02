var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
	res.render('index');
});

router.get('/ou-me-trouver', function(req, res, next) {
	res.render('findme');
});

router.get('/a-propos', function(req, res, next) {
	res.render('whoami');
});

router.get('/menu-tarifs', function(req, res, next) {
	res.render('pricing');
});

router.get('/contact', function(req, res, next) {
	res.render('contact');
});

module.exports = router;
