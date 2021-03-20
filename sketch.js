
function preload() {
    //load the images here
    garden=loadImage("images/garden.png");
    jerryimg1=loadAnimation("images/jerryOne.png","images/jerryTwo.png");
    
    jerryimg2=loadAnimation("images/jerryThree.png","images/jerryFour.png");
   

    tomimg2=loadAnimation("images/tomOne.png");
    tomimg3=loadAnimation("images/tomFour.png");
    tomimg1=loadAnimation("images/tomTwo.png","images/tomThree.png");
    
}
function setup(){
    createCanvas(800,600);
    //create tom and jerry spries here
   background1 = createSprite (400,300,800,600);
   background1.addImage(garden);

   tom=createSprite(700,450,100,100);
   tom.addAnimation("tom",tomimg2);
   tom.scale=0.15;
   
   jerry=createSprite(200,450,100,100);
   jerry.addAnimation("jerry",jerryimg1);
   jerry.scale=0.15;
   
   jerry.debug = true
   jerry.setCollider("circle",0,0,400)
   
   tom.debug = true
   tom.setCollider("circle",0,0,400)

}

function draw() {

    background(255);
    //Write condition here to evalute if tom and jerry collide

    if (keyDown("space")){
    
        tom.addAnimation("tom",tomimg1);
        tom.scale=0.2;
        tom.velocityX=-3;
        
        
    }
    if(tom.x - jerry.x < tom.width/2 + jerry.width/2){
        
        tom.velocityX=0;
        tom.addAnimation("tom",tomimg3);
        jerry.addAnimation("jerry",jerryimg2);
    }
    

    drawSprites();
}

