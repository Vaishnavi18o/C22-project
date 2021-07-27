const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Contraint = Matter.Contraint;

var bob1, bob2, bob3, bob4, bob5, chain1, chain2, chain3, chain4, chain5, roof;

//function preload ()
//{

//}

function setup(){
    createCanvas(800,700);


    engine = Engine.create();
    world = engine.world;

    //Create bodis here.
    bob1 = new Bob(350,400,50)
    bob2 = new Bob(400,400,50)
    bob3 = new Bob(450,400,50)
    bob4 = new Bob(500,400,50)
    bob5 = new Bob(550,400,50)

    chain1 = new Bob(bob1.body,{x:350,y:100})
    chain2 = new Bob(bob2.body,{x:400,y:100})
    chain3 = new Bob(bob3.body,{x:450,y:100})
    chain4 = new Bob(bob4.body,{x:500,y:100})
    chain5 = new Bob(bob5.body,{x:550,y:100})

    roof = new roof(450,300,300,20)

    Engine.run(engine);
}




//function draw(){}
    


