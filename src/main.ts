import {
  Engine,
  Scene,
  Camera,
  UniversalCamera,
  Vector3
} from '@babylonjs/core'
import { state, STATE, inputState } from './store'
import { start, CGScene } from './scene'
export class App {
  private canvas: HTMLCanvasElement
  private engine: Engine
  private scene: Scene
  private state: 0 | 1 | 2 | 3
  constructor() {
    this.state = STATE.START
    this.canvas = this.creatCanvas()
    this.engine = new Engine(this.canvas)
    this.scene = this.createScene()

    switch (this.state) {
      case STATE.START:
        this.scene = start(this.engine)
        break
      case STATE.CG:
        this.scene = CGScene(this.engine, this.canvas)
        break
      default:
        break
    }
  }
  createScene() {
    const scene = new Scene(this.engine)
    const camera = new UniversalCamera('camera', new Vector3(10, 10, 5), scene)
    return scene
  }
  creatCanvas() {
    const canvas = document.createElement('canvas')
    document.querySelector('#app')?.appendChild(canvas)
    return canvas
  }
  render() {
    this.engine.runRenderLoop(() => {
      this.scene.render()
    })
    window.addEventListener('resize', () => {
      this.engine.resize()
    })
  }
}
const app = new App()
app.render()
