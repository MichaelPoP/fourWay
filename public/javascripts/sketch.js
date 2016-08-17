function setup() {
	// $windowWidth = $(window).width();
	// $windowHeight = $(window).height();
 //  	$(window).resize(function() {
 //    	$windowWidth = $(window).width();
 //        $windowHeight = $(window).height();
 //        if($windowHeight > windowWidth){
 //        	var n = $windowHeight;
 //        	$windowHeight = $windowWidth;     	
 //        	$windowWidth = n;
 //        }
 //    });
	createCanvas(600, 600);
	background(222);
	//top-left
	rect(-1,-1,200,200);
	//bottom-left
	rect(-1,400,200,200);
	//bottom-right
	rect(400,400,200,200);
	//top-right
	rect(400,-1,200,200);

	//vertical lane lines
	line(300,100,300,190);
	line(300,410,300,500);

	line(300,0,300,50);
	line(300,550,300,600);


	//horizontal lane lines
	line(100,300,190,300);
	line(410,300,500,300);

	line(0,300,50,300);
	line(550,300,600,300);

	noLoop();
}

function keyPressed() {
	if(keyCode == ENTER){
		loop();
	} else if (keyCode == SHIFT) {
		alert('moves..');
	}
}

function draw() {
  if (mouseIsPressed) {
    fill(0);
  } else {
    fill(255);
  }
  // ellipse(mouseX, mouseY, 80, 80);

  rect(0, 0, 55, 55);
  translate(30, 20);
}