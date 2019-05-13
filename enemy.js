function Enemy(x,y,w,h){
  this.x = x;
  this.y = y;
  this.w = w;
  this.h = h
  
  
  this.Eshow = function(){
//    noStroke();
//    fill(200,0,0);
//    rect(this.x, this.y, this.w, this.h);
    image(hek, this.x, this.y);
    
  }
  
  
}