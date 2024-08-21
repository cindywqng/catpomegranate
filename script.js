//Move the catcher with the left and right arrow keys to catch the falling objects. 

/* VARIABLES */
let catcher, fallingObject, fallingObject2;
let score = 0;
let pomegranateImg,catImg, bagelImg ;
let meow;
let crunch;
let sound;
let wincat;
let losecat;
let backgrounds;
//let yay;



/* PRELOAD LOADS FILES */
function preload(){
  
pomegranateImg=loadImage("assets/pomegranate.png");
   catImg = loadImage("assets/cat.png"); //bagelImg = loadImage("assets/bagel.png");
  meow = loadSound("assets/meow.wav");
crunch = loadSound("assets/crunch.wav");
  sound = loadImage("assets/sound.png");
 wincat=loadImage("assets/wincat.jpeg");
backgrounds = loadImage("assets/background.jpg");
  losecat=loadImage("assets/losecat.jpeg");
 // yay = loadSound("assets/yay.mp3");
}

/* SETUP RUNS ONCE */
function setup() {
  createCanvas(400,400);
  // resize images
  catImg.resize(120,0);
  pomegranateImg.resize(75,0);
  wincat.resize(130,0);
  losecat.resize(200,0);
  // bagelImg.resize(75,0);

  sound.resize(50,0);


  //Create catcher 
  catcher = new Sprite(catImg,200,380,100,20,"k");
  catcher.color = color(95,158,160);

  //creat falling object 2
  fallingObject2 = new Sprite(pomegranateImg,100,0,10);
  fallingObject2.color = color(0,128,128);
  fallingObject2.vel.y = random(1,5);
  fallingObject2.rotationLock = false;
  
  //Create falling object
  fallingObject = new Sprite(pomegranateImg,100,0,10);
  fallingObject.color = color(0,128,128);
  fallingObject.vel.y = random(1,5);
  fallingObject.rotationLock = false;
  
  
  

}

/* DRAW LOOP REPEATS */
function draw() 
{
  
  
  

  
  
  //WIN
  background(224,224,224);
  if(score >= 100){
  score = score+90000000000000000000;
  text("You did it! Cat loves you :D", width/6 + 10 ,height/3 - 4);
    fill(0);
      textSize(12);
      text("Move the cat with the \nleft and right arrow keys to \ncatch the falling \npomegranates.", width-160, -63);
      textSize(10);
      image(sound,-325,-100);
        text("VOLUME ON",-320,-172);
    fallingObject.x=-100
    fallingObject.y = -100
    fallingObject2.x=-100
    fallingObject2.y = -100
    catcher.x=-100
    catcher.y=-100
    // cat win
    image(wincat, width/3 - 2 ,145);
       textSize(19);
      textStyle(BOLD);
      text("SCORE = " +score, -100, -600);

    //yay.play()
    
// refresh text
    text("Refresh to play again!", width/4 +10, 310)

  }

// haven't WON YET
  
else  {
  
  background("#A9D9C1");
  
  textSize(25);
  fill(210,51,76);
   text("CAT POMEGRANATE!", 70,30);
  
  //If fallingObject moves to the bottom, move back random position at top
  if(fallingObject.y >= height){
      fallingObject.y=0;
      fallingObject.x=random(width);
      fallingObject.vel.y=random(2.5,6);
      score = score - 1;
    meow.play();
  }

  if(fallingObject2.y >= height){
      fallingObject2.y=0;
      fallingObject2.x=random(width);
      fallingObject2.vel.y=random(2.5,6);
      score = score - 1;
    meow.play();
  }

  

// Move catcher
  catcher.x = mouseX;

  // stop catcher at edges of screen
  if(catcher.x<50){
    catcher.x=50;
  }else if(catcher.x>380){
    catcher.x=380;

  }

  
  
// If fallingObject collides with catcher, move back to random position on top

if(fallingObject.collides(catcher)){
  fallingObject.y=0;
  fallingObject.x=random(width);
  fallingObject.vel.y=random(3,8);
  fallingObject.direction = "down";
  crunch.play();
  score = score+1;

} 

  if(fallingObject2.collides(catcher)){
    fallingObject2.y=0;
    fallingObject2.x=random(width);
    fallingObject2.vel.y=random(3,8);
    fallingObject2.direction = "down";
    crunch.play();
    score = score+1;

  } 






  //if less than 1, you LOSE
  if(score < 0 ){
    catcher.y=-200;
    fallingObject.y=-200;
    fallingObject2.y=-200;
    text("Move the cat\nLEFT and RIGHT by moving your cursor to \ncatch the falling \npomegranates.", -200, -200);
   // textSize(10);
   // image(bagelImg,-305,-100);
     // text("#proudbagel\n    sponsor",-320,-172);

    textSize(10);
      image(sound,-305,-100);
        text("VOLUME ON",-320,-172);

    
    text("Score = " +score, -200, -200);
    background(224,224,224);
    textSize(20);
    fill(0);
    strokeWeight(0);
    text("MEOW! You upset the cat!",width/6 + 10 ,height/4);
image(losecat,width/4 ,130 )
     textSize(17);
    text("Refresh to play again!", width/4 +15, 350 );
    
  } else {
    // Draw directions to screen
    fill(0);
    textSize(12);
    text("Move the cat LEFT and\nRIGHT by moving\nyour cursor to catch\nthe falling pomegranates.", width-160, 58);
    image(sound,315,120);
    textSize(12);
    fill(0);
      text("VOLUME ON",305,180);
     textSize(19);
    textStyle(BOLD);
    fill(0);
    text("SCORE = " +score, 10, 60);
//win score text
    textSize(13);
    text("WIN SCORE: 100",10,80);
  }

}
 
  
}

