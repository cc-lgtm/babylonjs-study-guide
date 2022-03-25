import {
  Scene,
  Engine,
  ArcRotateCamera,
  DirectionalLight,
  MeshBuilder,
  Mesh,
  Vector3
} from '@babylonjs/core'

export function createMesh(engine: Engine, canvas: HTMLCanvasElement): Scene {
  const scene = new Scene(engine)
  const box = MeshBuilder.CreateBox('box', {
    size: 50,
    width: 50,
    height: 50,
    depth: 50
  }, scene)
  const box1 = MeshBuilder.CreateBox('box1', {
    size: 50,
    width: 50,
    height: 50,
    depth: 50
  }, scene)
  const camera = new ArcRotateCamera('camera', Math.PI / 4, -Math.PI / 4, 1, new Vector3(1, 1, 1), scene)
  camera.setTarget(Vector3.Zero())
  camera.attachControl(canvas, true)
  const light = new DirectionalLight('light', new Vector3(1, 1, 1), scene)

  const cloneBox = box.clone('cloneBox')
  box.position.x = 60
  const instanceBox = box.createInstance('instanceBox')
  instanceBox.position.x = 60
  instanceBox.position.y = 50
  box1.position.y = 50
  const mergeBox = Mesh.MergeMeshes([box, box1])

  return scene
}
