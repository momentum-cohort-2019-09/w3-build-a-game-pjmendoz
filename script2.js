class Game {
    constructor (canvasID) {
        this.canvas = document.getElementById(canvasID)
        this.box = canvas.getContext('2d')
        this.size = { x: canvas.width, y: canvas.height}
        this.fillBackground()
        }
    fillBackground() {
        this.box.fillStyle = 'yellow'; 
        this.box.fillRect = (150, 150, 200, 200);
    }    
}

let game = new Game("canvas")
game.fillBackground()