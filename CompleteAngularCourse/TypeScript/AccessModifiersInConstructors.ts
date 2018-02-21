class PointAMIC {

    //Have to use public keyword if using modifiers in constructor.
    constructor(private x?: number, private y?: number) {
        this.x = x;
        this.y = y;
    }

    draw() {
        console.log('X: ' + this.x + ', Y: ' + this.y);
    }
}

let point2 = new PointAMIC(1,2);
point2.draw();