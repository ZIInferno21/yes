var astronaut,astroIMG
var background,backIMG

function preload(){
  astroIMG = loadAnimation("move.png","move1.png");
  backIMG = loadImage("iss.png");
}

function setup() {
  createCanvas(800,600);
  astronaut = createSprite(400, 200, 50, 50);
  astronaut.addAnimation("astronaut",astroIMG);
  astronaut.scale = 0.1;

  background = createSprite(200,200,800,600,);
  background.addImage(backIMG);
  background.scale = 0.1;
}

function draw() {
  drawSprites();
}