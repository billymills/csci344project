/**
* Billy Mills
* CSCI 344
* project3/app.js
* April 4, 2012
*/


// Module dependencies.
 
var express = require('express');
var routes = require('./routes');
var beer = require('./routes/word/beer');
var pisgah = require('./routes/word/pisgah');
var craggie = require('./routes/word/craggie');
var wedge = require('./routes/word/wedge');
var highland = require('./routes/word/highland');
var app = module.exports = express.createServer();

var runTwitter = require('./twitter.js');
//var runSpotter = require('./spotter.js');
var t = new runTwitter();

// Configuration

app.configure(function(){
  app.set('views', __dirname + '/views');
  app.set('view engine', 'ejs');
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(app.router);
  app.use(express.static(__dirname + '/public'));
});

app.configure('development', function(){
  app.use(express.errorHandler({ dumpExceptions: true, showStack: true }));
});

app.configure('production', function(){
  app.use(express.errorHandler());
});


// Routes

/*
app.get('/', routes.index);
app.get('/semmypurewal', function(req, res) {
    res.send('Welcome to the profile of Semmy Purewal');
});
app.get('/users/:user', function(req, res) {
    res.send('Welcome to the profile of ' + req.params.user + '!');
});
*/

app.get('/', routes.index); //route for main page
//app.get('/users/:user', routes.user);
app.get('/word/:word', routes.word);
app.get('/word/beer', beer.index);
app.get('/word/pisgah', pisgah.index);
app.get('/word/craggie', craggie.index);
app.get('/word/wedge', wedge.index);
app.get('/word/highland', highland.index);

app.listen(3000);
console.log("Express server listening on port %d in %s mode", app.address().port, app.settings.env);
