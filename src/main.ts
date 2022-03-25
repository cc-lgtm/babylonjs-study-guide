import {
  Engine
} from '@babylonjs/core'
import { STATE, state } from './store'
import { mainMenuScene, CGScene, gameScene, loseScene } from './scene'
import { createSkyBox } from './examples/skybox'
import { createMesh } from './examples/mesh'
import { createParticle } from './examples/particle'

function creatCanvas() {
  const canvas = document.createElement('canvas')
  document.querySelector('#app')?.appendChild(canvas)
  return canvas
}
const canvas = creatCanvas()
const engine = new Engine(canvas)

const menuScene = mainMenuScene(engine, canvas)
const cgScene = CGScene(engine, canvas)
const lose_scene = loseScene(engine, canvas)
const game_scene = gameScene(engine, canvas)

engine.runRenderLoop(async () => {
  switch (state.value) {
    case STATE.START:
      menuScene.render()
      break
    case STATE.CG:
      cgScene.render()
      break
    case STATE.GAME:
      game_scene.render()
      break
    case STATE.LOSE:
      lose_scene.render()
    default:
      break
  }
})
