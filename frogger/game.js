
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
			ctx.drawImage(img, 0, 0, 399, 100, -5, 0, 410, 115);
	
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

		var smlog = 400;
		var smlog2 = 230;
		var smlog3 = 100;
	
		var trtl1 = 250;
		var trtl2 = 220;
		var trtl3 = 190;

		var trtl4 = 375;
		var trtl5 = 405;
		var trtl6 = 435;
	
		var trtl7 = 30;
		var trtl8 = 65;
	
		var prpcar = 50;
		var prpcar2 = 150;
		var prpcar3 = 250;
	
		var yellow = 90;
		var yellow2 = 275;
		var yellow3 = 355;

		function log(){
		// Put in big logs
			background();
			
			if(check()==true){
			logs = logs+10;
			log2 = log2+10;
			
			medlog = medlog+5;
			medlog2 = medlog2+5;
			medlog3 = medlog3+5;
			
			yellow = yellow - 7;
			yellow2 = yellow2 - 7;
			yellow3 = yellow3 - 7;
			
			prpcar = prpcar - 8;
			prpcar2 = prpcar2 - 8;
			prpcar3 = prpcar3 - 8;
			
			trtl1 = trtl1 - 8;
			trtl2 = trtl2 - 8;
			trtl3 = trtl3 - 8;	
			trtl4 = trtl4 - 8;
			trtl5 = trtl5 - 8;
			trtl6 = trtl6 - 8;
			trtl7 = trtl7 - 8;
			trtl8 = trtl8 - 8;	
			
			smlog = smlog + 2;
			smlog2 = smlog2 + 2;
			smlog3 = smlog3 + 2;
			}else{
			var dead = new Image();
			dead.src = 'assets/dead_frog.png';
			ctx.drawImage(dead, 0, 0, 30, 30,frog.x, frog.y, 40, 40);
			frog.x = 180;
			frog.y = 475;
			background();
			ctx.drawImage(img, 40, 360, 30, 30, 180, 475, 25, 25);
			}
			ctx.drawImage(img, 0, 165, 190, 30, logs, 185, 170, 30);
			
			ctx.drawImage(img, 0, 165, 190, 30, log2, 185, 170, 30);
	
			if(logs > 420){
				logs = -200;
			}		
			
			if(log2 > 420){
				log2 = -200;
			}
					
			ctx.drawImage(img, 0, 195, 210, 30, medlog, 117, 180, 30);
	
			ctx.drawImage(img, 0, 195, 210, 30, medlog2, 117, 180, 30);
	
			ctx.drawImage(img, 0, 195, 210, 30, medlog3, 117, 180, 30);
	
			if(medlog > 420){
				medlog = -150;
			}
			
			if(medlog2 > 420){
				medlog2 = -150;
			}
			
			if(medlog3>420){
				medlog3 = -150;
			}
			
				
		// Put in small logs
		
			ctx.drawImage(img, 0, 226, 100, 26, smlog, 219, 90, 25);
			ctx.drawImage(img, 0, 226, 100, 26, smlog2, 219, 90, 25);
			ctx.drawImage(img, 0, 226, 100, 26, smlog3, 219, 90, 25);
			
			if(smlog > 420){
				smlog = -100;
			}
			
			if(smlog2 > 420){
				smlog2 = -100;
			}
			
			if(smlog3 > 420){
				smlog3 = -100;
			}
	
		// some turtles
		
			ctx.drawImage(img, 10, 395, 35, 35, trtl1, 247, 30, 35);
			ctx.drawImage(img, 10, 395, 35, 35, trtl2, 247, 30, 35);
			ctx.drawImage(img, 10, 395, 35, 35, trtl3, 247, 30, 35);
		
			ctx.drawImage(img, 10, 395, 35, 35, trtl4, 247, 30, 35);
			ctx.drawImage(img, 10, 395, 35, 35, trtl5, 247, 30, 35);
			ctx.drawImage(img, 10, 395, 35, 35, trtl6, 247, 30, 35);

			//higher up turtles
			ctx.drawImage(img, 10, 395, 35, 35, trtl1, 145, 30, 35);
			ctx.drawImage(img, 10, 395, 35, 35, trtl2, 145, 30, 35);
			
			ctx.drawImage(img, 10, 395, 35, 35, trtl4, 145, 30, 35);
			ctx.drawImage(img, 10, 395, 35, 35, trtl5, 145, 30, 35);
	
			ctx.drawImage(img, 10, 395, 35, 35, trtl7, 145, 30, 35);
			ctx.drawImage(img, 10, 395, 35, 35, trtl8, 145, 30, 35);


			if(trtl1 < -50){
				trtl1 = 420;
			}
		
			if(trtl2 < -50){
				trtl2 = 420;
			}
		
			if(trtl3 < -50){
				trtl3 = 420;
			}

			if(trtl4 < -50){
				trtl4 = 420;
			}
		
			if(trtl5 < -50){
				trtl5 = 420;
			}
			
			if(trtl6 < -50){
				trtl6 = 420;
			}
		
			if(trtl7 < -50){
				trtl7 = 420;
			}
		
			if(trtl8 < -50){
				trtl8 = 420;
			}
		
		// purple car car
		
			ctx.drawImage(img, 0, 255, 40, 35, prpcar, 370, 40, 45);		
			ctx.drawImage(img, 0, 255, 40, 35, prpcar2, 370, 40, 45);		
			ctx.drawImage(img, 0, 255, 40, 35, prpcar3, 370, 40, 45);		
	
			if(prpcar < -100){
				prpcar = 420;
			}
			
			if(prpcar2 < -100){
				prpcar2 = 420;
			}
			
			if(prpcar3 < -100){
				prpcar3 = 420;
			}		

		// white and red car
			ctx.drawImage(img, 40, 252, 40, 45, smlog, 345, 40, 45);
			ctx.drawImage(img, 40, 252, 40, 45, smlog2, 345, 40, 45);
			ctx.drawImage(img, 40, 252, 40, 45, smlog3, 345, 40, 45);
		
		
		//tractor car thing
			ctx.drawImage(img, 40, 300, 30, 35, medlog, 420, 30, 35);
			ctx.drawImage(img, 40, 300, 30, 35, medlog2, 420, 30, 35);
			ctx.drawImage(img, 40, 300, 30, 35, medlog3, 420, 30, 35);

		// yellow cars
			
			ctx.drawImage(img, 80, 252, 35, 35, yellow, 435, 40, 40);
			ctx.drawImage(img, 80, 252, 35, 35, yellow2, 435, 40, 40);
			ctx.drawImage(img, 80, 252, 35, 35, yellow3, 435, 40, 40);

			if(yellow < -50){
				yellow = 420;
			}
			
			if(yellow2 < -50){
				yellow2 = 420;
			}
		
			if(yellow3 < -50){
				yellow3 = 420;
			}
		
			//trucks
			ctx.drawImage(img, 100, 300, 50, 35, prpcar, 325, 55, 40);
			ctx.drawImage(img, 100, 300, 50, 35, prpcar2, 325, 55, 40);
			ctx.drawImage(img, 100, 300, 50, 35, prpcar3, 325, 55, 40);

			// redraw the froggy
			ctx.drawImage(img, 40, 360, 30, 30, frog.x, frog.y, 25, 25);
			check();
		
		}

	// Life frogs
	
		ctx.drawImage(img, 10, 325, 30, 30, 0, 515, 20, 20);
		ctx.drawImage(img, 10, 325, 30, 30, 15, 515, 20, 20);
		


		
	 
	
	// start frog
		ctx.drawImage(img, 40, 360, 30, 30, 180, 475, 25, 25);
	}

// control frogger
	document.addEventListener("keydown", function(event){
	
	//go up
		if(event.keyCode == 38){
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
			frog.y = frog.y + 30;
			if(frog.y == 285){
				frog.y = 295
			}
			if(frog.y < 285){
				frog.y = frog.y+4;
			}
			if(frog.y >= 470){
				frog.y = 475;
			}
			ctx.drawImage(img, 40, 360, 30, 30, frog.x, frog.y, 25, 25);

		}
		
	//go left
		if(event.keyCode == 37){
			frog.x = frog.x - 45;
			
			if(frog.x < 20){
				frog.x = 0;
			}

			ctx.drawImage(img, 40, 360, 30, 30, frog.x, frog.y, 25, 25);
		}
	
	//go right
		if(event.keyCode == 39){
			frog.x = frog.x + 45;
			if(frog.x > 350){
				frog.x = 350;
			}
			ctx.drawImage(img, 40, 360, 30, 30, frog.x, frog.y, 25, 25);
		}

		if(frog.y == 85){
			if(frog.x == 0 || frog.x == 90 || frog.x == 180 || frog.x == 270 || frog.x == 350){
				points += 50;
				background();
				ctx.drawImage(img, 40, 360, 30, 30, frog.x, frog.y, 25, 25);
				
				frog.x = 180;
				frog.y = 475;
				//yay you won!
			}
		}
	});
	
	// check to see if the froggy died
	function check(){
		// check for yellow cars
		if(frog.y == 445){
			if(frog.x >= yellow-3 && frog.x <= yellow+3){
				console.log('dead!');
				return false;
			}
			if(frog.x >= yellow2-3 && frog.x <= yellow3+3){
				return false;
			}
			if(frog.x >= yellow3-3 && frog.x <= yellow3 +3){
				return false;
			}
			else{
				return true;
			}
		}
		// check for tractors
		if(frog.y == 415){
			if(frog.x >= medlog-3 && frog.x <= medlog+3){
				return false;
			}
			if(frog.x >= medlog2-3 && frog.x <= medlog2+3){
				return false;
			}
			if(frog.x >= medlog3-3 && frog.x <= medlog3+3){
				return false;
			}
			else{
				return true;
			}
		}
		
		//check for purple car
		if(frog.y == 385){
			if(frog.x >= prpcar-3 && frog.x <= prpcar+3){
				return false;
			}
			if(frog.x >=prpcar2-3 && frog.x <= prpcar2+3){
				return false;
			}
			if(frog.x >= prpcar3-3 && frog.x <= prpcar3+3){
				return false;
			}
			else{
				return true;
			}
		}
		
		//check for white and red car
		if(frog.y == 355){
			if(frog.x >= smlog-3 && frog.x <= smlog+3){
				return false;
			}
			if(frog.x >= smlog2-3 && frog.x <= smlog2+3){
				return false;
			}
			if(frog.x >= smlog3-3 && frog.x <= smlog3+3){
				return false;
			}
			else{
				return true;
			}
		}
		
		//check for truck
		if(frog.y == 325){
			if(frog.x >= prpcar-4 && frog.x <= prpcar+4){
				return false;
			}
			if(frog.x >=prpcar2-4 && frog.x <= prpcar2+4){
				return false;
			}
			if(frog.x >= prpcar3-4 && frog.x <= prpcar3+4){
				return false;
			}
			else{
				return true;
			}
		}
		else{
			return true;
		}
	}

}







