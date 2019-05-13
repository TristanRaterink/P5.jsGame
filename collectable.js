function Collectables(x,y,r){
this.x = x;
this.y = y;
this.r = r;
  
  
  this.see = function(){
   noStroke();
    fill(0,200,0);
   ellipse(this.x, this.y, r,r);
    image(roos, this.x - 10, this.y - 10);
    
  }
}