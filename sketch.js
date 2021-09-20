var backgroundImg,game,form,player;
var gameState=0;
function preload(){

  backgroundImg=loadImage("background.jpg");
}
function setup(){

  createCanvas(windowWidth,windowHeight);

  game= new Game();
  game.start();

}
function draw(){

  background(backgroundImg);

    
  drawSprites();
    
}