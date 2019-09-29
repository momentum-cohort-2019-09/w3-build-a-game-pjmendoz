class Game {
    constructor(gameScreen){
        const canvas = document.getElementById(gameScreen)
        this.square = canvas.getContext('2d')
        this.size = { width: canvas.width, height: canvas.height };
        this.bodies = [];

        let playerLocation = {x: 210, y: 190}

        let playerSize = { width: 50, height: 50}
        this.player = new Player(playerLocation, playerSize)
        this.addBody(this.player)
    }
    addBody (body) {
        this.bodies.push(body);
    }  
    run () {
        this.draw();
    }
    draw () {
        this.square.fillStyle= '#DAF7A6';
        this.square.fillRect(200, 180, 200, 200);

        for (let body of this.bodies) {
            body.draw(this.square)
        }
    }
}

class Player {
    constructor(location, size) {
        this.location = location
        this.size = size
    }
    draw(square) {
        square.fillStyle = '#581845';
        square.fillRect(this.location.x, this.location.y, this.size.width, this.size.height)
    }
}

let game = new Game("gameScreen")
game.run()
