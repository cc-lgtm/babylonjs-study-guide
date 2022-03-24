import {
  Engine,
  Scene,
  UniversalCamera,
  Vector3
} from '@babylonjs/core'

export function loseScene(engine: Engine, canvas: HTMLCanvasElement): Scene {
  const scene = new Scene(engine)
  const camera = new UniversalCamera('camera', new Vector3(1, 1, 1), scene)
  camera.setTarget(Vector3.Zero())
  camera.attachControl(canvas, true)

  return scene
}