//export makes this a module.
export class PointMod {

    //Have to use public keyword if using modifiers in constructor.
    constructor(private _x?: number, private _y?: number) {
    }

    draw() {
        console.log('X: ' + this._x + ', Y: ' + this._y);
    }

}