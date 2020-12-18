import {  Wave } from "./wave.js";

export class WaveGroup {
    constructor(opacity, waveOfNumber, colors) {
        this.opacity = opacity
        this.waves = []
        this.waveOfNumber = waveOfNumber
        this.colors = ['#c353e4', '#d79ee8', '#e8dbec']
        console.log("##2")
    }

    resize(stageWidth, stageHeight) {
        console.log("##3")
        this.init(stageWidth, stageHeight)

    }

    init(stageWidth, stageHeight) {
        for (let i = 0; i<this.waveOfNumber; i++) {
            console.log("##4")
            this.waves[i] = new Wave(this.opacity, this.colors[i])
            this.waves[i].resize(stageWidth, stageHeight)
        }
    }

    draw(ctx) {
        for (let i = 0; i<this.waveOfNumber; i++) {
            this.waves[i].draw(ctx, this.colors[i])
        }
    }
}