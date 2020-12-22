export class Ball {

    constructor(canvasWidth, canvasHeight, redius) {
        this.cWidth = canvasWidth
        this.cHeight = canvasHeight
        this.x = this.cWidth / 2
        this.y = this.cHeight / 1.5
        this.redius = redius
        this.diameter = this.redius * 2
        this.fieldX = this.x
        this.fieldY = this.y
        this.speed = 20.0
        this.directionX = this.speed
        this.directionY = this.speed

    }

    changeDirection(targetWidth, targetHeight) {
        // top
        if((this.y + this.redius) < this.diameter) {
            this.directionY *= -1
        }
        // right
        if(targetWidth < this.x + this.redius) {
            if(this.x > this.fieldX) {
                this.directionX *= -1
            }
        }
        // bottom
        if(targetHeight < this.y + this.redius) {
            if(this.x > this.fieldX) {
                this.directionY *= -1
            } else if(this.x < this.fieldX) {
                this.directionY *= -1
            }
        }
        // left
        if(this.x + this.redius < this.diameter) {
            if(this.x < this.fieldX) {
                this.directionX *= -1
            }
        }
    }

    update(obstacle) {
        this.x += this.directionX;
        this.y += this.directionY;

        this.changeDirection(this.cWidth, this.cHeight)
        if(obstacle != null) {
            if(
                ((this.x + this.redius) >= obstacle.rangeX[0] && (this.x + this.redius) <= obstacle.rangeX[1])
                &&
                ((this.y + this.redius) >= obstacle.rangeY[0] && (this.y - this.redius) <= obstacle.rangeY[1])
            ) {
                console.log("2")
                this.directionY *= -1
                if(
                    ((this.x + this.redius) >= obstacle.rangeX[0] && (this.x + this.redius) <= obstacle.rangeX[0])
                        &&
                    ((this.x + this.redius) <= obstacle.rangeY[0] && (this.x - this.redius) <= obstacle.rangeY[1])
                ) {
                    console.log("3")
                    this.directionX *= -1
                }
            }
            // else
        }

        this.fieldX = this.x
        this.fieldY = this.y

    }

    draw(ctx, obstacle) {
        ctx.beginPath()

        ctx.arc(this.x, this.y, this.redius,0, Math.PI * 2)

        ctx.fillStyle = "#c82124"
        ctx.fill()
        ctx.strokeStyle = "#c82124"
        ctx.stroke()
        ctx.closePath()

        // Obstacle only one
        this.update(obstacle[0])
    }
}

