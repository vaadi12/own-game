var bg,bgImg
var vwall1,hwall2,hwall3,hwall4,hwall5,vwall6,hwall7,vwall8,hwall9,vwall10,hwall11,vwall12,vwall13,hwall4,
hwall5,vwall13;
var player,playerImg
var edges;
var ghost1,ghost2,ghost3;
var ghost1Img,ghost2Img,ghost3Img;
var vwall1Img,hwall2Img

function preload(){
  bgImg=loadImage("images/wall2.jpg")
  playerImg=loadImage("images/main char.png")
  ghost1Img=loadImage("images/ghost.png")
  vwall1Img=loadImage("images/box2.png")

  
}

function setup() {
  createCanvas(1280,607);
  edges=createEdgeSprites();
  
  bg=createSprite(600,400)
  bg.addImage(bgImg)
  bg.scale=4

  fill("white")

  vwall1=createSprite(300,200,10,370)
  vwall1.addImage(vwall1Img)
  vwall1.scale=0.05
  hwall2=createSprite(800,10,400,10)
  hwall3=createSprite(600,500,600,10)
  hwall4=createSprite(300,10,600,10)
  hwall5=createSprite(80,120,180,10)
  vwall6=createSprite(170,320,10,400)
  hwall7=createSprite(450,380,300,10)
  vwall8=createSprite(600,325,10,115)
  hwall9=createSprite(506,270,200,10)
  vwall10=createSprite(410,185,10,170)
  hwall11=createSprite(480,100,150,10)
  vwall12=createSprite(700,80,10,200)
  vwall13=createSprite(550,150,10,100)
  hwall14=createSprite(800,175,200,10)
  vwall15=createSprite(730,400,10,200)
  vwall16=createSprite(300,560,10,130)
  hwall17=createSprite(820,300,200,10)
  vwall18=createSprite(920,350,10,100)
  hwall19=createSprite(1020,400,200,10)
  vwall20=createSprite(1040,570,10,100)
  hwall21=createSprite(1230,500,120,10)
  vwall22=createSprite(1100,100,10,200)

  
  


  player=createSprite(400,200,20,20)
  player.addImage(playerImg)
  player.scale=0.04

  ghost1=createSprite(800,200,20,20)
  //ghost1.setCollider("rectangle",0,0,ghost1.width,ghost1.height);
  ghost1.addImage(ghost1Img)
  ghost1.scale=0.04
  ghost1.velocity.y=-2
  
}


function draw() {
  background(255,255,255); 
  player.collide(edges)
  player.collide(vwall1)

 
  
  ghost1.bounceOff(hwall2)
  ghost1.bounceOff(hwall3)
  
  
  if(keyDown(UP_ARROW)){
    player.y-=10
  }

  if(keyDown(DOWN_ARROW)){
    player.y+=10
  }

  if(keyDown(RIGHT_ARROW)){
    player.x+=10
  }
  
  if(keyDown(LEFT_ARROW)){
    player.x-=10
  }


  
  drawSprites();
}