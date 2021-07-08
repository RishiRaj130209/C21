const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

let engine;
let world;

var ground;
var left;
var right;
var top_wall;
var ball;
var lr,ud
function setup() {
  createCanvas(400,400);
  engine = Engine.create();
  world = engine.world;
  
  ground =new Ground(200,390,400,20);
  right = new Ground(390,200,20,400);
  left = new Ground(10,200,20,400);
  top_wall = new Ground(200,10,400,20);
  ball = new Ball(200,200,20);
  rectMode(CENTER);
  ellipseMode(RADIUS);

  lr = createImg("right.png")
  lr.position(50,50)
  lr.size(50,50)
  lr.mouseClicked(hforce)

  ud = createImg("up.png")
  ud.position(300,50)
  ud.size(50,50)
  ud.mouseClicked(vforce)
}

function draw() 
{
  background(51);
  ground.show();
  top_wall.show();
  left.show();
  right.show();
  ball.display();
  Engine.update(engine);

}

function hforce(){
  Matter.Body.applyForce(ball,{x:0,y:0},{x:0.05,y:0});
}

function vforce(){
  Matter.Body.applyForce(ball,{x:0,y:0},{x:0,y:-0.05});
}