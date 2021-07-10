var ground;
var ironMan, bots, ultron;

function setup() {
  createCanvas(1000,600);
  ground = createSprite(500, 580, 800, 20);
  ironMan = createSprite(50,280,20,10);
}

function draw() {
  background(255,255,255);  
  ground.velocityX = -2;
  if(ground.x<0){
    ground.x = ground.width/2
  }

  drawSprites();
}