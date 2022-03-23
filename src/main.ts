import {
  Engine
} from 'babylonjs'
import { STATE, state } from './store'
import { mainMenuScene, CGScene } from './scene'

function creatCanvas() {
  const canvas = document.createElement('canvas')
  document.querySelector('#app')?.appendChild(canvas)
  return canvas
}
const canvas = creatCanvas()
const engine = new Engine(canvas)

const menuScene = mainMenuScene(engine, canvas)
const cgScene = CGScene(engine, canvas)

engine.runRenderLoop(() => {
  switch (state.value) {
    case STATE.START:
      menuScene.render()
      break
    case STATE.CG:
      cgScene.render()
      break
    default:
      break
  }
})
