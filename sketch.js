var fixedRect, movingRect;


function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(200, 200, 50, 50);
  fixedRect.shapeColor = "green";
  fixedRect.debug=true;
  
  movingRect = createSprite(400, 200, 50, 50);
  movingRect.shapeColor = "green";
  movingRect.debug=true;
}

function draw() {
  background(0,0,0);

  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;
  //movingRect.x - fixedRect.x (distance b/w the centers of 2 rectangles)

  //fixedRect.width/2 + movingRect.width/2 (horizontal distance b/w the 2 rects when both the rects are touching each other )
  if(movingRect.x - fixedRect.x < fixedRect.width/2 + movingRect.width/2
    && fixedRect.x - movingRect.x < fixedRect.width/2 + movingRect.width/2
    && movingRect.y - fixedRect.y < fixedRect.height/2 + movingRect.height/2
    && fixedRect.y - movingRect.y < fixedRect.height/2 + movingRect.height/2){
    movingRect.shapeColor = "red";
    fixedRect.shapeColor = "red";
  }
  else{
    movingRect.shapeColor = "blue";
    fixedRect.shapeColor = "blue";
  }
  

  

  drawSprites();
}