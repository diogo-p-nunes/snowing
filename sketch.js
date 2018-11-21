var snowFlakes = [];
var gravity;
var wind;
var angle;

function setup() {
  createCanvas(600, 600);
  gravity = createVector(0, 0.1);
  wind = createVector(0.1, 0);
  angle = PI;
}

function draw() {
  background(50);

  // create the flakes
  if(snowFlakes.length <= 200) {
    snowFlakes.push(new Flake());
  }

  // update wind force
  wind.x = (sin(angle) * 0.1);
  angle += 0.08;

  // update each flake and render
  for(flake of snowFlakes) {
    flake.applyForce(gravity);
    flake.applyForce(wind);
    flake.update();
    flake.render();
  }

}
