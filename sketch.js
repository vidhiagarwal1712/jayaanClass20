var fixedRect , movingRect


function setup() {
  createCanvas(800, 800);
  fixedRect=createSprite(400,400,50,50)
  fixedRect.shapeColor="red"
  movingRect=createSprite(100,100,50,50)
  movingRect.shapeColor="red"
  
}

function draw() {
  background ("black");
  movingRect.x=mouseX
  movingRect.y=mouseY
  console.log(movingRect.x-fixedRect.x)
  isTouching()
  drawSprites()


}

function isTouching()
{
 if(movingRect.x-fixedRect.x <= 50 && movingRect.x-fixedRect.x >= -50){
   movingRect.shapeColor="green"
   fixedRect.shapeColor="green"
 }
 else{
  movingRect.shapeColor="red"
  fixedRect.shapeColor="red"
 }
}
