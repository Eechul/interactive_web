export class Obstacle {

    constructor(x, y, width, height) {
        this.x = x
        this.y = y
        this.width = width;
        this.height = height;
        // index = 0 시작, index = 1 : 끝
        this.rangeX = [this.x, this.x + this.width]
        console.log(this.rangeX)
        this.rangeY = [this.y, this.y + this.height]
        console.log(this.rangeY)
    }

    draw(ctx) {
        ctx.beginPath()

        ctx.strokeRect(this.x, this.y, this.width, this.height)
        ctx.fill()
        // ctx.strokeStyle = "#000000"
        // ctx.stroke()
        ctx.closePath()
    }
}