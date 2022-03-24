import {
  Scene,
  Engine,
  UniversalCamera,
  Vector3,
  SceneLoader
} from '@babylonjs/core'
import { mainMenu } from '../GUI'
import { mainBGM } from '../BGM'

export function mainMenuScene(engine: Engine, canvas: HTMLCanvasElement): Scene {
  const scene = new Scene(engine)
  const camrea = new UniversalCamera('camrea', new Vector3(1, 1, 1), scene)
  camrea.setTarget(Vector3.Zero())
  camrea.attachControl(canvas, true)

  mainMenu()
  mainBGM(scene, true)

  return scene
}
