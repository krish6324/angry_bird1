const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var object,ball;
var box1,ground;
var box2,pig1;
function setup(){
    var canvas = createCanvas(1200,400);

    engine = Engine.create();
    world = engine.world;
box1=new Box(700,320,70,70);
pig1=new Pig(800,320);
box2=new Box(920,320,70,70);
ground=new Ground(600,height,1200,20);

   
}

function draw(){
    background(0);
    Engine.update(engine);
    box1.display();
    box2.display();
    ground.display();
    pig1.display();
   
}
