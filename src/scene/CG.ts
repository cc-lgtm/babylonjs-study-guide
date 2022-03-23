import { onMounted } from 'vue'
import {
  Scene,
  Engine,
  UniversalCamera,
  Vector3,
  SpriteManager,
  Sprite
} from 'babylonjs'

let index = 0
function createSprite(name: string, src: string, scene: Scene) {
  const spriteManagerCG = new SpriteManager(name, src, 100,
  {width: window.innerWidth / 4, height: window.innerHeight}, scene)
  const cg = new Sprite('cg1', spriteManagerCG)
  cg.playAnimation(0, 10, false, 1000)
}

export function CGScene(engine: Engine, canvas: HTMLCanvasElement): Scene {
  const scene = new Scene(engine)
  const camera = new UniversalCamera('camera', new Vector3(1, 1, 1), scene)
  camera.setTarget(Vector3.Zero())
  camera.attachControl(canvas, true)

  const funcArr = [
    () => createSprite('cg', 'src/assets/sprites/beginning_anim.png', scene),
    () => createSprite('cg', 'src/assets/sprites/dropoff_anim.png', scene),
    () => createSprite('cg', 'src/assets/sprites/working_anim.png', scene),
    () => createSprite('cg', 'src/assets/sprites/leaving_anim.png', scene),
    () => createSprite('cg', 'src/assets/sprites/watermelon_anim.png', scene),
    () => createSprite('cg', 'src/assets/sprites/reading_anim.png', scene)
  ]

  createSprite('cg', 'src/assets/sprites/beginning_anim.png', scene)

  return scene
}