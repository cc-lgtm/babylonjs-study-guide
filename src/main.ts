import {
  Scene,
  Engine,
  FollowCamera,
  MeshBuilder,
  UniversalCamera,
  Vector3,
  Color3,
  StandardMaterial,
  HemisphericLight
} from 'babylonjs'
import { STATE, state } from './store'
import { mainMenu } from './GUI'
import { mainBGM } from './BGM'

function createScene(engine: Engine) {
  const scene = new Scene(engine)
  const camrea = new UniversalCamera('camrea', new Vector3(1, 1, 1), scene)
  camrea.setTarget(Vector3.Zero())
  camrea.attachControl(canvas, true)

  mainMenu()
  mainBGM(scene, true)

  return scene
}

function createCGScene(engine: Engine) {
  const scene = new Scene(engine)

  const box = MeshBuilder.CreateBox('box', {
    size: 1,
    width: 1,
    height: 1,
    depth: 1
  }, scene)
  const boxMat = new StandardMaterial('boxMat', scene)
  boxMat.diffuseColor = Color3.Green()
  box.material = boxMat

  const camera = new FollowCamera('camera', new Vector3(0, 0, -10), scene, box)
  camera.setTarget(Vector3.Zero())
  camera.attachControl(true)
  const light = new HemisphericLight("light", new Vector3(1, 1, 1), scene)

  return scene
}

function creatCanvas() {
  const canvas = document.createElement('canvas')
  document.querySelector('#app')?.appendChild(canvas)
  return canvas
}

const canvas = creatCanvas()
const engine = new Engine(canvas)

const scene1 = createScene(engine)
const scene2 = createCGScene(engine)

engine.runRenderLoop(() => {
  switch (state.value) {
    case STATE.START:
      scene1.render()
      break
    case STATE.CG:
      scene2.render()
      break
    default:
      break
  }
})
