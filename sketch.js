// constants
const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

// global variables
var engine, world;
var stone,rubber,hammer,ground,sand;

// function setupr
function setup(){

// create canvas
createCanvas(1200,600);

// engine create
engine = Engine.create();
world = engine.world;

// objects
ground = new Ground(600,height,1200,20)
stone = new Stone(700,320,100,100);
rubber=new Rubber(900,450,70);
hammer = new Hammer(20,50);
sand1=new Sand(200,500,10)
sand2=new Sand(250,500,10)
sand3=new Sand(300,500,10)
sand4=new Sand(350,500,10)
sand5=new Sand(400,500,10)
sand6=new Sand(450,500,10)
}

function draw(){
    background("white");
    Engine.update(engine);

    stone.display();
    ground.display();
    rubber.display();
    hammer.display();
sand1.display();
sand2.display();
sand3.display();
sand4.display();
sand5.display(); 
sand6.display();   
}