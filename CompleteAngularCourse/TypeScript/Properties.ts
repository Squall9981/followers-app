class PointProp {

    //Have to use public keyword if using modifiers in constructor.
    constructor(private _x?: number, private _y?: number) {
        this._x = _x;
        this._y = _y;
    }

    draw() {
        console.log('X: ' + this._x + ', Y: ' + this._y);
    }

    //Property, this syntax allows X to be used as a field.
    get x() {
        return this._x;
    }

    //remove this to make X read only.
    set x(x: number) {
        if (x < 0) {
            throw new Error('value cannot be less than 0');
        }
        this._x = x;
    }

    getY() {
        return this._y;
    }

    setY(y: number) {
        this._y = y;
    }
}

let point3 = new PointProp(1,2);
point3.x;
point3.x = 10;
point3.getY();
point3.setY(5);
point3.draw();