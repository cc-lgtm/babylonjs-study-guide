import {
  Engine
} from 'babylonjs'
import { STATE, state } from './store'
import { mainMenuScene, CGScene, gameScene, loseScene } from './scene'

function creatCanvas() {
  const canvas = document.createElement('canvas')
  document.querySelector('#app')?.appendChild(canvas)
  return canvas
}
const canvas = creatCanvas()
const engine = new Engine(canvas)

const menuScene = mainMenuScene(engine, canvas)
const cgScene = CGScene(engine, canvas)
const game_scene = gameScene(engine, canvas)
const lose_scene = loseScene(engine, canvas)

engine.runRenderLoop(() => {
  switch (state.value) {
    case STATE.START:
      menuScene.render()
      break
    case STATE.CG:
      cgScene.render()
      break
    case STATE.GAME:
      game_scene.render()
    case STATE.LOSE:
      lose_scene.render()
    default:
      break
  }
})
