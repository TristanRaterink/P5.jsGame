

function beginState3() {
 
}

function updateState3(){
  
  // --------------------------------------------
  // Do something with input
  // --------------------------------------------
  
  if (keyIsPressed){
     if (key == ' ') currentState = 1;
     
  
  }
  
  
  // --------------------------------------------
  // Do something with output
  // --------------------------------------------
    
  background(achtergrond2);
  fill(255);
  //movie.stop();
  noStroke();
  textSize(80);
  text("GAME OVER", width/2 - 260, height/2 + 25);
  textSize(30);
  text("Press Space", width/2 - 100, height/2+100)
 

  
}

function endState3() {
  
}