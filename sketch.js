const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var particles=[];
var plinkos=[];
var divisions=[];

var divisionHeight=300;
var score=0
var particle1
var turn=0

var gameState="PLAY"

function setup(){
    var canvas = createCanvas(800,800);
    engine = Engine.create();
    world = engine.world;

    ground = new Ground(width/2,height,width,20); 
    for (var k = 0; k <=width; k = k + 80) { 
        divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
     } 

    for (var j = 75; j <=width; j=j+50) { 
    plinkos.push(new Plinko(j,75));
         } 

    for (var j = 50; j <=width-10; j=j+50) {
    plinkos.push(new Plinko(j,175)); 
    
}

    for (var j = 75; j <=width; j=j+50) { 
    plinkos.push(new Plinko(j,275));
                 
} 
    for (var j = 50; j <=width-10; j=j+50) { 
    plinkos.push(new Plinko(j,375)); 
} 
} 

function draw(){
background("black")

textSize(35) 
text(" 500 ", 5, 550); 
text(" 500 ", 80, 550); 
text(" 500 ", 160, 550); 
text(" 500 ", 240, 550); 
text(" 100 ", 320, 550); 
text(" 100 ", 400, 550); 
text(" 100 ", 480, 550); 
text(" 200 ", 560, 550); 
text(" 200 ", 640, 550); 
text(" 200 ", 720, 550); 
Engine.update(engine); 
ground.display(); 
if ( gameState =="END") { 
    text("GameOver", 150, 250); 
    //return 
}


for (var i = 0; i < plinkos.length; i++) { 
    plinkos[i].display(); 
} 

if(frameCount%60===0){ 
particles.push(new Particle(random(width/2-30, width/2+30), 10,10)); 
} 

if(frameCount%60===0){ 
particles.push(new Particle(random(width/2-30, width/2+30), 10,10));
 }

for (var k = 0; k < divisions.length; k++) { 
    divisions[k].display();
 }

 if(particle1!=null){ 
particle1.display() 
var pos=particle1.body.position 
if(pos.y>760){ 
if (pos.x>301 && pos.x<600){ 
score=score+100 
particle1=null 
if(turn>=5){ 
gameState="END" 
 } 
} 

else if (pos.x>601 && pos.x<900){ 
score=score+200 
particle1=null 
if(turn>=5){ 
gameState="END" 
} 
} 

else if (pos.x<300){ 
score=score+500 
particle1=null 
if(turn>=5){ 
gameState="END" 
} 
} 
} 
} 
    text("SCORE:"+score,20,40) 
}


function mousePressed() { 
    if(gameState!=="END") { 
        turn++; 
        particle1=new Particle(mouseX, 10, 10, 10); 
    } 
}
















