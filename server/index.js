var express = require('express');
var bodyParser = require('body-parser')
var app = express();
var Event = require('./models/Event');
var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/todo');

app.use(bodyParser.json());

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.post('/api/event', function(req, res){
	console.log('body', req.body);
	var event = new Event({
		name: req.body.name,
		date: req.body.date
	})
	event.save(function(err, result){
		if(err){
			res.status(500)
			res.json(err)
		} else {
			res.send(result);
		}
	})
})

app.listen(3001)