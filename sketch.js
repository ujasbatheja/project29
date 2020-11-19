const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var ground;
var platform;
var slingshot;
var block8, block9, block10, block11, block12;

function setup() {
  var canvas = createCanvas(1200,400);
  engine = Engine.create();
  world = engine.world;

  ground = new Ground(600,height,1200,20);
  platform = new Ground(150, 305, 300, 170);

  block8 = new Block(330,235,30,40);
  block9 = new Block(360,235,30,40);
  block10 = new Block(390,235,30,40);
  block11 = new Block(420,235,30,40);
  block12 = new Block(450,235,30,40);

  slingshot = new SlingShot(ploygen.body,{x:200, y:50});
}

function draw() {

  background("black");
    Engine.update(engine);
    strokeWeight(4);

    ground.display();
    platform.display();
    slingshot.display();    
    block8.display();
    block9.display();
    block10.display();
    block11.display();
    block12.display();

  drawSprites();
} 

function mouseDragged(){
  Matter.Body.setPosition(polygon.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
  slingshot.fly();
}