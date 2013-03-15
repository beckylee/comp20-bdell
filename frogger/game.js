
function start_game(){

	canvas = document.getElementById('game');
	var points = 0;
	var life = 2;
	var level = 1;
	var wins = 0;
	var girl = 0;
	var frog = [];
	frog.x = 180;
	frog.y = 475;

	
	if (canvas.getContext) {
	    ctx = canvas.getContext('2d');
	
		var img = new Image();
		
		img.src = 'assets/frogger_sprites.png';
		background();
		
		var x1 = 130;
		var x2 = 130;
		var x3 = 130;
		var x4 = 130;
		var x5 = 130;
		var y1 = 395;
		var y2 = 395;
		var y3 = 395;
		var y4 = 395;
		var y5 = 395;
		
		//draw the background
		function background(){
		
		    ctx.fillStyle = "rgb(19, 19, 70)";
		    ctx.fillRect (0, 0, 399, 282);
	    
		    ctx.fillStyle = "rgb(00, 00, 00)";
		    ctx.fillRect(0, 282, 399, 282);
	
	
			var img = new Image();
			img.src = 'assets/frogger_sprites.png';

			// draw the landing pads (with or without frogs on them)
			ctx.drawImage(img, x1, y1, 35, 35, 5, 80, 30, 35);
			ctx.drawImage(img, x2, y2, 35, 35, 93, 80, 30, 35);
			ctx.drawImage(img, x3, y3, 35, 35, 181, 80, 30, 35);
			ctx.drawImage(img, x4, y4, 35, 35, 269, 80, 30, 35);
			ctx.drawImage(img, x5, y5, 35, 35, 355, 80, 30, 35);
			
					ctx.drawImage(img, 10, 325, 30, 30, 0, 515, 20, 20);
		ctx.drawImage(img, 10, 325, 30, 30, 15, 515, 20, 20);
	//Text
			ctx.fillStyle="rgb(0, 255, 0)";
			ctx.font="20px Verdana";
			ctx.fillText("Level " + level, 50, 535);
			
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
			//set speed of all moving objects
				if(level == 1){
					logs = logs+10;
					log2 = log2+10;
			
					medlog = medlog+5;
					medlog2 = medlog2+5;
					medlog3 = medlog3+5;
			
					yellow = yellow - 6;
					yellow2 = yellow2 - 6;
					yellow3 = yellow3 - 6;
			
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
				}
				if(level == 2){
					logs = logs+12;
					log2 = log2+12;
			
					medlog = medlog+7;
					medlog2 = medlog2+7;
					medlog3 = medlog3+7;
			
					yellow = yellow - 8;
					yellow2 = yellow2 - 8;
					yellow3 = yellow3 - 8;
			
					prpcar = prpcar - 10;
					prpcar2 = prpcar2 - 10;
					prpcar3 = prpcar3 - 10;
			
					trtl1 = trtl1 - 10;
					trtl2 = trtl2 - 10;
					trtl3 = trtl3 - 10;	
					trtl4 = trtl4 - 10;
					trtl5 = trtl5 - 10;
					trtl6 = trtl6 - 10;
					trtl7 = trtl7 - 10;
					trtl8 = trtl8 - 10;	
			
					smlog = smlog + 4;
					smlog2 = smlog2 + 4;
					smlog3 = smlog3 + 4;
				}
				if(level == 3){
					logs = logs+14;
					log2 = log2+14;
			
					medlog = medlog+9;
					medlog2 = medlog2+9;
					medlog3 = medlog3+9;
			
					yellow = yellow - 10;
					yellow2 = yellow2 - 10;
					yellow3 = yellow3 - 10;
			
					prpcar = prpcar - 12;
					prpcar2 = prpcar2 - 12;
					prpcar3 = prpcar3 - 12;
			
					trtl1 = trtl1 - 12;
					trtl2 = trtl2 - 12;
					trtl3 = trtl3 - 12;	
					trtl4 = trtl4 - 12;
					trtl5 = trtl5 - 12;
					trtl6 = trtl6 - 12;
					trtl7 = trtl7 - 12;
					trtl8 = trtl8 - 12;	
			
					smlog = smlog + 6;
					smlog2 = smlog2 + 6;
					smlog3 = smlog3 + 6;
				}
				
				// only gets harder until level 4.  This is pretty dang fast.
				if(level >= 4){
					logs = logs+16;
					log2 = log2+16;
			
					medlog = medlog+11;
					medlog2 = medlog2+11;
					medlog3 = medlog3+11;
			
					yellow = yellow - 12;
					yellow2 = yellow2 - 12;
					yellow3 = yellow3 - 12;
			
					prpcar = prpcar - 14;
					prpcar2 = prpcar2 - 14;
					prpcar3 = prpcar3 - 14;
			
					trtl1 = trtl1 - 14;
					trtl2 = trtl2 - 14;
					trtl3 = trtl3 - 14;	
					trtl4 = trtl4 - 14;
					trtl5 = trtl5 - 14;
					trtl6 = trtl6 - 14;
					trtl7 = trtl7 - 14;
					trtl8 = trtl8 - 14;	
			
					smlog = smlog + 8;
					smlog2 = smlog2 + 8;
					smlog3 = smlog3 + 8;
				}
			}
			else{
				var dead = new Image();
				life -= 1;
				dead.src = 'assets/dead_frog.png';
				ctx.drawImage(dead, 0, 0, 30, 30,frog.x, frog.y, 40, 40);
				frog.x = 180;
				frog.y = 475;
				setTimeout(function(){
				background();
				ctx.drawImage(img, 40, 360, 30, 30, 180, 475, 25, 25);
				},1250);
			}
			
			
			// set locations of all objects
			
			// large logs
			ctx.drawImage(img, 0, 165, 190, 30, logs, 185, 170, 30);
			
			ctx.drawImage(img, 0, 165, 190, 30, log2, 185, 170, 30);
	
			if(logs > 420){
				logs = -200;
			}		
			
			if(log2 > 420){
				log2 = -200;
			}
				
			//medium logs	
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
						
			//only one girl frog per run			
			if(girl == 0){
				ctx.drawImage(img, 265, 400, 40, 30, smlog2+4, 215, 30, 25);
			}		
			
			//points if you get the lady frog
			if(frog.y == 217){
				if(frog.x >= smlog2 && frog.x <= smlog2+6){
					points += 200;
					girl = 1;
				}
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
			if(frog.y == 315){
				frog.y = 325;
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
			console.log(frog.x);
			if((frog.x >= -10 && frog.x<= 10) || (frog.x >= 80 && frog.x <= 100) || (frog.x >= 170 && frog.x <= 190) || (frog.x >= 260 && frog.x <= 280) || (frog.x >= 340 && frog.x <= 360)){
//			if(frog.x == 0 || frog.x == 90 || frog.x == 180 || frog.x == 270 || frog.x == 350){
				points += 50;
				girl = 0;
				if(frog.x >= -10 && frog.x<= 10){
					x1 = 110;
					y1 = 360;
				}
				if(frog.x >= 80 && frog.x <= 100){
					x2 = 110;
					y2 = 360;
				}
				if(frog.x >= 170 && frog.x <= 190){
					x3 = 110;
					y3 = 360;
				}
				if(frog.x >= 260 && frog.x <= 280){
					x4 = 110;
					y4 = 360;
				}
				if(frog.x >= 340 && frog.x <= 360){
					x5 = 110;
					y5 = 360;
				}
				background();
				ctx.drawImage(img, 40, 360, 30, 30, frog.x, frog.y, 25, 25);
				wins += 1;
				if(wins == 5){
					points += 1000;
					wins = 0;
					level += 1;
					alert('Congratulations! Level up!');
					x1 = 135;
					x2 = 135;
					x3 = 135;
					x4 = 135;
					x5 = 135;
					y1 = 395;
					y2 = 395;
					y3 = 395;
					y4 = 395;
					y5 = 395;
				}
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
			if(frog.x >= yellow-2 && frog.x <= yellow+3){
				console.log('dead!');
				return false;
			}
			if(frog.x >= yellow2-2 && frog.x <= yellow3+3){
				return false;
			}
			if(frog.x >= yellow3-2 && frog.x <= yellow3 +3){
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
			if(frog.x >= prpcar-5 && frog.x <= prpcar+5){
				return false;
			}
			if(frog.x >=prpcar2-5 && frog.x <= prpcar2+5){
				return false;
			}
			if(frog.x >= prpcar3-5 && frog.x <= prpcar3+5){
				return false;
			}
			else{
				return true;
			}
		}
		
		//medium logs
			
		var distance = 0;
		
		if(frog.y == 115){
			if(frog.x >= medlog-2 && frog.x <= medlog+180){
				frog.x = medlog+10;
				if(medlog > 400){
					return false;
				}
				return true;
			}

			if(frog.x >= medlog2-2 && frog.x <= medlog2+180){
				frog.x = medlog2+10;
				if(medlog2 > 400){
					return false;
				}
				return true;
			}
			
			if(frog.x >= medlog3-2 && frog.x <= medlog3+180){
				frog.x = medlog3+10;
				if(medlog3 > 400){
					return false;
				}
				return true;
			}
			
			else{
				return false;
			}
		}
		
		// small turtle pads
		
		if(frog.y == 149){
			if(frog.x >= trtl1-20 && frog.x<= trtl1+10 || frog.x > trtl2-10 && frog.x <= trtl2+20){
				frog.x = trtl2;
				if(trtl2==-40){
					return false;
				}
				return true;
			}
			
			if(frog.x >= trtl4-20 && frog.x <= trtl4+10 || frog.x >= trtl5-10 && frog.x <= trtl5+20){
				frog.x = trtl5;
				if(trtl5==-40){
					return false;
				}
				return true;
			}
			
			if(frog.x >= trtl7-20 &&frog.x <= trtl7+10 || frog.x >= trtl8-10 && frog.x <= trtl8+20){
				frog.x = trtl8;
				if(trtl8==-40){
					return false;
				}
				return true;
			}
			
			else{
				return false;
			}
		
		
		}
		
		//big logs
		if(frog.y == 183){
				if(frog.x >= log-2 && frog.x <= log+250){
				frog.x = log+10;
				if(log > 400){
					return false;
				}
				return true;
			}

			if(frog.x >= log2-2 && frog.x <= log2+250){
				frog.x = log2+10;
				if(log2 > 400){
					return false;
				}
				return true;
			}
			
			else{
				return false;
			}
		}
		
		//small logs
		if(frog.y == 217){
			if(frog.x >= smlog-2 && frog.x <= smlog+150){
				frog.x = smlog+10;
				if(smlog > 400){
					return false;
				}
				return true;
			}

			if(frog.x >= smlog2-2 && frog.x <= smlog2+150){
				frog.x = smlog2+10;
				if(smlog2 > 400){
					return false;
				}
				return true;
			}
			
			if(frog.x >= smlog3-2 && frog.x <= smlog3+180){
				frog.x = smlog3+10;
				if(smlog3 > 400){
					return false;
				}
				return true;
			}
			
			else{
				return false;
			}
		}
		
		// the lower frog pads things
		if(frog.y == 251){
				if(frog.x >= trtl1-20 && frog.x<= trtl1+10 || frog.x >= trtl2-10 && frog.x <= trtl2+20 || frog.x >= trtl3-10 && frog.x <= trtl3+20){
				frog.x = trtl2;
				if(trtl2==-40){
					return false;
				}
				return true;
			}
			
			if(frog.x >= trtl4-20 && frog.x <= trtl4+10 || frog.x >= trtl5-10 && frog.x <= trtl5+20 || frog.x >= trtl6-10 && frog.x <= trtl6+20){
				frog.x = trtl5;
				if(trtl5==-40){
					return false;
				}
				return true;
			}

			
			else{
				return false;
			}
		
		}
		
		
		else{
			return true;
		}
	}


}





