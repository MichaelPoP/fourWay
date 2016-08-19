var blockTL, blockTR, blockBL, blockBR,stage1,stage2,stage3,stage4,stage5,stage6,stage7,startTime,passedTime;
// var example = 1;
var s,car,audi;

function preload(){
  audi = loadImage("../images/sprites/Audi.png");
  viper = loadImage("../images/sprites/Black_viper.png");
  zombieImg = loadImage("../images/sprites/zombie/zomONE.png");
  zombieImg2 = loadImage("../images/sprites/zombie/zomTHREE.png");
  zombieImg3 = loadImage("../images/sprites/zombie/zomSIX.png");
  zombieAnim = loadAnimation("../images/sprites/zombie/zomONE.png","../images/sprites/zombie/zomTWO.png","../images/sprites/zombie/zomTHREE.png","../images/sprites/zombie/zomFOUR.png", "../images/sprites/zombie/zomFIVE.png", "../images/sprites/zombie/zomSIX.png");
  zombieChill = loadAnimation("../images/sprites/zombie/zomTWO.png","../images/sprites/zombie/zomTHREE.png");
}

function setup() {
  createCanvas(600, 600);
  // background(222);
  fill(222);
  startTime = millis();

  car = createSprite(350,600,40,40); //440 is rest postion
  car.addImage(viper);
  car.scale = 0.5;

//ZOMBIE 1
  zombie = createSprite(550,552,20,20);
  zombie.addAnimation("chill", zombieChill);
  zombie.scale = 0.5;
  zombie.rotation = 220;

//ZOMBIE 2
  zombie2 = createSprite(190,55,20,20);
  zombie2.addAnimation("chill", zombieChill);
  zombie2.scale = 0.5;
  zombie2.rotation = 90;
//ZOMBIE 3
  zombie3 = createSprite(56,413,20,20);
  zombie3.addAnimation("chill", zombieChill);
  zombie3.scale = 0.5;
  zombie3.rotation = 0;


zombie.addAnimation("walk", zombieAnim);
zombie2.addAnimation("walk", zombieAnim);
zombie3.addAnimation("walk", zombieAnim);
zombie.changeAnimation("chill");

  // noLoop();
  //ZOMBIE WALK ANIMATION!
    // zombie.addAnimation("walk", zombieAnim);
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
  textAlign(CENTER);
  text(" Watch  ",90,140);
  text(" For  ",90,160);
  text("Pedestrians",90,180);
//THE ANIMATION SEQUENCE
  // var start;
  if(keyDown(ENTER)){
    $start = millis();

    car.setVelocity(0,-1);
    // zombie.setVelocity()
    zombie2.addAnimation("walk", zombieAnim);
    zombie2.setVelocity(0,0.5);
    zombie3.addAnimation("walk", zombieAnim);
    zombie3.setVelocity(0.7,0);
    zombie.changeAnimation("walk");
    zombie2.changeAnimation("walk");
    zombie3.changeAnimation("walk");

  }

  if(car.position.y === 480) {
    car.setVelocity(0,0);

    zombie.setVelocity(-1,-0.85);
    text("The driver will keep an eye on all the pedestrians",290,250);
    text("before making a left safely.",290,270);
  }

  if(zombie2.position.y === 420){
    car.setVelocity(0,-1);
  }

  if (car.position.y === 240){
    car.rotation = 270;
    car.velocity.y = 0;
    car.velocity.x = -2;
  }

      drawSprites();

}


