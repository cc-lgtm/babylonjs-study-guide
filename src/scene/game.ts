import {
  Engine,
  FollowCamera,
  Vector3,
  SceneLoader,
  Scene,
  ArcRotateCamera
} from '@babylonjs/core'
import '@babylonjs/loaders'

export function gameScene(engine: Engine, canvas: HTMLCanvasElement): Scene {
  const scene = new Scene(engine)
  const camera = new ArcRotateCamera('camera', 1, 1, 1, new Vector3(1, 1, 1), scene)
  camera.setTarget(Vector3.Zero())
  camera.attachControl(canvas, true)
  
  SceneLoader.ImportMeshAsync(null, 'src/assets/module/', 'player.glb', scene).then(res => {
    console.log(res)
  })

  return scene
}
