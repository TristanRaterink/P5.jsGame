var startTime = 0;
var currentState = 1;
var previousState = 0;
var img2 = [];


function preload(){
    img = loadImage('SvenGoeie.png');
    achtergrond = loadImage('achtergrond2.png');
    huis1 = loadImage('huis1.png');
    huis2 = loadImage('huis2.png');
    huis3 = loadImage('huis3.png');
    huis4 = loadImage('huis4.png');
    huis5 = loadImage('huis5.png');
    huis6 = loadImage('huis6.png');
    huis7 = loadImage('huis7.png');
    roos = loadImage('roos.png');
    hek = loadImage('hek.png');
    platform = loadImage('goeiehout.png');
    achtergrond2 = loadImage('achtergrond3.png');
  

}


function setup(){
  createCanvas(600,400);

}

function draw(){
  if(currentState != previousState) {

    switch(previousState) {
      case 1: endState1(); break;
      case 2: endState2(); break;
      case 3: endState3(); break;
      case 4: endState3(); break;
    }

    switch(currentState) {
      case 1: beginState1(); break;
      case 2: beginState2(); break;
      case 3: beginState3(); break;
      case 4: beginState3(); break;
    }
        
    startTime = millis(); 
    previousState = currentState;
  }  
  
  if(currentState == 1) {
    updateState1();
  }
  else if(currentState == 2) {
    updateState2();
  }
  else if(currentState == 3) {
    updateState3();
  }  
  else if(currentState == 4){
      updateState4();
  }
}