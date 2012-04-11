/**
* Billy Mills
* CSCI 344
* project3/app.js
* April 4, 2012
*/


// Module dependencies.
 
var express = require('express');
var routes = require('./routes');
var awesome = require('./routes/word/awesome');
var cool = require('./routes/word/cool');
var rad = require('./routes/word/rad');
var gnarly = require('./routes/word/gnarly');
var groovy = require('./routes/word/groovy');
var app = module.exports = express.createServer();

var runTwitter = require('./twitter.js');
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

app.get('/', routes.index);
//app.get('/users/:user', routes.user);
app.get('/word/awesome', awesome.index);
app.get('/word/:word', routes.word);
//app.get('/word/awesome', awesome.http);
//app.get('/word/awesome', awesome.awesomeLink);
app.get('/word/cool', cool.index);
app.get('/word/rad', rad.index);
app.get('/word/gnarly', gnarly.index);
app.get('/word/groovy', groovy.index); //hand off to groovy controller

app.listen(3000);
console.log("Express server listening on port %d in %s mode", app.address().port, app.settings.env);
