var blockTL, blockTR, blockBL, blockBR,stage1,stage2,stage3,stage4,stage5,stage6,stage7,startTime,passedTime;
// var example = 1;
var s,car,audi,taxi;

function preload(){
  //http://unluckystudio.com/support-free-game-art/
  audi = loadImage("../images/sprites/Audi.png");
  viper = loadImage("../images/sprites/Black_viper.png");
  taxiImage = loadImage("../images/sprites/taxi.png")
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
  car = createSprite(350,600,40,40); //440 is rest postion
  car.addImage(viper);
  car.scale = 0.5;
  // noLoop();

  taxi = createSprite(600,250,40,40);
  taxi.addImage(taxiImage);
  taxi.scale = 0.5;
  taxi.rotation = 270;
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


//THE ANIMATION SEQUENCE
  var start;
  if(keyDown(ENTER)){
    $start = millis();
    // s.velocity.x = 0;
    // s.velocity.y = 1;
    s.setVelocity(0,1);
    car.setVelocity(0,-1);
    taxi.setVelocity(-1,0);
  }


  // passedTime = startTime - millis();
  // console.log(s.position.y);
  if(s.position.y === 160){

    // textAlign(CENTER);
    textSize(18);


    text("When mulitple cars arrive simultaneously.",200,340);
    // text("But the striped car knows it is turning left, \n across traffic, so it will wait..",270,250);
    s.setVelocity(0,0);



    timePassed = millis() - $start;
    console.log($start, timePassed);
    if(timePassed > 9000){
      s.velocity.y = 1;
    }


  } 

  if(car.position.y === 440 || taxi.position.x === 440){
    car.setVelocity(0,0);
    taxi.setVelocity(0,0);
  }

  if(s.position.y === 240){
    // setTimeout(function(){
    s.rotation = 270;
    s.setVelocity(-1,0);
    s.velocity.y = 0;
    // s.setSpeed(0,90);
    textSize(16);
    text("The car farthest to the right goes first.",170,350);
    s.velocity.x = -1;

    // }, 10);
  } 
// console.log(width, s.position.x, s.removed);
  if(s.position.x < 0) {
    s.remove();
  }

  if(s.removed === true) {
    // console.log("its gone");
    taxi.velocity.x = -1;
    // text("Then the taxi.",170,350);
  } 

  if(taxi.position.x === 360){
    taxi.rotation = 0;
    taxi.velocity.y = -1;
    taxi.velocity.x = 0;
  }

  if(taxi.position.y < 0){
    taxi.remove();
    textSize(21);
    textAlign(CENTER);
    text("This is the law, but it might not always be followed!",300,280);
  }

  if(taxi.removed === true) {
    car.velocity.y = -1;
  }
console.log(car.position.y);

  if (car.position.y === 240){
    car.rotation = 270;
    car.velocity.y = 0;
    car.velocity.x = -1;
  }

      drawSprites();

}




