// stone class
class Stone{

// contructor
constructor(x, y, width, height){
var options = {
'restitution':0.1,
'friction':0.9,
'density':20
}

// this.'s
this.body = Bodies.rectangle(x, y, width, height, options);
this.width = width;
this.height = height;

// world.add
World.add(world, this.body);
}

// display
display(){
var pos =this.body.position;
var angle = this.body.angle;

// important stuff
push();
translate(pos.x, pos.y);
rotate(angle);
rectMode(CENTER);
strokeWeight(4);
stroke("black");
fill("grey");
rect(0, 0, this.width, this.height);
pop();
}};
