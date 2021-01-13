class Plinko{
    constructor(x,y,radius){
    
        var options = {
            isStatic: true,
            restitution: 0.3,
            friction: 0.5,
            density: 1.2
             }
             this.body = Bodies.circle(x,y,radius,options);
             this.r = radius
             World.add(world,this.body)
    }
   display(){
       push();
       translate(this.body.position.x,this.body.position.y)
      ellipseMode(RADIUS)
      fill("brown")
      ellipse(0,0,this.r,this.r)
      pop();
    } 
}