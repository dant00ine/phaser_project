import { CST } from "../CST"
export class MenuScene extends Phaser.Scene {
    constructor () {
        super ({
            key: CST.SCENES.MENU
        })
    }
    init (data) {
        console.log(data);
        console.log("got the data")
    }
    create () {
    }
}