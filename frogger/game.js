
function start_game(){

	canvas = document.getElementById('game');
	var points = 0;
	var frog = [];
	frog.x = 180;
	frog.y = 475;
	
	if (canvas.getContext) {
	    ctx = canvas.getContext('2d');
	
		var img = new Image();
		
		img.src = 'assets/frogger_sprites.png';
		background();
		
		//draw the background
		function background(){
		    ctx.fillStyle = "rgb(19, 19, 70)";
		    ctx.fillRect (0, 0, 399, 282);
	    
		    ctx.fillStyle = "rgb(00, 00, 00)";
		    ctx.fillRect(0, 282, 399, 282);
	
	
			var img = new Image();
			img.src = 'assets/frogger_sprites.png';
		
	//Text
			ctx.fillStyle="rgb(0, 255, 0)";
			ctx.font="20px Verdana";
			ctx.fillText("Level 1", 50, 535);
			
			ctx.font="11px Verdana";
			ctx.fillText("Score: "+points +"	Highscore: 0", 0, 555);
			
	// Put in "frogger" at the top, and green ending 
			ctx.drawImage(img, 0, 0, 399, 100, 0, 0, 399, 115);
	
	// Put in large purple borders	
			ctx.drawImage(img, 0, 120, 399, 30, 0, 283, 399, 30);
			ctx.drawImage(img, 0, 120, 399, 30, 0, 475, 399, 30);
		}
			
			
	delay = 80;
	setInterval(log, delay);
	var logs = 400;
	var log2 = 150;
	
	var medlog = 350;
	var medlog2 = 150;
	var medlog3 = 0;

	function log(){
	// Put in big logs
		background();
		logs = logs-10;
		log2 = log2-10;

		ctx.drawImage(img, 0, 165, 190, 30, logs, 185, 170, 30);
		
		ctx.drawImage(img, 0, 165, 190, 30, log2, 185, 170, 30);

		if(logs < -200){
			logs = 420;
		}		
		
		if(log2 < -200){
			log2 = 420;
		}
		
		ctx.drawImage(img, 40, 360, 30, 30, frog.x, frog.y, 25, 25);
	
		medlog = medlog-5;
		medlog2 = medlog2-5;
		medlog3 = medlog3-5;
		
		ctx.drawImage(img, 0, 195, 210, 30, medlog, 117, 180, 30);

		ctx.drawImage(img, 0, 195, 210, 30, medlog2, 117, 180, 30);

		ctx.drawImage(img, 0, 195, 210, 30, medlog3, 117, 180, 30);

		if(medlog < -150){
			medlog = 420;
		}
		
		if(medlog2 < -150){
			medlog2 = 420;
		}
		
		if(medlog3<-150){
			medlog3 = 420;
		}
		
	}
	
	// Put in small logs
//		ctx.drawImage(img, 0, 226, 100, 26, -25, 150, 90, 25);
//		ctx.drawImage(img, 0, 226, 100, 26, 140, 150, 90, 25);
//		ctx.drawImage(img, 0, 226, 100, 26, 260, 150, 90, 25);
//		ctx.drawImage(img, 0, 226, 100, 26, 375, 150, 90, 25);
		
//		ctx.drawImage(img, 0, 226, 100, 26, 25, 245, 90, 25);
//		ctx.drawImage(img, 0, 226, 100, 26, 130, 245, 90, 25);
//		ctx.drawImage(img, 0, 226, 100, 26, 290, 245, 90, 25);


	// Life frogs
	
		ctx.drawImage(img, 10, 325, 30, 30, 0, 515, 20, 20);
		ctx.drawImage(img, 10, 325, 30, 30, 15, 515, 20, 20);
		
	// purple car car
		ctx.drawImage(img, 0, 252, 45, 45, 20, 380, 45, 45);

	// white red car
		ctx.drawImage(img, 40, 252, 40, 45, 200, 347, 40, 45);
		
	 
	
	// start frog
		ctx.drawImage(img, 40, 360, 30, 30, 180, 475, 25, 25);
	}

// control frogger
	document.addEventListener("keydown", function(event){
	
	//go up
		if(event.keyCode == 38){
			background();
			frog.y = frog.y - 30;
			if(frog.y == 295){
				frog.y = 285;
			}
			if(frog.y < 285){
				frog.y = frog.y - 4;
			}
			if(frog.y < 100){
				frog.y = 85;
				if(frog.x == 30|| frog.x == 0){
					frog.x == 20;
				}
			}
			ctx.drawImage(img, 40, 360, 30, 30, frog.x, frog.y, 25, 25);
			
			points += 10;
			
			console.log(frog.y);
		}
		
	// go down
		if(event.keyCode == 40){
			background();
			frog.y = frog.y + 30;
			if(frog.y == 285){
				frog.y = 295
			}
			if(frog.y < 285){
				frog.y = frog.y+15;
			}
			if(frog.y >= 470){
				frog.y = 475;
			}
			ctx.drawImage(img, 40, 360, 30, 30, frog.x, frog.y, 25, 25);

		}
		
	//go left
		if(event.keyCode == 37){
			background();
			frog.x = frog.x - 40;
			
			if(frog.x < 20){
				frog.x = 20;
			}

			ctx.drawImage(img, 40, 360, 30, 30, frog.x, frog.y, 25, 25);
		}
	
	//go right
		if(event.keyCode == 39){
			background();
			frog.x = frog.x + 40;
			if(frog.x > 340){
				frog.x = 340;
			}
			ctx.drawImage(img, 40, 360, 30, 30, frog.x, frog.y, 25, 25);
		}
	
		});
	

}

