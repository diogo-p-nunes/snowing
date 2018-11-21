class Flake {
    constructor() {
        var x = random(width);
        var y = random(height);
        this.pos = createVector(x, y)
        this.size = random(1, 10);
    }

    render() {
        stroke(255);
        strokeWeight(this.size);
        point(this.pos.x, this.pos.y);
    }
}