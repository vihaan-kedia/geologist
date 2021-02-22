// hammer class
class Hammer {

// contructor
constructor(x, y) {
var options = {
'density':2,
'friction': 1.0,
'restitution':0.1
};

// this.'s
this.body = Bodies.rectangle(x, y, 150, 50, options);
this.width = 200;
this.height = 30;

// world.add
World.add(world, this.body);
};

// display
display(){
var pos = this.body.position;
pos.x = mouseX;
pos.y = mouseY;
var angle = this.body.angle;
  
// important stuff
push();
translate(pos.x, pos.y);
rotate(angle);
fill('red')
rectMode(CENTER)
rect(0, 0, this.width, this.height);
pop();
};};
  