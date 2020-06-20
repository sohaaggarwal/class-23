const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground;
var ball;

function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;

   

   

    console.log(ground);
   
box1=new Box();
ground1=new GROUND();

}


function draw(){
    background(0);
    Engine.update(engine);
   
    box1.display();
    ground1.display();

  
}