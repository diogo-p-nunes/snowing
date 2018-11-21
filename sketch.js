// snow
var snowFlakes = [];
var gravity;
var wind;
var angle;

// pile of snow
var snowPileSize = 10;
var snowPile = [];
var maxSnowPile = 500;

function setup() {
  createCanvas(600, 400);
  gravity = createVector(0, 0.01);
  wind = createVector(0.1, 0);
  angle = PI;
}

function addToSnowPile(x, y, size) {
  if(snowPile.length < maxSnowPile) {
    snowPile.push(createVector(x,y,size));
  }
  else {
    snowPile = [];
    snowPileSize += 3;
  }
}

function renderSnowPile() {
  fill(255);
  stroke(255);
  strokeWeight(1);
  rect(0, height-snowPileSize, width, snowPileSize);

  for(var i = 0; i < snowPile.length; i++) {
    stroke(255);
    strokeWeight(snowPile[i].z);
    point(snowPile[i].x, snowPile[i].y);
  }
}

function draw() {
  background(132, 168, 255);
  
  // create the flakes
  if(snowFlakes.length <= 200) {
    snowFlakes.push(new Flake());
  }

  // update wind force
  wind.x = (sin(angle) * 0.07);
  angle += 0.08;

  // update each flake and render
  for(flake of snowFlakes) {
    flake.applyForce(gravity);
    flake.applyForce(wind);
    flake.update();
    flake.render();
  }

  renderSnowPile();

  stroke(0);
  strokeWeight(2);
  noFill();
  rect(0, 0, width, height);
}
