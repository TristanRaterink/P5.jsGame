function beginState4() {
 
}

function updateState4(){
  
  // --------------------------------------------
  // Do something with input
  // --------------------------------------------
  
  if (keyIsPressed){
     if (key == 'r') currentState = 1;
     
  
  }
  
  
  // --------------------------------------------
  // Do something with output
  // --------------------------------------------
    
  background(achtergrond2);
  fill(255);
  //movie.stop();
  noStroke();
  textSize(80);
  text("GEWONNEN", width/2 - 260, height/2 + 25);
  textSize(30);
  text("Ga nu naar Instagram", width/2 - 100, height/2+100);
  text("R om opnieuw te beginnen", width/2 -100, heigh/t2 + 150);
 

  
}

function endStat43() {
  
}