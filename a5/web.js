var express = require("express");

var app = express();
app.use(express.logger());

var MONGOHQ_URL = 'mongodb://beckylee.dell@tufts.edu:Flopsy@dharma.mongohq.com:10042/scores';
    
//get info for top score from user
app.get('/submit.json', function(request, response){
	response.sendfile(__dirname + '/submit.html');
	// do I need to send info from here to the post below?
});
	
//Save the info
app.post('/submit.json', function(request, response){
	//send information to mongodb somehow.
	response.send("Information saved! (eventually)" + game_title);	

});


//Allow user input for game, then search mongodb for that game
app.get('/highscores.json', function(request, response){
	
		response.sendfile(__dirname + '/highscores.html');
		//get the title and pass it to mongodb
		var mongoUri = process.env.MONGOLAB_URI || process.env.MONGOHQ_URL || 'mongodb://localhost/scorecenter';
		var mongo = require('mongodb');

		var db = mongo.Db.connect(mongoUri, {safe:true}, function(error, scorecenter){
			
			db = scorecenter;
			console.log(scorecenter);
		// go through and find top ten
		});

});

// Post the top 10 scores
app.post('/highscores.json', function(request, response){
	response.send('Top scores!');
	//show top ten scores
});
	

//homepage should show top scores for all games.
app.get('/', function(request, response){
		var mongoUri = process.env.MONGOLAB_URI || process.env.MONGOHQ_URL || 'mongodb://localhost/scorecenter';
		var mongo = require('mongodb');

		var db = mongo.Db.connect(mongoUri, {safe:true}, function(error, scorecenter){
			
			db = scorecenter;
			console.log(scorecenter);
		// find and list all of the top scores
		});
	response.send("top scores: " + db);
});



//user input for a username
app.get('/usersearch.json', function(request, response){
	response.sendfile(__dirname + '/usersearch.html');
	// search mongodb for that name
});

//show that user's scores
app.post('/usersearch.json', function(request, response){
	response.send('Scores for that user!');
	//show those scores
});

var port = process.env.PORT || 5000;
app.listen(port, function(){
	console.log("listening on " + port);
});