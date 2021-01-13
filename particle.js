class Particles {
    constructor(x,y,radius){
       var  options = {
        restitution: 0.3,
        friction: 0.5,
        density: 1.2
       }
       this.body = Bodies.circle(x,y,radius,options)
       this.color =color(random(0,255),random(0,255),random(0,255));
       this.r = radius
       World.add(world,this.body)
    }
    display(){
        push();
       translate(this.body.position.x,this.body.position.y)
      fill(this.color);
      ellipseMode(RADIUS)
      ellipse(0,0,this.r,this.r)
      pop();
    }
}