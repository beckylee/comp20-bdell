var express = require("express");

var app = express();
app.use(express.logger());
app.use(express.bodyParser());

var MONGOHQ_URL = 'mongodb://beckylee.dell@tufts.edu:Flopsy@dharma.mongohq.com:10042/scores';

var mongoUri = process.env.MONGOLAB_URI || process.env.MONGOHQ_URL || 'mongodb://localhost/scorecenter';
	
var mongo = require('mongodb');

	db = mongo.Db.connect(mongoUri, {safe: true, strict: false}, function(error, scorecenter){
		if(error) throw error;
		console.log(error);
		db = scorecenter;
	});

//var username;
//get info for top score from user
app.get('/submit.json', function(request, response){
	response.sendfile(__dirname + '/submit.html');
});
	
//Save the info
app.post('/submit.json', function(request, response){
	//send information to mongob somehow.
	
	var game_title = request.body.game_title;
	var user = request.body.username;
	var score = request.body.score;
	
	//get the current date (date of submission)
	var date = new Date();
	var hour = date.getHours();
	var minute = date.getMinutes();
	var day = date.getDate();	
	var month = date.getMonth() + 1;
	var year = date.getFullYear();
		
	var curr_date = month + "/" + day + "/" + year + "/" + hour + ":" + minute;
	
	var data = {"game_title" : game_title, "username" : user,"score" : score,"created_at" : curr_date};
	
	console.log(data);
	
	mongo.Db.connect(mongoUri, {safe: true}, function(error, db){
		if(error) throw error;
		var collection = db.collection("scorecenter");
		collection.insert(data);
	});

	
	response.sendfile(__dirname + '/submit.html');

});


//Allow user input for game, then search mongodb for that game
app.get('/highscores.json', function(request, response){
	
		response.sendfile(__dirname + '/highscores.html');
		//get the title and pass it to mongodb

});

// Post the top 10 scores
app.post('/highscores.json', function(request, response){
	var game_title = request.body.game_title;
	
	mongo.Db.connect(mongoUri, {safe: true}, function(error, db){
		if(error) throw error;
		var collection = db.collection("scorecenter");
		collection.find({game_title: game_title}).toArray(function(error, results){
//			array.sort(results);
			response.send(results);
		});
	});
//	response.send('Top scores!');
	//show top ten scores
});
	

//homepage should show top scores for all games.
app.get('/', function(request, response){
	var info;

//	response.send("top scores: " + info);
});

app.post('/', function(request, response){
/*	mongo.Db.connect(mongoUri, {safe: true}, function(error, db){
		if(error) throw error;
		var collection = db.collection("scorecenter");
		collection.find({}).toArray(function(error, results){
//			array.sort(results);
*/			response.send(results);
//	});
});



//user input for a username
app.get('/usersearch.json', function(request, response){
	response.sendfile(__dirname + '/usersearch.html');
	// search mongodb for that name
});

//show that user's scores
app.post('/usersearch.json', function(request, response){
	var user = request.body.username;
	console.log("user: " + user);
	
	mongo.Db.connect(mongoUri, {safe: true}, function(error, db){
		if(error) throw error;
		var collection = db.collection("scorecenter");
		collection.find({username: user}).toArray(function(error, results){
			response.send(results);
		});
	});
	

	//show those scores
});

var port = process.env.PORT || 5000;
app.listen(port, function(){
	console.log("listening on " + port);
});