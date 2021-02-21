
var dog, dogImage;
var  obstacle, obstaceImage;
var FoodGroup, obstacleGroup;
var bone,boneImage,obstacle,obstaceImage,food,background1,backgroundImage;
var score;
//var ground;
//var stone;


var score=0;

var PLAY = 1;
var END = 0;
var gameState = PLAY;
//var dogs;
//var index=0;
//var y;

function preload(){
  
  
 
   
   boneImage = loadImage("bone.png");
  dogImage =loadImage("dog.png");
 
  stoneImage = loadImage("rock.png");
  backgroundImage=loadImage("background2.jpg");

 
}



function setup() {
  createCanvas(600,400)
  FoodGroup=createGroup();
  obstacleGroup=createGroup();
   background1=createSprite(300,200);
  background1.addImage(backgroundImage);
 // dogs=[dog,bone,stone];
 
  
  dog=createSprite(80,315,20,20);
  dog.addImage(dogImage); 
  dog.scale=0.5 ;
  
  ground=createSprite(400,350,900,10);
  ground.velocityX=-4;
  ground.x=ground.width/2;
  console.log(ground.x);
                      
  

  
}


function draw() {
  background(180);
  background1.velocityX=-3;
 if(background1.x<185) {
   background1.x=background1.width/2;
 }
 
    
  dog.collide(ground);
  
  
 
   if(keyDown("space")) {
        dog.velocityY = -12;
    
    }
   dog.velocityY = dog.velocityY + 0.8;
  
  
 
  
  food();
  obstacles();
  
  if(FoodGroup.isTouching(dog)){
    FoodGroup.destroyEach();
    score=score+2;
  }
    switch(score){
      case 1:  dog.scale=0.2;
      break;
      case 2: dog.scale=0.3;
      break;
      case 3: dog.scale=0.4;
      break;
      case 4: dog.scale=0.6;
      break;
      default: break;
  }
  //camera.position.x = displayWidth/2;
 // camera.position.y = dogs[index-1].y;
  
  
 
   
 
  
  

  drawSprites();
   stroke("black");
    fill("black");
      textSize(20);
  text("Score:"+  score, 300, 50);
   if(obstacleGroup.isTouching(dog)){ 
    
    gameState=END;
     fill("white");
    text("GAME OVER",100,150);
     
    ground.velocityX=0;
    dog.velocityY=0;
    obstacleGroup.setVelocityXEach(0);
     FoodGroup.setVelocityXEach(0);
     obstacleGroup.setLifetimeEach(-1);
    FoodGroup.setLifetimeEach(-1);
    FoodGroup.destroyEach();
    
 
    
  }
  
}
    
  
  

  

function  food() {
  if(frameCount%80===0){
  bone=createSprite(500,350,40,10);
    bone.addImage(boneImage);
    bone.y=Math.round(random(120,200));
  bone.scale=0.1;
    bone.velocityX=-3;
    bone.lifeTime=200;
    FoodGroup.add(bone);
    
  }
  
  
}
function obstacles() {
  if (frameCount % 300 === 0){
    stone = createSprite(600,325,10,10);
    stone.addImage(stoneImage);
    stone.velocityX = -3;
    stone.lifetime = 200;
    stone.scale=0.20;
     obstacleGroup.add(stone);
  }

}
  
