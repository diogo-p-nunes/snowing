// snow
var snowFlakes = [];
var gravity;
var wind;
var angle;

// pile of snow
var pileSnow = [];
var bottom;

function setup() {
  createCanvas(600, 400);
  gravity = createVector(0, 0.1);
  wind = createVector(0.1, 0);
  angle = PI;
  initPileSnow();
  renderSnowPile();
}

function initPileSnow() {
  var h = 0;
  for(var i = 0; i < width; i++) {
    pileSnow.push(map(sin(h), -1,1, 2, 10));
    h += 0.1;
  }
}

function addToSnowPile(x, y, size) {
  var aux = 0;
  var l = floor(x - floor(size/2));
  var r = floor(x + floor(size/2));

  for(var i = l; i <= r; i++) {
    pileSnow[i] += map(sin(aux), -1,1, 0, size/2);
    aux += PI/(r-l);
  }
}

function renderSnowPile() {
  fill(255);
  beginShape();
  vertex(0, height);
  for(var i = 1; i < width-1; i++) {
    vertex(i, height - pileSnow[i]);
  }
  vertex(width-1, height);
  endShape(CLOSE);
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

  renderSnowPile();

}
