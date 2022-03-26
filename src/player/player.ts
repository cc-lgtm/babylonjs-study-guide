import {
  Scene,
  SceneLoader,
  ISceneLoaderAsyncResult,
  Mesh,
  CannonJSPlugin,
  FollowCamera,
  Camera,
  Vector3,
} from '@babylonjs/core'
import '@babylonjs/loaders'
import * as cannon from 'cannon'

function playerCamera(scene: Scene, canvas: HTMLCanvasElement, target?: Mesh): Camera {
  const camera = new FollowCamera('camera', new Vector3(10, 10, 5), scene, target)
  camera.setTarget(Vector3.Zero())
  camera.lowerRadiusLimit = 10
  camera.upperRadiusLimit = 10
  camera.attachControl(true)

  return camera
}

function updateCamera(camera: Camera) {

}

export class Player {
  private scene: Scene
  private player: Promise<ISceneLoaderAsyncResult>
  constructor(scene: Scene) {
    this.scene = scene
    this.player = this.load()
  }
  private load(): Promise<ISceneLoaderAsyncResult> {
    const player = SceneLoader.ImportMeshAsync(null, 'src/assets/module/', 'player.glb', this.scene)
    const plugin = new CannonJSPlugin(false, 1, cannon)
    this.scene.enablePhysics(new Vector3(1, 1, 1), plugin)
    return player
  }
  async mesh() {
    const mesh = (await this.player).meshes[0]
    return mesh
  }
  async run() {
    const player = (await this.player).meshes[0]
    const runAnimation = (await this.player).animationGroups[4]
    runAnimation.start(false, 2, runAnimation.from, runAnimation.to, false)
    player.moveWithCollisions(player.forward.scaleInPlace(0.1))
  }
  async dash() {
    const dashAnimation = (await this.player).animationGroups[0]
    dashAnimation.start(false, 1, dashAnimation.from, dashAnimation.to, false)
  }
  async idle() {
    const idleAnimation = (await this.player).animationGroups[1]
    idleAnimation.start(true, 1, idleAnimation.from, idleAnimation.to, false)
  }
  async jump() {
    const jumpAnimation = (await this.player).animationGroups[2]
    jumpAnimation.start(false, 1, jumpAnimation.from, jumpAnimation.to, false)
  }
  async land() {
    const landAnimation = (await this.player).animationGroups[3]
    landAnimation.start(false, 0.5, landAnimation.from, landAnimation.to, false)
    setTimeout(() => this.idle(), 500)
  }
}
