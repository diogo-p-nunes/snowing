var snowFlakes = [];

function setup() {
  createCanvas(600, 600);
  background(50);
}

function draw() {
  background(50);
  if(snowFlakes.length <= 200) {
    snowFlakes.push(new Flake());
  }

  for(flake of snowFlakes) {
    flake.render();
  }

}
