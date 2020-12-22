

class App {

    constructor() {
        this.canvas = document.createElement('canvas')
        this.ctx = this.canvas.getContext('2d')
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

        this.canvas.width = this.stageWidth * 2
        this.canvas.height = this.stageHeight * 2

        this.ctx.scale(1, 1)

    }

    onDown(t) {
        console.log(1)
    }

    onMove(t) {
        console.log(2)
    }

    onUp(t) {
        console.log(3)
    }


    animate(t) {
        requestAnimationFrame(this.animate.bind(this))
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }



}



window.onload = () => {
    new App()
}