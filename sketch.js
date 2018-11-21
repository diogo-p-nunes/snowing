var snowFlakes = [];
var gravity;
var wind;

function setup() {
  createCanvas(600, 600);
  gravity = createVector(0, 0.1);
  wind = createVector(0.01, 0.01);

}

function draw() {
  background(50);
  //frameRate(5);

  // create the flakes
  if(snowFlakes.length <= 200) {
    snowFlakes.push(new Flake());
  }

  // update each flake and render
  for(flake of snowFlakes) {
    flake.applyForce(gravity);
    //flake.applyForce(wind);
    flake.update();
    flake.render();
  }


  

}
