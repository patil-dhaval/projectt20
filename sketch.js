var fixedrect,movingrect;
var car,wall;


function setup() {
  createCanvas(1200,800);
  fixedrect=createSprite(600, 400, 50, 80);
  fixedrect.shapeColor="green";
  fixedrect.debug=true;

  movingrect=createSprite(400, 200, 80, 30);
  movingrect.shapeColor="green";
  movingrect.debug=true;

  car=createSprite(200, 300, 30, 30);
  car.shapeColor="green";

  wall=createSprite(750, 300, 30, 60);
  wall=shapeColor="yellow";
  
car.velocityY=0;

}

function draw() {
  background(0,0,0);  

  movingrect.x=World.mouseX;
  movingrect.y=World.mouseY;

  bounchOff(car,movingrect);
  
  drawSprites();
}