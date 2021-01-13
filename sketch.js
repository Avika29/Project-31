const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var ground,division,plinko;
var particles;

var particles = [];
var plinko = [];
var divisions = [];
var divisionHeight = 300;

function setup() {
  createCanvas(480,800);
   engine = Engine.create();
   world = engine.world;


  ground = new Ground(240,790,480,20);
  

  
  for(var j = 50; j<width ; j=j+50){
    plinko.push(new Plinko(j,75,10))
  }
   
  for(var j = 30; j<width ; j=j+50){
    plinko.push(new Plinko(j,175,10))
  }

  for(var j = 40; j<width ; j=j+50){
    plinko.push(new Plinko(j,275,10))
  }

  for(var j = 20; j<width ; j=j+50){
    plinko.push(new Plinko(j,375,10))
  }

  for (var k = 0; k<=480; k=k+80){
    divisions.push(new Divisions(k,height-divisionHeight/2,5,divisionHeight));
  }
  console.log(divisions.length);
}

function draw() {
  background("black");  
  Engine.update(engine);

  ground.display();
  for(var k = 0;k<divisions.length;k=k+1){
    divisions[k].display();
  }
 
  for(var j = 0;j<plinko.length;j=j+1){
    plinko[j].display();
  }

  if(frameCount%60==0){
    particles.push(new Particles(random(width/2-30,width/2+30),0,10))
  }
  
  for(var j = 0;j<particles.length;j=j+1){
    particles[j].display();
  }
}