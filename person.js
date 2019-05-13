function Person(w, h) {
  this.pos = createVector(50, height);
  this.vel = createVector(1,5, 0);
  this.acc = createVector(0, 0);
  this.grav = createVector(0, 0.3 );
  this.w = w;
  this.h = h;


  this.applyForce = function(force) {
    this.acc.add(force);
  }

  this.update = function() {
    this.acc.add(this.grav);
    this.vel.add(this.acc);
    this.pos.add(this.vel);
    this.acc.set(0, 0);
  }

  this.display = function() {
    noFill();
    noStroke();
    rect(this.pos.x, this.pos.y, this.w, this.h);
    image(img, this.pos.x, this.pos.y);
  }

  this.edges = function(){
    if (this.pos.y > height) {
      this.vel.y *= 0;
      this.pos.y = height;

    }
    if (this.pos.y - 50 < 0){
      this.pos.y = 50;
    }

  }
  
} 