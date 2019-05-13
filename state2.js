var person;
var obstacles = [];
var collect = [];
var counter;
var enemy = [];
var isGameStarted = false;
var isStartScreen = true;
var isGameStopped = false;
var temp;
var col;

function beginState2() {


  person = new Person(30, 50);
  counter = 0;






  for (var i = 0; i < 50; i++) {
    obstacles[i] = new Obstacle(i * 200, random(100, 350), 200, 20);
    }

  for (var j = 0; j < 50; j++) {
    collect[j] = new Collectables(j * random(100, 200), random(100, 300), 20);


  }

  for (var e = 0; e < 50; e++) {
    enemy[e] = new Enemy(e * 200, random(100, 350), 50, 50);


  }
}


this.updateState2 = function() {
  
background(achtergrond);


  
  translate(-person.pos.x + 50, -50);
    
    //Huizen
    
    image(huis1, 400, 200);
    image(huis2, 600, 200);
    image(huis3, 800, 200);
    image(huis4, 1000, 200);
    image(huis5, 1200, 200);
    image(huis6, 1400, 200);
    image(huis7, 1600, 200);
    
    image(huis1, 1800, 200);
    image(huis2, 2000, 200);
    image(huis3, 2200, 200);
    image(huis4, 2400, 200);
    image(huis5, 2600, 200);
    image(huis6, 2800, 200);
    image(huis7, 3000, 200);
    
    image(huis1, 3200, 200);
    image(huis2, 3400, 200);
    image(huis3, 3600, 200);
    image(huis4, 3800, 200);
    image(huis5, 4000, 200);
    image(huis6, 4200, 200);
    image(huis7, 4400, 200);

  for (var i = 0; i < obstacles.length; i++) {

    obstacles[i].show();

    if (person.pos.x > obstacles[i].x -30 && person.pos.x < obstacles[i].x + obstacles[i].w && person.pos.y > obstacles[i].y - obstacles[i].h + 20 - 50 && person.pos.y < obstacles[i].y + obstacles[i].h) {
      person.pos.y = obstacles[i].y - 50;
      person.vel.y *= 0;

    }

    if (obstacles[i].x < person.pos.x - 250) {
      obstacles.splice(i, 1);
    }

  }


  for (var j = 0; j < collect.length; j++) {
    collect[j].see();

    if (collect[j].x + collect[j].r > person.pos.x -10&& collect[j].x - collect[j].r < person.pos.x + person.w && collect[j].y + collect[j].r > person.pos.y + 10&& collect[j].y - collect[j].r < person.pos.y + person.h) {
      collect.splice(j, 1);
      counter++;
    }
  }

  for (var e = 0; e < enemy.length; e++) {
    enemy[e].Eshow();

    if (person.pos.x > enemy[e].x - 30 && person.pos.x < enemy[e].x + enemy[e].w && person.pos.y > enemy[e].y - enemy[e].h && person.pos.y < enemy[e].y + enemy[e].h) {
      currentState = 3;
    }
  }
    
  if(counter == 15){
      currentState = 4;
  }


  push();
 translate(person.pos.x, 0);
  noStroke();
  fill(0);
  textSize(30);
  text('Score', 0, 50, 0, 100);
  textSize(30);
  text(counter, 120, 50, 0, 100);
  pop();

  person.update();
  person.display();
  person.edges();


}

this.endState2 = function() {
  //movie.stop();
}

function keyPressed() {
  if (key == ' ') {
    var jump = createVector(0, -5);
    person.applyForce(jump);
  }
  
  

}