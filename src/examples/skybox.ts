import {
  MeshBuilder,
  StandardMaterial,
  Scene,
  Engine,
  ArcRotateCamera,
  DirectionalLight,
  Vector3,
  CubeTexture,
  Texture,
  Color3
} from '@babylonjs/core'

export function createSkyBox(engine: Engine, canvas: HTMLCanvasElement): Scene {
  const scene = new Scene(engine)
  const camera = new ArcRotateCamera('camera', Math.PI / 4, -Math.PI / 4, 1, new Vector3(1, 1, 1), scene)
  camera.setTarget(Vector3.Zero())
  camera.attachControl(canvas, true)
  const light = new DirectionalLight('light', new Vector3(1, 1, 1), scene)

  const skybox = MeshBuilder.CreateBox('skyBox', {
    size: 150,
    width: 150,
    height: 150,
    depth: 150
  }, scene)
  const skyboxMaterial = new StandardMaterial('skyBox', scene)
  skyboxMaterial.backFaceCulling = true
  skyboxMaterial.reflectionTexture = new CubeTexture('src/examples/assets/skybox/skybox', scene)
  skyboxMaterial.reflectionTexture.coordinatesMode = Texture.SKYBOX_MODE
  skyboxMaterial.diffuseColor = new Color3(0, 0, 0)
  skyboxMaterial.specularColor = new Color3(0, 0, 0)
  skybox.material = skyboxMaterial

  return scene
}
