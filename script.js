class Game {
    constructor(gameScreen){
        const canvas = document.getElementById(gameScreen)
        this.square = canvas.getContext('2d')
        this.player= canvas.getContext('2d')
        this.coin = canvas.getContext('2d')
    }
    update() {
        this.fillBackground()
        this.person()
        this.point()
    }    
    fillBackground() {
        this.square.fillStyle= '#DAF7A6';
        this.square.fillRect(200, 180, 200, 200);
    }
    person(){
        this.player.clearRect (0, 0, 200, 200)
        this.player.fillStyle= '#581845'
        this.player.fillRect(210, 190, 50, 50)
    }
    point() {
        this.player.clearRect (0, 0, 200, 200)
        this.coin.fillStyle = '#FFC300'
        this.coin.fillRect(210, 250, 10, 10)
    }
}

let game = new Game("gameScreen")
game.update()
