import {Point} from "./point.js";

export class Wave {
    constructor(opacity, color) {
        this.opacity = opacity || 1.0
        this.color = color || '#ff0000'
        this.points = []
        this.numberOfPoints = 6
    }

    resize(stageWidth, stageHeight) {
        console.log(22)
        this.stageWidth = stageWidth
        this.stageHeight = stageHeight

        this.centerX = stageWidth / 2
        this.centerY = stageHeight / 2

        this.pointGap = this.stageWidth / (this.numberOfPoints -1)

        this.init()
    }

    init() {
        for (let i = 0; i < this.numberOfPoints; i++) {
            this.points[i] = new Point(i, this.pointGap * i, this.centerY)
        }

    }

    draw(ctx) {
        ctx.beginPath()

        let prevX = this.points[0].x;
        let prevY = this.points[0].y;

        ctx.moveTo(prevX, prevY)

        for (let i = 0; i < this.numberOfPoints; i++) {

            const cx = (prevX + this.points[i].x) / 2
            const cy = (prevY + this.points[i].y) / 2

            ctx.quadraticCurveTo(prevX, prevY, cx, cy)

            prevX = this.points[i].x;
            prevY = this.points[i].y;

            if(i != 0 && i != this.numberOfPoints -1) {
                this.points[i].update()
            }
        }

        ctx.lineTo(prevX, prevY)
        ctx.lineTo(this.stageWidth, this.stageHeight)
        ctx.lineTo(0, this.stageHeight)
        ctx.lineTo(this.points[0].x, this.points[0].y)

        ctx.fillStyle = this.color
        ctx.globalAlpha = this.opacity
        ctx.fill()

        ctx.closePath()

    }
}