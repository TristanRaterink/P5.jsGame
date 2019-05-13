function Obstacle(x,y,w,h) {
  this.x = x;
  this.y = y;
  this.w = w;
  this.h = h;
  
  
  
  this.show = function() {
//    noStroke();
//    fill(93,59,37);
//    rect(this.x, this.y, this.w, this.h, 20);
//    stroke(0);
//    strokeWeight(5);
//    line(this.x + 10, this.y + 5, this.x + 80, this.y + 5);
//    line(this.x + 40, this.y + 15, this.x + 120, this.y + 15);
//    line(this.x + 120, this.y + 5, this.x + 190, this.y + 5);
    image(platform, this.x, this.y);
}
  }