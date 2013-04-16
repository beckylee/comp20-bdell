var express = require("express");

var app = express();
app.use(express.logger());

var MONGOHQ_URL = 'mongodb://beckylee.dell@tufts.edu:Flopsy@dharma.mongohq.com:10042/scores';
    

app.get('/submit.json', function(request, response){
	response.sendfile(__dirname + '/submit.html');
	});
	


/*
app.post('/submit.json', function(request, response){
	
	response.send("hi");	

});
*/

app.get('/highscores.json', function(request, response){
	
		var mongoUri = process.env.MONGOLAB_URI || process.env.MONGOHQ_URL || 'mongodb://localhost/scorecenter';
		var mongo = require('mongodb');

		var db = mongo.Db.connect(mongoUri, {safe:true}, function(error, scorecenter){
			if (error) throw error;
			
			db = scorecenter;
			console.log(scorecenter);
	
		});

	response.send("database is: " + db);

});
	

app.get('/', function(request, response){
	response.send('Hello FACE!');
});

var port = process.env.PORT || 5000;
app.listen(port, function(){
	console.log("listening on " + port);
});