class Flake {
    constructor() {
        this.resetFlake();
    }

    semiRandom(min, max) {
        // because we want to create more small sized
        // flakes than big size flakes
        let r = pow(random(0, 1), 3);
        return constrain(r * max, min, max);
    }

    applyForce(acc) {
        // f = m * a
        var force = acc.copy();
        force.mult(this.size*0.1);

        // v = v0 + force * t
        this.vel.add(force);
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
        this.size = this.semiRandom(2, 13);
        this.vel = createVector(0,0);
    }

    update() {
        this.pos.add(this.vel);

        this.wrap();
        
        if(this.outOfScreenBottom()) {
            this.resetFlake();
        }
    }

    wrap() {
        if(this.pos.x + this.size < 0) {
            this.pos.x = width;
        }
        else if(this.pos.x - this.size > width) {
            this.pos.x = 0;
        }
            
    }

    outOfScreenBottom() {
        return this.pos.y - this.size > height;
    }
}