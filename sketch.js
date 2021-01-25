var sword,swordImage;
var fruit,Image1;
var Image2;
var Image3;
var Image4;
var PLAY=1;
var END=0;
var gameState=PLAY;
var score=0;
var alienImage,monster;
var fruitGroup;
var gameover,game;

function preload(){
  swordImage = loadImage("sword.png");
  Image1= loadImage("fruit1.png");
  Image2=loadImage("fruit2.png");
  Image3= loadImage("fruit3.png");
  Image4=loadImage("fruit4.png");
  alienImage=loadAnimation("alien1.png","alien2.png");
  gameover=loadImage("gameover.png");
}

function setup(){
   createCanvas(400, 400);
  sword = createSprite(200,200,90,20);
  sword.addImage("knife",swordImage);
  sword.scale=0.5;
  
  game = createSprite(200,200,10,10);
  game.addImage("k",gameover);
  game.scale=2;

   score=0;
  fruitGroup=createGroup();
  enemyGroup=createGroup();
  
 }


function draw() {
background(" lightblue");
fill("black");
  text("SCORE:"+score,30,20);
   
  if (gameState===PLAY){
    sword.x = World.mouseX;
     sword.y = World.mouseY; 
    game.visible=false; 
    fruits(); 
    enemy();
  
if(fruitGroup.isTouching(sword)){
      fruitGroup.destroyEach();
      score=score+2;
}
    if (enemyGroup.isTouching(sword)){
    gameState= END;
    }
  
        }    


 else if (gameState===END){

fruitGroup.destroyEach();
enemyGroup.destroyEach();   
sword.visible=false;
game.visible=true; 
}
  
drawSprites() ;
}
 
function fruits(){
  if (World.frameCount % 80===0){
  fruit=createSprite(400,200,20,20);
    fruit.scale=0.2;
   //fruit.debug = true;
   r=Math.round(random(1,4))
    if (r===1){
      fruit.addImage(Image1)
    }else if(r===2){
      fruit.addImage(Image2)
    }else if (r===3){
      fruit.addImage(Image3)
    }else if (r===4){
      fruit.addImage(Image4)
    }
    fruit.y= Math.round(random(50,340));
    fruit.velocityX=-7;
    fruit.lifetime=100;
    fruitGroup.add(fruit);
  }
}
function enemy(){
  if(World.frameCount%200===0){
    monster=createSprite(400,200,20,20)
    monster.addAnimation("m",alienImage);
    monster.y=Math.round(random(100,300));
    monster.velocityX=-8;
    monster.lifetime=50;
    enemyGroup.add(monster);
  }
}


