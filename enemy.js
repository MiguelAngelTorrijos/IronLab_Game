
class Enemy {

    constructor(ctx, posx, gameWidth, gameHeight) {
        this.ctx = ctx
        this.gameWidth = gameWidth
        this.gameHeight = gameHeight
        this.posx = posx - 65

        this.image = new Image()
        this.image.src = "./img/reloj.png"
        this.image.frame = 6
        this.image.framesIndex = 0

        this.posx0 = this.posx
        this.height = 150
        this.width = 75
        this.posy = this.gameHeight - this.height * 3
        this.posy0 = this.posy
        this.momentum = new Date().getTime() / 30
        this.velY = 0
        this.gravity = 0.8
        this.setListeners()
        this.posY = this.gameHeight - this.height;

    }
    draw(lives, framesCounter) {

        this.fly(framesCounter)
        this.move(lives)
    }
    fly(framesCounter) {

        this.ctx.drawImage(
            this.image,
            // number frames
            this.image.framesIndex * Math.floor(900 / this.image.frame),//posicion en x de cada frame
            0,//posicion en y de cada frame
            Math.floor(900 / this.image.frame),//ancho que mide cada frame
            110,//alto de cada frame
            this.posx,//posicion x absoluta en el canvas
            this.posy,//posicion y absoluta en el canvas
            150,
            // this.width,
            110
        )
        this.animateSprite(framesCounter)
    }

    animateSprite(framesCounter) {
        if (framesCounter % 6 === 0) {
            this.image.framesIndex++;
        }
        if (this.image.framesIndex >= this.image.frame) {
            this.image.framesIndex = 0;
        }
    }

    move(lives) {
        this.posx = this.posx0 + 75 * lives
        this.posy = this.posy0 + 75 * lives
    }
    setListeners() {
        document.addEventListener("keydown", e => {
            switch (e.key) {
                case 'w':
                    this.jump()
                    break;
                case 's':
                    this.shoot();
                    break;
            }
        });
    }
    jump() {
        if (this.posx === this.posx0) {

            this.velY = 0
        } else {
            this.posx = this.posX0
            this.gravity = 0
        }
    }
    shoot() {
    }


}