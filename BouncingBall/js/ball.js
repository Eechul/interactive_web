export class Ball {

    constructor(canvasWidth, canvasHeight, radius) {
        this.cWidth = canvasWidth
        this.cHeight = canvasHeight
        this.x = this.cWidth / 2
        this.y = this.cHeight / 1.5
        this.radius = radius
        this.diameter = this.radius * 2
        this.fieldX = this.x + this.radius
        this.fieldY = this.y + this.radius
        this.speed = 35.0
        this.directionX = this.speed
        this.directionY = this.speed

    }

    changeDirection(targetWidth, targetHeight) {
        // top
        if((this.y + this.radius) < this.diameter) {
            this.directionY *= -1
        }
        // right
        if(targetWidth < this.x + this.radius) {
            if(this.x > this.fieldX) {
                this.directionX *= -1
            }
        }
        // bottom
        if(targetHeight < this.y + this.radius) {
            if(this.x > this.fieldX) {
                this.directionY *= -1
            } else if(this.x < this.fieldX) {
                this.directionY *= -1
            }
        }
        // left
        if(this.x + this.radius < this.diameter) {
            if(this.x < this.fieldX) {
                this.directionX *= -1
            }
        }
    }

    update(obstacle) {
        this.x += this.directionX;
        this.y += this.directionY;

        this.changeDirection(this.cWidth, this.cHeight)

        const minX = obstacle.x - this.radius
        const maxX = obstacle.maxX + this.radius
        const minY = obstacle.y - this.radius
        const maxY = obstacle.maxY + this.radius

        if(obstacle != null) {
            if(this.x > minX && this.x < maxX &&
                this.y > minY && this.y < maxY) {

                const x1 = Math.abs(minX - this.x)
                const x2 = Math.abs(this.x - maxX)
                const y1 = Math.abs(minY - this.y)
                const y2 = Math.abs(this.y - maxY)

                const min1 = Math.min(x1, x2)
                const min2 = Math.min(y1, y2)
                const min = Math.min(min1, min2)

                if(min == min1) {
                    this.directionX *=  -1
                } if(min == min2) {
                    this.directionY *=  -1
                }
            }
        }

        this.fieldX = this.x
        this.fieldY = this.y

    }

    draw(ctx, obstacle) {
        ctx.beginPath()

        ctx.arc(this.x, this.y, this.radius,0, Math.PI * 2)

        ctx.fillStyle = "#c82124"
        ctx.fill()
        ctx.strokeStyle = "#c82124"
        ctx.stroke()
        ctx.closePath()

        // Obstacle only one
        this.update(obstacle[0])
    }
}

