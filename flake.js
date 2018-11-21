class Flake {
    constructor() {
        var x = random(width);
        var y = random(-height, 0);
        this.pos = createVector(x, y)
        this.size = random(1, 10);
        this.vel = createVector(0,0);
    }

    applyForce(acc) {
        // v = v0 + force * t
        this.vel.add(acc.mult(1));
    }

    render() {
        stroke(255);
        strokeWeight(this.size);
        point(this.pos.x, this.pos.y);
    }

    resetFlake() {
        var x = random(width);
        var y = random(-height, 0);
        this.pos = createVector(x, y)
        this.size = random(1, 10);
        this.vel = createVector(0,0);
    }

    update() {
        this.pos.add(this.vel);

        // if pos is out of screen, reset flake
        if(this.outOfScreen()) {
            this.resetFlake();
        }
    }

    outOfScreen() {
        return this.pos.y > height || this.pos.x > width || this.pos.x < 0;
    }
}