var blockTL, blockTR, blockBL, blockBR,stage1,stage2,stage3,stage4,stage5,stage6,stage7,startTime,passedTime;
// var example = 1;
var s,car,audi;

function preload(){
  audi = loadImage("../images/sprites/Audi.png");
  viper = loadImage("../images/sprites/Black_viper.png");
}

function setup() {
  createCanvas(600, 600);
  // background(222);
  fill(222);
  startTime = millis();
  s = createSprite(250,0,40,40);
  s.addImage(audi);
  s.scale = 0.5;
  s.rotation = 180;
  // s.rotateToDirection = true;
  car = createSprite(350,440,40,40);
  car.addImage(viper);
  car.scale = 0.5;
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


//THE ANIMATION
var start;
if(keyDown(ENTER)){
  $start = millis();
  // s.velocity.x = 0;
  // s.velocity.y = 1;
  s.setVelocity(0,1);
}


  // passedTime = startTime - millis();
  // console.log(s.position.y);
  if(s.position.y === 160){

    textAlign(CENTER);
    textSize(18);
    // s.rotateToDirection = true;

    text("The other car has reached the intersection first, \n so they will go first",250,300);
    // s.velocity.x = 0;
    // s.velocity.y = 0;
    s.setVelocity(0,0);

    // function resume(){
    //   console.log("check", s.rotation);
    //   s.velocity.y = 1;

    //   window.clearTimeout(pause);
    // }
    // var pause = window.setTimeout(resume, 3000);


    timePassed = millis() - $start;
    console.log($start, timePassed);
    if(timePassed > 9000){
      s.velocity.y = 1;
    }

    // setTimeout(function(){ 
    //   console.log("check");
    //   // s.setVelocity(0,1);
    //   // s.velocity.x = 0;
    //   // s.setSpeed(1,90); 
    // }, 3000);
    // clearTimeout();


  } 

  if(s.position.y === 240){
    // setTimeout(function(){
    s.rotation = 270;
    s.setVelocity(-1,0);
    s.velocity.y = 0;
    // s.setSpeed(0,90);

    s.velocity.x = -1;

    // }, 10);
  } 
// console.log(width, s.position.x, s.removed);
    if(s.position.x < 0) {
      s.remove();
    }

  if(s.removed === true) {
    // console.log("its gone");
    car.velocity.y = -1;
  } 
console.log(car.position.y);

  if (car.position.y === 240){
    car.rotation = 270;
    car.velocity.y = 0;
    car.velocity.x = -1;
  }

  // else if(160 < s.position.y || s.position.y < 220) {
  //   s.velocity.y = 0;
  // }

      drawSprites();

}


// function keyPressed() {
//   if(keyCode == ENTER){
//     // loop();
//     // startTraffic();
//     example1(s);

//   } else if (keyCode == RIGHT_ARROW) {
//     // example1();

//     var s = createSprite(250,0,40,40);
//     s.velocity.x = 0;
//     s.velocity.y = 3;

//   }



// function example1() {
//   s.velocity.x = 0;
//   s.velocity.y = 1;

//   // passedTime = startTime - millis();
//   console.log(s.position.y);
//   if(s.position.y === 250){
//     // start = millis();
//     s.velocity.x = -1;
//     s.velocity.y = 0;
//   }
// }

// // function example1() {
// //  var a = createSprite(250,0,40,40);
// //  a.velocity.y = 2;
// //   a.velocity.x = 0;
// //   console.log(a.position.x, height);
// //   if(a.position.x > height/2){
// //     a.velocity.y = 0;

// //   }

// // }











// function getRandomCar() {
//   var posArr = [[0,250,8],[0,350,7],[250,600,6],[600,350,4],[600,250,3],[350,0,2],[250,0,1]];
//   var pathArr = ['left','center','right'];
//   var randPos = random(posArr);
//   var randPat = random(pathArr);

//   var car = randPos.push(randPat);
//   // console.log(car);
//   return car;


// }

// function startTraffic() {
//   var c = getRandomCar();
//   var x = c[0],y = c[1], m = c[2];
//   var s = createSprite(x, y, 40, 40);
//   s.velocity.x = random(-5, 5);
//   s.velocity.y = random(-5, 5);

// }
// }

