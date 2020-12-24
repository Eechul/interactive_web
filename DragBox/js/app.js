import { Box } from './box.js'

class App {

    constructor() {
        this.canvas = document.createElement('canvas')
        this.ctx = this.canvas.getContext('2d')
        this.innering = false
        this.picking = false
        this.pickX = 0
        this.pickY = 0

        document.body.appendChild(this.canvas)

        window.addEventListener('resize', this.resize.bind(this), false)
        window.addEventListener('pointerdown', this.onDown.bind(this))
        window.addEventListener('pointermove', this.onMove.bind(this))
        window.addEventListener('pointerup', this.onUp.bind(this))
        console.log("App constructor")

        this.resize()
        requestAnimationFrame(this.animate.bind(this))
    }

    resize() {
        this.stageWidth = document.body.clientWidth
        this.stageHeight = document.body.clientHeight

        this.canvas.width = this.stageWidth
        this.canvas.height = this.stageHeight

        this.ctx.scale(1, 1)

        let bWidth = 250
        let bHeight = 250
        const centerX = this.canvas.width / 2 - bWidth / 2
        const centerY = this.canvas.height / 2 - bHeight / 2

        this.box = new Box(centerX, centerY, bWidth, bHeight)
    }

    onDown(t) {
        if(this.innering) { this.picking = true }
    }

    onMove(e) {
        const currX = e.pageX
        const currY = e.pageY

        if(this.box.inner(currX, currY)) { this.innering = true }
        else { this.innering = false }

        console.log(this.innering, this.picking)
        if(this.innering && this.picking) {
            // console.log('drag')
            this.box.update(currX,currY)
        }

    }

    onUp(t) {
        this.picking = false
    }

    animate(t) {
        requestAnimationFrame(this.animate.bind(this))
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.box.draw(this.ctx)
    }



}



window.onload = () => {
    new App()
}