function beginState1() {
  
}

 this.updateState1 = function(){
    
  // --------------------------------------------
  // Do something with input
  // --------------------------------------------
 
  if (keyIsPressed){
   if (key == ' ') currentState = 2;
    
  }

  // --------------------------------------------
  // Do something with output
  // --------------------------------------------
 
  background(achtergrond2);
  
  fill(255);
  textSize(40);
  text("Press Space to start Game", 50, height/2);
  
    
}

 this.endState1 = function() {
  
}