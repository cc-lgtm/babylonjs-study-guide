import {
  Engine,
  Scene,
  Camera,
  UniversalCamera,
  Vector3
} from '@babylonjs/core'
import { state, STATE, inputState } from './store'
import { start } from './scene'
class App {
  private canvas: HTMLCanvasElement
  private engine: Engine
  private scene: Scene
  private camera: Camera
  private state: 0 | 1 | 2 | 3
  constructor() {
    this.canvas = this.creatCanvas()
    this.engine = new Engine(this.canvas)
    this.scene = start(this.engine)
    this.camera = new UniversalCamera('camera', new Vector3(10, 10, 5), this.scene)
    this.state = STATE.START
    
    this.render()
  }
  creatCanvas() {
    const canvas = document.createElement('canvas')
    document.querySelector('#app')?.appendChild(canvas)
    return canvas
  }
  render() {
    this.engine.runRenderLoop(() => {
      switch (this.state) {
        case STATE.START:
          this.scene.render()
          break
        case STATE.CG:
          this.scene.render()
          break
        default:
          break
      }
    })
    window.addEventListener('resize', () => {
      this.engine.resize()
    })
  }
}
new App()
