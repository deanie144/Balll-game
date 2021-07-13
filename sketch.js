
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball;

function preload()
{
	
}

function setup() {
	createCanvas(600,400);


	engine = Engine.create();
	world = engine.world;

	ground =new Ground(200,390,800,20,20)
	leftSide = new Ground(400,330,20,100);
	rightSide = new Ground(500,330,20,100);

	//Create the Bodies Here.
     var ball_options={
     isStatic:false,
	 restitution:0.3,
	 friction:0,
	 density:1.2
	 }

	 ball = Bodies.circle(100,200,20,ball_options);
	 World.add(world,ball);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  ellipse(ball.position.x,ball.position.y,20);

  ground.show();
  leftSide.show();
  rightSide.show();
  Engine.update(engine);
  
  drawSprites();
 
}
function keyPressed() {
	if (keyCode === UP_ARROW) {
		Matter.Body.applyForce(ball,{x:0,y:0},{x:50,y:-50});
	}
 }



