
function start_game(){
	canvas = document.getElementById('game');

	if (canvas.getContext) {
	    ctx = canvas.getContext('2d');
	    ctx.fillStyle = "rgb(19, 19, 70)";
	    ctx.fillRect (0, 0, 399, 282);
	    
	    ctx.fillStyle = "rgb(00, 00, 00)";
	    ctx.fillRect(0, 282, 399, 282);
	
	
		var img = new Image();
		img.src = 'assets/frogger_sprites.png';

	// Put in "frogger" at the top, and green ending 
		ctx.drawImage(img, 0, 0, 399, 100, 0, 0, 399, 100);
	
	// Put in large purple borders	
		ctx.drawImage(img, 0, 120, 399, 30, 0, 283, 399, 40);
		ctx.drawImage(img, 0, 120, 399, 30, 0, 475, 399, 40);
		
	// Put in big logs
		ctx.drawImage(img, 0, 165, 190, 30, -10, 200, 170, 30);
		ctx.drawImage(img, 0, 165, 190, 30, 300, 200, 170, 30);
	
	// Put in medium logs
		ctx.drawImage(img, 0, 195, 210, 30, 20, 105, 180, 30);
		ctx.drawImage(img, 0, 195, 210, 30, 200, 105, 180, 30);
		ctx.drawImage(img, 0, 195, 210, 30, 385, 105, 180, 30);
		
	// Put in small logs
		ctx.drawImage(img, 0, 226, 100, 26, -25, 150, 90, 25);
		ctx.drawImage(img, 0, 226, 100, 26, 140, 150, 90, 25);
		ctx.drawImage(img, 0, 226, 100, 26, 260, 150, 90, 25);
		ctx.drawImage(img, 0, 226, 100, 26, 375, 150, 90, 25);
		
		ctx.drawImage(img, 0, 226, 100, 26, 25, 245, 90, 25);
		ctx.drawImage(img, 0, 226, 100, 26, 130, 245, 90, 25);
		ctx.drawImage(img, 0, 226, 100, 26, 290, 245, 90, 25);
		
	//Text
		ctx.fillStyle="rgb(0, 255, 0)";
		ctx.font="20px Verdana";
		ctx.fillText("Level 1", 50, 535);
		
		ctx.font="11px Verdana";
		ctx.fillText("Score: 0		Highscore: 0", 0, 555);

	// Life frogs
	
		ctx.drawImage(img, 10, 325, 30, 30, 0, 515, 20, 20);
		ctx.drawImage(img, 10, 325, 30, 30, 15, 515, 20, 20);
		
	// purple car car
		ctx.drawImage(img, 0, 252, 45, 45, 20, 380, 45, 45);

	// white red car
		ctx.drawImage(img, 40, 252, 40, 45, 200, 340, 40, 45);
		
	// start frog
		ctx.drawImage(img, 40, 360, 30, 30, 175, 478, 30, 30);
		

	}
}

