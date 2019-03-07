import { CST } from "../CST"
export class GameScene extends Phaser.Scene {
    constructor () {
        super ({
            key: CST.SCENES.GAME
        })
    }

    init (msg) {
        console.log(msg);
        console.log("we are now in the game scene");
    }

    preload () {
        this.load.image('overworld', 'assets/overworld.png');
        this.load.tilemapTiledJSON('level1', 'assets/level1.json');
    }

    create () {
        // it should accept parameters from the menu screen
        // to generate an intersting world
        // this is where the world will be generated

          // Parameters are the name you gave the tileset in Tiled and then the key of the tileset image in
        // Phaser's cache (i.e. the name you used in preload)
        const tileset = map.addTilesetImage("level1", "overworld");

        // Parameters: layer name (or index) from Tiled, tileset, x, y
        const floorLayer = map.createStaticLayer("ground", tileset, 0, 0);
        const wallLayer = map.createStaticLayer("deco", tileset, 0, 0);
        // const doorLayer = map.createStaticLayer("Doors", tileset, 0, 0);
    }
}