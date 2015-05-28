var express = require('express');
var app = express();
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test');

var ItemSchema = mongoose.Schema({
	o_id: String,
	objectText: String
	
});

var userList = mongoose.model('Listed', ItemSchema);

app.use(express.static(__dirname + "/public"));
app.use(express.bodyParser());
var list = function(req, res){
	userList.find({}, function(err, lists){
		res.json(lists);
	});
}

var toAdd = function(req, res){
	//console.log(req.body);
	//var newItem = new userList({o_id:"13", object:"Somethign"});
	var newItem = new userList(req.body);
	newItem.save(function(err, lists){
	});
	
}

var toDel = function(req, res){
	//console.log(req.body);
	userList.remove({'_id':req.body.payload}, function(err, lists){
		//console.log(lists._id);
		//userList.remove({'_id':})
	});
}

app.get('/lists', list);
app.post('/lists', toAdd);

app.post('/listsdel', toDel);


app.get('/', function(req, res){
	
});

app.listen(3000);
console.log('Listening on port 3000');