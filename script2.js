class Game {
    constructor(gameScreen){
        const canvas = document.getElementById(gameScreen)
        this.square = canvas.getContext('2d')
        this.size = {x: canvas.width, y: canvas.height}
        this.bodies= []

        let playerSize = {
            width: 50,
            height: 50
        }
        let playerLocation = {
            x: 210,
            y: 190
        }
        
        this.player = new Player(playerSize, playerLocation);
        this.addBody(this.player);

        let coinSize = {
            width: 10,
            height: 10
        }

        let coinStartLocation = {
            x: 210,
            y: 250
        }
        this.coin = new Coin(coinSize, coinStartLocation);
        this.addBody(this.coin);
    }
    addBody(body) {
        this.bodies.push(body);
    }       
    play() {
        const tick = () => {
            this.update();
            this.draw(this.screen, this.size);
            requestAnimationFrame(tick);
        }  
        tick()
        this.draw()
    }
    draw() {
        this.square.fillStyle= '#DAF7A6';
        this.square.fillRect(200, 180, 200, 200);
    }
    update () {
        this.draw(); 
    }
}

class Player {
    constructor (fillBackground){
        this.width = 50;
        this.height = 50;
        this.position = fillBackground(); 
    }
   draw (square){
       screen.fillStyle = '#581845'
       screen.fillRect{
           this.position.x; 
           this.position.y;
           this.size.width;
           this.size.height; 
       }
   }
}


let game = new Game("gameScreen")
game.play()
