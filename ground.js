// ground class
class Ground {

// constructor
constructor(x,y,width,height) {
var options = {
isStatic: true
}

// this.'s
this.body = Bodies.rectangle(x,y,width,height,options);
this.width = width;
this.height = height;

// world.add
World.add(world, this.body);
}

// display
display(){
var pos =this.body.position;
rectMode(CENTER);
fill("blue");
rect(pos.x, pos.y, this.width, this.height);
}};