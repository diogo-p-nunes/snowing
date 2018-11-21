// snow
var snowFlakes = [];
var gravity;
var wind;
var angle;

// pile of snow
var pileSnow = [];
var bottom;

function setup() {
  createCanvas(600, 600);
  gravity = createVector(0, 0.1);
  wind = createVector(0.1, 0);
  angle = PI;
  initPileSnow();
}

function initPileSnow() {
  bottom = 30;
  var h = 0;
  for(var i = 1; i < width-1; i++) {
    pileSnow[i] = map(sin(h), -1,1, 0, 10);
    h += 0.1;
  }

  pileSnow[0] = bottom;
  pileSnow[width-1] = bottom;
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


  // render pile of snow
  fill(255);
  translate(0, height - bottom);
  beginShape();
  for(var i = 0; i < width; i++) {
    vertex(i, pileSnow[i]);
  }
  endShape();

}
