var path,boy;
var pathImg,boyImg;

function preload(){
boyImg = loadAnimation("Runner-1.png","Runner-2.png");
pathImg = loadImage("path.png");
}


function setup(){
  createCanvas(400,400);

path=createSprite(200,200);
path.addImage(pathImg);
path.velocityY = 4;

  boy = createSprite(200,200,20,20);
  boy.addAnimation("boyrunning",boyImg);
  boy.scale=0.08;

}

function draw() {
  background(20);
 
  edges= createEdgeSprites();
  boy.collide(edges);
 
  boy.x = World.mouseX;

  if(path.y > 400 )
  {
    path.y = height/2;
  }

boy.velocityY =+2;


drawSprites();
}