
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	dustbinimage=loadImage("dustbingreen.png")
}

function setup() {
	createCanvas(1200,600);


	engine = Engine.create();
	world = engine.world;

	paper1=new Paper(100,10,70);
	ground1=new Ground(600,550,1200,10);
	Dustbinlog1=new Dustbin(1050,540,200,20);
	Dustbinlog2=new Dustbin(1150,500,20,100);
	Dustbinlog3=new Dustbin(950,500,20,100);
	console.log(paper1)
	Engine.run(engine);
  
}


function draw() {
	Engine.update(engine)
  rectMode(CENTER);
  background(255);
paper1.display();
Dustbinlog1.display();
Dustbinlog2.display();
Dustbinlog3.display();
ground1.display();
  drawSprites();
 
}

function keyPressed(){
	if(keyCode===UP_ARROW){
		Matter.Body.applyForce(paper1.body,paper1.body.position,{x:85,y:-85})
	}
}