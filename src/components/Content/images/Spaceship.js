export default class Spaceship {
    constructor(side) {
        this.side = side;

        const img = document.createElement('img');
        img.src = require('./spaceship.JPG');
        this.img = img;
    }

    draw() {
        const canvas = document.createElement('canvas');
        const side = this.side;
        canvas.width = side;
        canvas.height = side;
        canvas.getContext('2d').drawImage(this.img, 0, 0, side, side);
        console.log(canvas);
        return canvas;
    }
}
