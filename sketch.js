
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine, world;
var box1;
var box2;
var box3;
var paper;
var ground;

function preload()
{
	
}

function setup() {
	createCanvas(800,600);

	engine = Engine.create();
    world = engine.world;

	

	
	paper = new Paper(70,50,30);
	ground = new Ground(20,570,1600,20);
	box1= new  Box(500,480,20,90);
	box2= new Box(700,480,20,90);
	box3= new Box(600,535,220,20);

	Engine.run(engine);
  
}


function draw() {
  
  background(0);
  Engine.update(engine);
  ground.display();
  paper.display();
  box1.display();
  box2.display();
  box3.display();
  //cosole.log(KeyPressed);

  
 
}
function KeyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(paper.body,paper.body.position,{x:85,y:-85});
	}
}
