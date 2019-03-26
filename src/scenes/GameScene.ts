import { CST } from "../CST"

// const level1 = require ('../../assets/level1.json');

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
        this.load.tilemapTiledJSON('level1', 'assets/level1.json');
        this.load.image('overworld', 'assets/overworld.png');

        this.load.spritesheet('player1', 'assets/sprites/player1.png', { frameWidth: 16, frameHeight: 16 });
    }

    create () {

        /* SET UP THE TILEMAP */
        const map = this.make.tilemap({ key: 'level1' });

        const tileset = map.addTilesetImage("overworld", "overworld");

        const floorLayer = map.createStaticLayer("ground", tileset);
        const wallLayer = map.createStaticLayer("deco", tileset);


        /* SET UP THE CHARACTER ? */
        const walkUpConf = {
            key: 'walkUp',
            frames: this.anims.generateFrameNumbers('player1', {start: 0, end: 5}),
            frameRate: 6,
            yoyo: true,
            repeat: -1
        };

        const walkUpAnim = this.anims.create(walkUpConf);

        const player1 = this.physics.add.sprite(0, 0, 'player1') // .setScale(4);

        this.physics.add.collider(player1, wallLayer);

        player1.play('walkUp');
    }

    update () {
        // let currentTile;
        // if (this.input.mousePointer.isDown) {
        //    currentTile = map.getTile(layer.getTileX(marker.x)) 
        // }
    }
}