/** @type {import("../typings/phaser.d.ts")} */

import { LoadScene } from "./scenes/LoadScene";
import { MenuScene } from "./scenes/MenuScene";
let game = new Phaser.Game({
    width: window.innerWidth,
    height: window.innerHeight,
    scene: [
        LoadScene,
        MenuScene
    ]
})