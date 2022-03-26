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
  SceneLoader,
  FollowCamera,
  UniversalCamera
} from '@babylonjs/core'
import '@babylonjs/loaders'
import { Player, onKeyBord } from '../player'


function loadScene(scene: Scene) {
  SceneLoader.ImportMeshAsync(null, 'src/assets/module/', 'envSetting.glb', scene).then(result => {
    const mesh = result.meshes[0]
  })
}

export function gameScene(engine: Engine, canvas: HTMLCanvasElement): Scene {
  const scene = new Scene(engine)
  const light = new HemisphericLight('light', new Vector3(1, 1, 1), scene)

  const player = new Player(scene)

  loadScene(scene)

  player.mesh().then(mesh => {
    const camera = new FollowCamera('camera', new Vector3(10, 10, 5), scene, mesh)
    camera.setTarget(Vector3.Zero())
    camera.attachControl(true)
    camera.lowerRadiusLimit = 10
    camera.upperRadiusLimit = 10
    camera.heightOffset = 10
    camera.rotationOffset = 0

    mesh.position.x = 70
    mesh.position.y = 13.44
    mesh.position.z = 135
    mesh.rotation = Vector3.Zero()
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
