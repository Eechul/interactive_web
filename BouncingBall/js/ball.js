export class Ball {

    constructor(canvasWidth, canvasHeight, redius) {
        this.cWidth = canvasWidth
        this.cHeight = canvasHeight
        this.x = this.cWidth / 2
        this.y = this.cHeight / 2
        this.redius = redius
        this.diameter = this.redius * 2
        this.fieldX = this.x
        this.fieldY = this.y
        this.speed = 20.0
        this.xSpeed = this.speed
        this.ySpeed = this.speed
        // this.speed = 5.5

    }

    update() {
        this.x += this.xSpeed;
        this.y += this.ySpeed;

        // bottom
        if(this.cHeight < this.y + this.redius) {
            if(this.x > this.fieldX) {
                this.ySpeed *= -1
            } else if(this.x < this.fieldX) {
                this.ySpeed *= -1
            }
        }

        // right
        if(this.cWidth < this.x + this.redius) {
            if(this.x > this.fieldX) {
                this.xSpeed *= -1
            }
        }

        // left
        if(this.x + this.redius < this.diameter) {
            if(this.x < this.fieldX) {
                this.xSpeed *= -1
            }
        }

        // top
        if((this.y + this.redius) < this.diameter) {
            this.ySpeed *= -1
        }

        this.fieldX = this.x
        this.fieldY = this.y

    }

    draw(ctx) {
        ctx.beginPath()

        ctx.arc(this.x, this.y, this.redius,0, Math.PI * 2)

        ctx.fillStyle = "#c82124"
        ctx.fill()
        ctx.strokeStyle = "#c82124"
        ctx.stroke()
        ctx.closePath()

        this.update()
    }
}

