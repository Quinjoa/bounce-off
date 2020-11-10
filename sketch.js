var fixedRect, movingRect;
var left,right;


function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(400, 100, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400, 800,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
  left=createSprite(300,400,50,50);
  right=createSprite(600,400,50,50);
  left.velocityX=3;
  right.velocityX=-3;
 
 
  movingRect.velocityY = -5;
  fixedRect.velocityY = +5;
}

function draw() {
  background(0,0,0);  

 bounceOff(movingRect,fixedRect);
  drawSprites();
}


