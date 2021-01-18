const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var secHand
var minuteHands
var hourHands
function setup() {
  createCanvas(1280,610);
  engine = Engine.create()
   world = engine.world
   hourHands = new hrHands(600,300)
   secHand = new scHands(600,300)
   minuteHands = new minHands(600,300)
  //createSprite(400, 200, 50, 50);
}

function draw() {
  background(0);  
  Engine.update(engine)
  secHand.display()
  minuteHands.display()
  hourHands.display()
  //drawSprites();
}