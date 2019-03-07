import { CST } from "../CST"

const level1 = require ('../../assets/level1.json');

export class GameScene extends Phaser.Scene {
    constructor () {
        super ({
            key: CST.SCENES.GAME
        })
    }

    init (msg: string) {
        console.log(msg);
        console.log("we are now in the game scene");
    }

    preload () {
        this.load.image('overworld', 'assets/overworld.png');
        this.load.tilemapTiledJSON('level1', level1);
    }

    create () {
        const map = this.add.tilemap('level1');
        const tileset = map.addTilesetImage("level1", "overworld");

        const floorLayer = map.createStaticLayer("ground", tileset, 0, 0);
        const wallLayer = map.createStaticLayer("deco", tileset, 0, 0);

        const camera = this.cameras.main;

        camera.setBounds(0, 0, map.widthInPixels, map.heightInPixels);
    }
}