var fixedrect, movingrect;




function setup() {
  createCanvas(800,400);
fixedrect=createSprite(200,200,50,80);
movingrect=createSprite(300,300,50,80); 
movingrect.shapeColor = "blue";
fixedrect.shapeColor = "blue";

}

function draw() {
  background(255,255,255);
  movingrect.x = World.mouseX;
  movingrect.y = World.mouseY;
  //console.log(movingrect.x-fixedrect.x);
  if   (movingrect.x-fixedrect.x < fixedrect.width/2+movingrect.width/2
  && fixedrect.x-movingrect.x < fixedrect.width/2 + movingrect.width/2
  && movingrect.y-fixedrect.y < fixedrect.height/2 + movingrect.height/2
  && fixedrect.y-movingrect.y < movingrect.height/2 + fixedrect.height/2

    )  {  
fixedrect.shapeColor = "red";
movingrect.shapeColor = "red";

  }
  else      {
  fixedrect.shapeColor = "blue";
  movingrect.shapeColor = "blue";
}
  drawSprites();
}