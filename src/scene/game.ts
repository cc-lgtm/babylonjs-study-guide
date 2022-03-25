import {
  Engine,
  Vector3,
  Animation,
  Scene,
  HemisphericLight,
  SpotLight,
  DirectionalLight,
  PointLight,
  ShadowGenerator,
  CannonJSPlugin,
  AmmoJSPlugin,
  OimoJSPlugin,
  FreeCamera,
  FollowCamera
} from '@babylonjs/core'
import { Player, onKeyBord } from '../player'

export function gameScene(engine: Engine, canvas: HTMLCanvasElement): Scene {
  const scene = new Scene(engine)
  const light = new HemisphericLight('light', new Vector3(1, 1, 1), scene)

  const player = new Player(scene)
  player.mesh().then(mesh => {
    const camera = new FollowCamera('camera', new Vector3(10, 10, 11), scene, mesh)
    camera.setTarget(Vector3.Zero())
    camera.attachControl(true)
  })
  player.land()

  const inputMap = onKeyBord(scene)
  scene.onBeforeRenderObservable.add(() => {
    inputMap[' '] && player.jump()
    inputMap['w'] && player.run()
    inputMap['s'] && player.dash()
  })


  return scene
}
