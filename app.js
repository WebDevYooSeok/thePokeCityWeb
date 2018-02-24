var express = require('express');
var handlebars = require('express-handlebars');
var bodyParser = require('body-parser');
var path = require('path');
var app = express();


var navigation = require('./routes/navigation');

// View Engine
app.engine('handlebars', handlebars({defaultLayout:'main'}));
app.set('view engine', 'handlebars');
app.set('views', path.join(__dirname, 'views'));


// Body Parser Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

// global variable
app.use(function(req, res, next){
  // variable declaration here
  next();
});


// Set Static path
app.use(express.static(path.join(__dirname, 'public')));




// route
app.get('/', navigation.home);
app.get('/menu', navigation.menu);
app.get('/gallery', navigation.gallery);
app.get('/about', navigation.about);
app.get('/contact', navigation.contact);




app.listen(3000, function(){
  console.log('server started on Port 3000 ... the Poke City Web start!');
});
