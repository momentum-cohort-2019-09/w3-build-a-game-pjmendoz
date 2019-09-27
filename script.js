class Game {
    constructor(gameScreen){
        const canvas = document.getElementById(gameScreen)
        this.square = canvas.getContext('2d')
        this.player= canvas.getContext('2d')
    }
    update() {
        this.fillBackground()
        this.person()
    }    
    fillBackground() {
        this.square.fillStyle= '#DAF7A6';
        this.square.fillRect(200, 180, 200, 200);
    }
    person (){
        this.player.clearRect (0, 0, 200, 200)
        this.player.fillStyle= '#581845'
        this.player.fillRect(210, 190, 50, 50)
    }
}

let game = new Game("gameScreen")
game.update()

// const canvas = document.getElementById("gameScreen");
// const ctx = canvas.getContext("2d");

// ctx.fillStyle = '#DAF7A6'
// ctx.fillRect(200, 180, 200, 200); 

// ctx.clearRect (0, 0, 200, 200)
// ctx.fillStyle = '#581845'
// ctx.fillRect(210, 190, 50, 50)
      