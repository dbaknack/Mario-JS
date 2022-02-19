import SpriteSheet from './SpriteSheet.js';
import {loadImage,loadLevel} from './loaders.js';


function drawBackground(backgrounds,context,sprites) {
    backgrounds.ranges.forEach(([x1,x2,y1,y2]) => {
        for(let x = x1; x < x2; ++x) {
            for(let y = y1; y < y2; ++y) {
                sprites.drawTile(backgrounds.tile,context, x, y);
            }
        }
    });
}
const canvas = document.getElementById('screen');
const context = canvas.getContext('2d');

loadImage('./tiles.png')
    .then(image => {
        const sprites = new SpriteSheet(image,16,16)
        sprites.define('ground',0,0);
        sprites.define('sky',3,23)

        loadLevel('1-1')
        .then(level => {
            drawBackground(level.backgrounds[0],context,sprites);
        });


        for(let x = 0; x < 25; ++x) {
            for(let y = 12; y < 14; ++y) {
                sprites.drawTile('ground',context, x, y)
            }
        }
    });