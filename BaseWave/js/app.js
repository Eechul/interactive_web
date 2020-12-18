import { Wave } from "./wave.js";
import { WaveGroup } from "./waveGroup.js";

class App {
    constructor() {
        this.canvas = document.createElement('canvas')
        this.ctx = this.canvas.getContext('2d')
        document.body.appendChild(this.canvas)

        window.addEventListener('resize', this.resize.bind(this), {
            once: false,
            passive: false,
            capture: false,
        })

        // this.wave = new Wave()
        this.waveGroup = new WaveGroup(0.5, 3)
        console.log("##")
        this.resize()
        requestAnimationFrame(this.animate.bind(this))
    }

    resize() {
        this.stageWidth = document.body.clientWidth
        this.stageHeight = document.body.clientHeight

        this.canvas.width = this.stageWidth * 2
        this.canvas.height = this.stageWidth * 2

        this.ctx.scale(2,2)

        // this.wave.resize(this.stageWidth, this.stageHeight)
        this.waveGroup.resize(this.stageWidth, this.stageHeight)
        //
    }

    animate(t) {
        this.ctx.clearRect(0, 0, this.stageWidth, this.stageHeight)
        // this.wave.draw(this.ctx)
        this.waveGroup.draw(this.ctx)
        requestAnimationFrame(this.animate.bind(this))
    }

}

window.onload = () => {
    new App();
}