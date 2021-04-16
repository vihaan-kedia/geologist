// hammer class
class Sand {

// contructor
constructor(x, y,r) {
var options = {
'density':1,
'friction': 1.0,
'restitution':0.1
    };
    this.r=r;
    this.x=x;
    this.y=y;
    // this.'s
    this.body = Bodies.circle(this.x, this.y, (this.r-20)/2, options);
    
    // world.add
    World.add(world, this.body);
    };
    
    // display
    display(){
    var pos = this.body.position;
   
    var angle = this.body.angle;
      
    // important stuff
    push();
    translate(pos.x, pos.y);
    rotate(angle);
    fill('brown')
    ellipseMode(RADIUS)
    ellipse(0,0,this.r, this.r);
    pop();
    };};
      