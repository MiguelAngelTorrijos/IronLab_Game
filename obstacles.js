class Obstacle {

  constructor(ctx, gameWidth, playerPosY0, playerHeight, pathImg, width = 75, height = 150) {

    this.ctx = ctx;
    this.width = width
    this.height = height
    this.posX = gameWidth
    this.posY = playerPosY0 + playerHeight - this.height;
    this.posY0 = playerPosY0

    this.img = new Image()
    this.img.src = pathImg

    this.playerCollision = false


    this.liveObstacles = 6

    this.velX = 10;
  }

  draw() {
    
    this.ctx.drawImage(
      this.img,
      
      this.posX,//posicion en y de cada frame
      this.posY,  // Math.floor(900 / this.image.frame),//ancho que mide cada frame
      this.width,
      this.height
    )

    this.move()
  }

  move() {
    this.posX -= this.velX;
  }
}