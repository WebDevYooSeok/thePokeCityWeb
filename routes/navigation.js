var carouselArray = require('../carousel.json');
console.log(carouselArray);


exports.home = function(req, res){
  res.render('home', {
    "imageURL" :"/images/1.jpeg",
    "imageURL2" :"/images/2.jpeg",
    "imageURL3" :"/images/3.jpeg",
    "imageURL4" :"/images/4.jpeg",
    "imageId0": "c0",
    "imageId1": "c1",
    "imageId2": "c2",
    "imageId3": "c3"
  });


};

exports.menu = function(req, res){
  res.render('menu');

};

exports.gallery = function(req, res){
  res.render('gallery');

};

exports.about = function(req, res){
  res.render('about');

};

exports.contact = function(req, res){
  res.render('contact');

};
