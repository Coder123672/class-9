var box;
function setup() {
  createCanvas(400,400);
  box = createSprite(200, 200, 50, 50)
}

function draw() 
{
  background(30);

  if(keyDown("left_arrow")){
    box.x = box.x - 1;
  }
  drawSprites();
}




