	function draw() {
		canvas = document.getElementById("surface");
		
		ctx = canvas.getContext('2d');
		
		img = new Image();
		img.src = 'assets/pacman10-hp-sprite.png';
		ctx.drawImage(img, 320, 0, 466, 137, 0, 0, 466, 137);
		
		ctx.drawImage(img, 270, 35, 50, 45, 220, 117, 17, 17);
		
		ctx.drawImage(img, 118, 80, 20, 20, 200, 117, 17, 17);
	
		
	}