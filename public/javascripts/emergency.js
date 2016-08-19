var blockTL, blockTR, blockBL, blockBR,stage1,stage2,stage3,stage4,stage5,stage6,stage7,startTime,passedTime;
// var example = 1;
var s,car,audi;

function preload(){
  ambulance = loadAnimation("../images/sprites/ambulance_animation/1.png","../images/sprites/ambulance_animation/2.png","../images/sprites/ambulance_animation/3.png");
  viper = loadImage("../images/sprites/Black_viper.png");
}

function setup() {
  createCanvas(600, 600);
  // background(222);
  fill(222);
  startTime = millis();
  amb = createSprite(650,250,40,40);
  amb.addAnimation("emergency",ambulance);
  amb.scale = 0.5;
  amb.rotation = 270;
  // s.rotateToDirection = true;
  car = createSprite(350,600,40,40); //440 is rest postion
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

  textSize(20);
  // text("This time the two cars arrive simultaneously. ",140,250);

//THE ANIMATION SEQUENCE
  var start;
  if(keyDown(ENTER)){
    $start = millis();
    // s.velocity.x = 0;
    // s.velocity.y = 1;

    car.setVelocity(0,-1);

  }

  if(car.position.y === 440){
    car.setVelocity(0,0);
    amb.setVelocity(-3,0);  
  }


  // passedTime = startTime - millis();
  // console.log(s.position.y);
  // if(amb.position.y === 160){

  //   textAlign(CENTER);
  //   textSize(18);
  //   text("This time the two cars arrive simultaneously. ",270,250);
  //   // text("But the striped car knows it is turning left, \n across traffic, so it will wait..",270,250);
  //   amb.setVelocity(0,0);
  //   timePassed = millis() - $start;
  //   console.log($start, timePassed);
  //   if(timePassed > 9000){
  //     amb.velocity.y = 1;
  //   }

  // } 



  if(amb.position.x < -100){
    car.velocity.y = -1;
    amb.remove();
  } 

  if(amb.removed === true) {
    // console.log("its gone");
    textSize(18);
    text("Once the emergency vehicle passes the driver is safe to proceed",50,370);
  } 
console.log(car.position.y);

  if (car.position.y === 240){
    car.rotation = 270;
    car.velocity.y = 0;
    car.velocity.x = -2;
  }

      drawSprites();

}


