import {
  Scene,
  Engine,
  FollowCamera,
  MeshBuilder,
  Vector3,
  Color3,
  StandardMaterial,
  HemisphericLight
} from 'babylonjs'

export function CGScene(engine: Engine): Scene {
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
