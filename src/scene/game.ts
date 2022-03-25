import {
  Engine,
  FreeCamera,
  Vector3,
  SceneLoader,
  Animation,
  Scene,
  HemisphericLight,
  SpotLight,
  DirectionalLight,
  PointLight,
  ShadowGenerator,
  CannonJSPlugin,
  AmmoJSPlugin,
  OimoJSPlugin
} from '@babylonjs/core'
import '@babylonjs/loaders'

export function gameScene(engine: Engine, canvas: HTMLCanvasElement): Scene {
  const scene = new Scene(engine)
  const camera = new FreeCamera('camera', new Vector3(100, 100, 110), scene, true)
  camera.setTarget(Vector3.Zero())
  camera.attachControl(true)
  const light = new HemisphericLight('light', new Vector3(1, 1, 1), scene)

  // const gravityVector = new Vector3(0,-9.81, 0)
  // const physicsPlugin = new CannonJSPlugin()
  // scene.enablePhysics(gravityVector, physicsPlugin)

  SceneLoader.ImportMeshAsync(null, 'src/assets/module/', 'envSetting.glb', scene).then(res => {
    // console.log(res)
  })
  SceneLoader.ImportMeshAsync(null, 'src/assets/module/', 'lantern.glb', scene).then(res => {
    // console.log(res)
  })
  SceneLoader.ImportMeshAsync(null, 'src/assets/module/', 'player.glb', scene).then(res => {
    console.log(res.animationGroups)
  })

  return scene
}
