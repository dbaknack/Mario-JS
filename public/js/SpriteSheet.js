export default class SpriteSheet {
    constructor(image,width,hight) {
        this.Image = image;
        this.width = width;
        this.hight = hight;
        this.tiles = new Map();
    }

    define(name,x,y){
        const buffer = document.createElement('canvas');
        buffer.width = this.width;
        buffer.hight = this.hight;
        buffer.getContext('2d');
        buffer
            .getContext('2d')
            .drawImage(
                this.Image,
                x * this.width,
                y * this.hight,
                this.width,
                this.hight,
                0,
                0,
                this.width,
                this.hight)
        this.tiles.set(name,buffer);
    }

    draw(name,context,x,y) {
        const buffer = this.tiles.get(name);
        context.drawImage(buffer,x,y);
    }

    drawTile(name,context,x,y) {
        this.draw(name,context, x * this.width, y * this.hight)
    }
}