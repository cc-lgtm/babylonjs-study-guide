import {
  Scene,
  Engine
} from 'babylonjs'

function createScene(engine: Engine) {
  const scene = new Scene(engine)

  return scene
}

const canvas = document.createElement('canvas')
document.querySelector('#app')!.appendChild(canvas)

const engine = new Engine(canvas)
const scene = createScene(engine)

engine.runRenderLoop(() => {
  scene.render()
})
