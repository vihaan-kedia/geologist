// rubber class
class Rubber{

// constructor
constructor(x,y,r){
var options={
restitution:1,
friction:5,
density:1
}

//this.x's
this.x=x;
this.y=y;
this.r=r

// bodies
this.body=Bodies.circle(this.x, this.y, (this.r-20)/2, options)
World.add(world, this.body);
}

// display
display(){

// position
var rubberpos=this.body.position;

// other important stuff
push()
translate(rubberpos.x, rubberpos.y);
rectMode(CENTER)
fill("orange");
ellipse(0,0,this.r, this.r);
pop()
}}