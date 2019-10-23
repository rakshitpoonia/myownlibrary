var rect1,rect2,ob1,ob2,ob3,ob4;
function setup() {
  createCanvas(1200,800);
  rect1=createSprite(450,200,50,80);
  rect2=createSprite(450,400,50,80);
  rect1.shapeColor="green";
  rect2.shapeColor="red";

  ob1=createSprite(100,200,50,50);
  ob2=createSprite(200,200,50,50);
  ob3=createSprite(300,200,50,50);
  ob4=createSprite(400,200,50,50);
  ob1.shapeColor="blue";
  ob2.shapeColor="red";
  ob3.shapeColor="blue";
  ob4.shapeColor="blue";
  ob1.velocityX=1;
  ob2.velocityX=-1;
}



function draw() {
  background(0);  
 // bounceOff(rect1,rect2);
  bounceOff(ob1,ob2);
  rect2.x=mouseX;
  rect2.y=mouseY;
  if(isTouching(rect1,rect2)){
    rect1.shapeColor="white";
    rect2.shapeColor="white";
  }
  else{
    rect1.shapeColor="red";
    rect2.shapeColor="red";
  }
  drawSprites();
}
