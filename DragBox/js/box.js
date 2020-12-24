export class Box {

    constructor(x, y, width, height) {
        console.log(x, y)
        this.x = x
        this.y = y
        this.width = width
        this.height = height
        this.pickX = 0
        this.pickY = 0
        this.tmpPickX = 0
        this.tmpPickY = 0
    }

    inner(x, y) {
        const minX = this.x
        const minY = this.y
        const maxX = this.x + this.width
        const maxY = this.y + this.height


        if(x > minX && x < maxX && y > minY && y < maxY) {
            this.tmpPickX = this.pickX
            this.tmpPickY = this.pickY
            this.pickX = x
            this.pickY = y
            return true
        } else {
            return false;
        }
    }

    update(x, y) {
        const subX =  x - this.tmpPickX
        const subY = y - this.tmpPickY

        this.x += subX
        this.y += subY
    }

    draw(ctx) {
        ctx.beginPath()

        ctx.fillRect(this.x, this.y, this.width, this.height)
        ctx.fillStyle = "#00cc00"
        ctx.fill()
        ctx.closePath()

        // Obstacle only one
        // this.update()
    }


}