export class Obstacle {

    constructor(x, y, width, height) {
        this.x = x
        this.y = y
        this.width = width;
        this.height = height;
        // index = 0 시작, index = 1 : 끝
        this.minX = this.x
        this.maxX = this.x + this.width
        this.minY = this.y
        this.maxY = this.y + this.height
    }


    draw(ctx) {
        ctx.beginPath()

        ctx.strokeRect(this.x, this.y, this.width, this.height)
        ctx.fill()

        ctx.closePath()
    }
}