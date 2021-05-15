var monkey, ground, bananaImage, obstacleImage, obstacleGroup, bg, score, monkeyAnimation, jungleImage, invisibleGround, bananaGroup;

function preload () {
  monkeyAnimation= loadAnimation("Monkey_01.png","Monkey_02.png","Monkey_03.png","Monkey_04.png","Monkey_05.png","Monkey_06.png", "Monkey_07.png", "Monkey_08.png", "Monkey_09.png", "Monkey_10.png");
 
  bananaImage= loadImage("banana.png");
  obstacleImage= loadImage("stone.png");
  jungleImage= loadImage("jungle.jpg");
}
  function setup() {
    createCanvas(600, 400);
    bg= createSprite(300,200,600,400);
    bg.addImage(jungleImage);
    bg.scale=0.8;
    bg.velocityX=-4;
    
  
    score=0;

    monkey=createSprite(200,320,20,50);
    monkey.addAnimation("Monkey",monkeyAnimation);
    monkey.scale=0.2;

    ground=createSprite(600,340,800,10);
    ground.visible=false;

    invisibleGround=createSprite(300,350,800,10);
    invisibleGround.visible=false;

    obstaclesGroup= createGroup();
    bananaGroup=createGroup();
  }

function draw() {
  background(220);
  console.log(bg.x);
  if (bg.x<=185) {
    bg.x=300;
  }
  if (keyDown("space")&&monkey.y>280){                
      monkey.velocityY=-9;   
  } 
  ground.velocityX=-5;
    
  if (bananaGroup.isTouching(monkey)) {
  score=score+2;
  }
    switch (score) {
      case 10: monkey.scale=0.12;
      break;
      case 20: monkey.scale=0.14;
      break;
      case 30: monkey.scale=0.16;
      break;
      case 40: monkey.scale=0.18;
      break;   
      default: break ;
  }
  if (ground.x<=0) {
       ground.x=400;
  }

  if (obstaclesGroup.isTouching(monkey)) {
    monkey.scale=0.1;
  }
  bananaGroup.visible=true;
  obstaclesGroup.visible=true;
  monkey.velocityY=monkey.velocityY+0.5;
  monkey.collide(invisibleGround);
  drawSprites();
      stroke("white");
  textSize(20);
  fill("white");
  text("Score :"+score,450,50);

    bananas(); 
    obstacles(); 
}

function bananas() {
   if(World.frameCount%177==0) {
      var banana = createSprite(350,random(170,210),1,1); 
       banana.addAnimation("Banana",bananaImage);
       banana.scale=0.05;
       banana.velocityX=-3;
       banana.lifetime=60;
       banana.visible=true;
  
       bananaGroup.add(banana);
  }
}

function obstacles () {
  if(World.frameCount%170==0){
   var obstacle=createSprite(400,random(300,335),1,1);
   obstacle.addAnimation("Stone",obstacleImage);
   obstacle.visible=true; 
   obstacle.scale=0.15;
   obstacle.velocityX=-5;
   obstacle.lifetime=70 ;
    
   obstaclesGroup.add(obstacle);
   }
}