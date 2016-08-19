// var blockTL, blockTR, blockBL, blockBR,stage1,stage2,stage3,stage4,stage5,stage6,stage7;
// var example = 1;
// var s;
  // stage1 = ellipse(10,10,10,10);
  // stage2 = ellipse(22,10,10,10);
  // stage3 = ellipse(34,10,10,10);
  // stage4 = ellipse(46,10,10,10);
  // stage5 = ellipse(58,10,10,10);
  // stage7 = ellipse(70,10,10,10);
function setup() {
	createCanvas(600, 600);
	// background(222);
  fill(222);

	// noLoop();
}


function draw() {
  background(255,255,255);
    //top-left
  blockTL = rect(-1,-1,200,200);
  //bottom-left
  blockBL = rect(-1,400,200,200);
  //bottom-right
  blockBR = rect(400,400,200,200);
  //top-right
  blockTR = rect(400,-1,200,200);
  fill(0);

  textSize(32);
  //vertical lane lines + numbers
  line(300,100,300,190);
  line(300,410,300,500);

  line(300,0,300,50);
  text("1",250,50);
  text("2",330,50);
  line(300,550,300,600);
  text("5",330,550);
  text("6",250,550);


  //horizontal lane lines
  line(100,300,190,300);
  line(410,300,500,300);

  line(0,300,50,300);
  text("3",550,270);
  text("4",550,350);
  line(550,300,600,300);
  text("7",50,350);
  text("8",50,270);


  // buttonPrev = createButton('Previous Example');
  // buttonPrev.attribute("style", "font-size:21px;");
  // buttonPrev.size(100,100);
  // buttonPrev.position(100, 200);
  // // button.mousePressed(greet);

  // buttonNext = createButton('Next Example');
  // buttonNext.attribute("style", "font-size:21px;");
  // // buttonNext.attribute("href", "/about");
  // buttonNext.size(100,100);
  // buttonNext.position(500,200);

  // if (mouseIsPressed) {
  //   fill(0);
  // } else {
  //   fill(255);
  // }
  // ellipse(mouseX, mouseY, 80, 80);

  // var pos = getRandomCar();

  // rect(0, 0, 55, 55);
  // var s8 = createSprite(0, 250, 40, 40);
  // var s7 = createSprite(0,350,40,40);

  // var s6 = createSprite(250,600,40,40);
  // var s5 = createSprite(350,600,40,40);

  // var s4 = createSprite(600,350,40,40);
  // var s3 = createSprite(600,250,40,40);

  // var s2 = createSprite(350,0,40,40);
  // var s1 = createSprite(250,0,40,40);

  // if(keyDown(ENTER)){
  //   var ww = createSprite(250,0,40,40);
  //   console.log(ww);
  //   ww.setSpeed(2);
  // }
  drawSprites();
}


function keyPressed() {
	if(keyCode == ENTER){
		// loop();
		// startTraffic();
    example1();


	} else if (keyCode == SHIFT) {

	} else if (keyCode == RIGHT_ARROW) {
		// example1();

  var s = createSprite(350,0,40,40);
  s.velocity.x = random(-5, 5);
  s.velocity.y = random(-5, 5);

	} else if (keyCode == LEFT_ARROW) {

	}
}

function example1() {
  stroke(50);
  fill(100);
  var y1 = 0;
  var x1 = 250;
  shape1 = rect(x1,y1,40,40);
  y1 = y1+1;
  // if(y1 > 250){
  //   y1 = y1;
  //   x1 = x1-1;

  // }
}

// function example1() {
// 	var a = createSprite(250,0,40,40);
// 	a.velocity.y = 2;
//   a.velocity.x = 0;
//   console.log(a.position.x, height);
//   if(a.position.x > height/2){
//     a.velocity.y = 0;

//   }

// }











function getRandomCar() {
  var posArr = [[0,250,8],[0,350,7],[250,600,6],[600,350,4],[600,250,3],[350,0,2],[250,0,1]];
  var pathArr = ['left','center','right'];
  var randPos = random(posArr);
  var randPat = random(pathArr);

  var car = randPos.push(randPat);
  // console.log(car);
  return car;


}

function startTraffic() {
  var c = getRandomCar();
  var x = c[0],y = c[1], m = c[2];
  var s = createSprite(x, y, 40, 40);
  s.velocity.x = random(-5, 5);
  s.velocity.y = random(-5, 5);

}

