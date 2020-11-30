
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

const Constraint = Matter.Constraint;


function preload()
{
	
}

function setup() {
	createCanvas(1400, 800);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
bobDiameter=40;
	roof = new Roof(700,100,400,50)

	bob1 = new Bob(400,600,50)
    bob2 = new Bob(400,600,50)
	rope1 = new Rope(bob1.body,roof.body,-bobDiameter*1, 0);
	rope2 = new Rope(bob2.body,roof.body,-bobDiameter*1, 0);



	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("yellow");

  Engine.update(engine);
  
  roof.display();

  bob1.display();
  bob2.display();

  rope1.display();
  rope2.display();

  drawSprites();
 
}



