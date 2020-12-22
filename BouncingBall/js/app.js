import { Ball } from './ball.js'

class App {

    constructor() {
        this.canvas = document.createElement('canvas')
        this.ctx = this.canvas.getContext('2d')
        document.body.appendChild(this.canvas)

        window.addEventListener('resize', this.resize.bind(this), false)

        console.log("App constructor")
        this.resize()
        requestAnimationFrame(this.animate.bind(this))
    }

    resize() {
        this.stageWidth = document.body.clientWidth
        this.stageHeight = document.body.clientHeight

        this.canvas.width = this.stageWidth * 2
        this.canvas.height = this.stageHeight * 2

        this.ball = new Ball(this.canvas.width, this.canvas.height, 120)

        this.ctx.scale(1, 1)

    }



    animate(t) {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.ball.draw(this.ctx)
        requestAnimationFrame(this.animate.bind(this))
    }



}



window.onload = () => {
    new App()
}