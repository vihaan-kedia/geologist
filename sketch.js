// constants
const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

// global variables
var engine, world;
var stone,rubber,hammer,ground;

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



}

function draw(){
    background("white");
    Engine.update(engine);

    stone.display();
    ground.display();
    rubber.display();
    hammer.display();

    
}