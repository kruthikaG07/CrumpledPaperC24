
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var paper1,leftBar,rightBar,bottomBar,ground;
var engine,world;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);
	engine = Engine.create();
	world = engine.world;

	paper1 = new Paper(200,500,20);
	ground = new Ground(600,670,1200,20);
	leftBar = new Dustbin(510,600,20,100);
	rightBar = new Dustbin(710,600,20,100);
	bottomBar = new Dustbin(610,640,180,20);

	Engine.run(engine); 
}

function draw() {
  rectMode(CENTER);
  background("black");
  Engine.update(engine);

  ground.display();
  paper1.display();
  leftBar.display();
  rightBar.display();
  bottomBar.display();
}
function keyPressed(){
	if(keyCode === UP_ARROW){
Matter.Body.applyForce(paper1.body,paper1.body.position,{x:40,y:-85})
	}
}


