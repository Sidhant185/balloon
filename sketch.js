var b1;
var a1,c1,A1,C1;
var b,B;
var B1,B2,B3,B4;
var score;
function preload(){
  B1 = loadImage("blue_balloon0.png");
  B2 = loadImage("green_balloon0.png");
  B3 = loadImage("pink_balloon0.png");
  B4= loadImage("red_balloon0.png");
  A1 = loadImage("arrow0.png");
  C1 = loadImage("bow0.png")
  B = loadImage("background0.png");
}
function setup() {
  createCanvas(600, 600);
  number = Math.round(random(20,260));
  number1 = Math.round(random(150,300));
  b = createSprite(300,300,20,20);
  b.addImage("back",B);
  b.scale=1.5;
  a1 = createSprite(520,300,20,20);
  a1.addImage("arrow",A1);
  a1.scale=0.5;
  c1 = createSprite(550,300,20,20);
  c1.addImage("bow",C1);
  c1.scale = 1.5;
  balloon = new Group();
  score=0;
}
  function draw(){
    background("white");
    Balloon(); 
    if (keyDown("space")){
      a1.velocityX=-15;
    }
    if (keyDown("up")){
      a1.y=a1.y-5;
      c1.y=c1.y-5;
    }
    
    if (keyDown("down")){
      a1.y=a1.y+5;
      c1.y=c1.y+5;
    }
    if (c1.y>550||a1.y>550){
     
    if (keyDown("up")){
      a1.y=a1.y+5;
      c1.y=c1.y+5;
    }
    
    if (keyDown("down")){
      a1.y=a1.y-5;
      c1.y=c1.y-5;
    } 
    }
    if (c1.y<50||a1.y<90){
     
    if (keyDown("up")){
      a1.y=a1.y+5;
      c1.y=c1.y+5;
    }
    
    if (keyDown("down")){
      a1.y=a1.y-5;
      c1.y=c1.y-5;
    } 
    }
    if (a1.x<0){
       a1.x = 520;
     a1.y = 300;
     c1.x = 550;
     c1.y = 300;
      a1.velocityX=0;
    }
    
    if (a1.isTouching(balloon)){
     balloon.destroyEach();
      a1.x = 520;
     a1.y = 300;
     c1.x = 550;
     c1.y = 300;
      a1.velocityX=0;
    score=score+1;
    }
    drawSprites();
    textSize(25);
    text("score="+score,255,50)
  }
function Balloon(){
  if (frameCount%40===0){
  b1 = createSprite(10,Math.round(random(100,200)),20,20);
  b1.velocityX = 3;
  var number = Math.round(random(1,3));
    switch(number){
        case 1: b1.addImage(B1);
        break;
        case 2 : b1.addImage(B2);
        break;
        case 3 : b1.addImage(B4);
        break;
    }
  b1.scale = 0.09;
  b1.lifetime = 100;
  balloon.add(b1);
  }
}