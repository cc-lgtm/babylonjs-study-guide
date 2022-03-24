import {
  Scene,
  Engine,
  UniversalCamera,
  Vector3,
  SpriteManager,
  Sprite
} from '@babylonjs/core'
import {
  AdvancedDynamicTexture,
  Image
} from '@babylonjs/gui'
import { ref } from 'vue'
import { state, STATE } from '../store'

function createSprite(name: string, src: string, scene: Scene) {
  const spriteManagerCG = new SpriteManager(name, src, 100,
    { width: window.innerWidth / 4, height: window.innerHeight }, scene)
  const cg = new Sprite('cg1', spriteManagerCG)
  cg.playAnimation(0, 10, false, 1000)
}

export function CGScene(engine: Engine, canvas: HTMLCanvasElement): Scene {
  const scene = new Scene(engine)
  const camera = new UniversalCamera('camera', new Vector3(1, 1, 1), scene)
  camera.setTarget(Vector3.Zero())
  camera.attachControl(canvas, true)

  // const cutScene = AdvancedDynamicTexture.CreateFullscreenUI("cutscene")
  // let anims_loaded = 0

  // const beginning_anim = new Image("sparkLife", "src/assets/sprites/beginning_anim.png")
  // beginning_anim.stretch = Image.STRETCH_UNIFORM
  // beginning_anim.cellId = 0
  // beginning_anim.cellHeight = 480
  // beginning_anim.cellWidth = 480
  // beginning_anim.sourceWidth = 480
  // beginning_anim.sourceHeight = 480
  // cutScene.addControl(beginning_anim)
  // beginning_anim.onImageLoadedObservable.add(() => {
  //   anims_loaded++
  // })
  // const working_anim = new Image("sparkLife", "src/assets/sprites/working_anim.png");
  // working_anim.stretch = Image.STRETCH_UNIFORM;
  // working_anim.cellId = 0;
  // working_anim.cellHeight = 480;
  // working_anim.cellWidth = 480;
  // working_anim.sourceWidth = 480;
  // working_anim.sourceHeight = 480;
  // working_anim.isVisible = false;
  // cutScene.addControl(working_anim);
  // working_anim.onImageLoadedObservable.add(() => {
  //   anims_loaded++;
  // })
  // const dropoff_anim = new Image("sparkLife", "src/assets/sprites/dropoff_anim.png");
  // dropoff_anim.stretch = Image.STRETCH_UNIFORM;
  // dropoff_anim.cellId = 0;
  // dropoff_anim.cellHeight = 480;
  // dropoff_anim.cellWidth = 480;
  // dropoff_anim.sourceWidth = 480;
  // dropoff_anim.sourceHeight = 480;
  // dropoff_anim.isVisible = false;
  // cutScene.addControl(dropoff_anim);
  // dropoff_anim.onImageLoadedObservable.add(() => {
  //   anims_loaded++;
  // })
  // const leaving_anim = new Image("sparkLife", "src/assets/sprites/leaving_anim.png");
  // leaving_anim.stretch = Image.STRETCH_UNIFORM;
  // leaving_anim.cellId = 0;
  // leaving_anim.cellHeight = 480;
  // leaving_anim.cellWidth = 480;
  // leaving_anim.sourceWidth = 480;
  // leaving_anim.sourceHeight = 480;
  // leaving_anim.isVisible = false;
  // cutScene.addControl(leaving_anim);
  // leaving_anim.onImageLoadedObservable.add(() => {
  //   anims_loaded++;
  // })
  // const watermelon_anim = new Image("sparkLife", "src/assets/sprites/watermelon_anim.png");
  // watermelon_anim.stretch = Image.STRETCH_UNIFORM;
  // watermelon_anim.cellId = 0;
  // watermelon_anim.cellHeight = 480;
  // watermelon_anim.cellWidth = 480;
  // watermelon_anim.sourceWidth = 480;
  // watermelon_anim.sourceHeight = 480;
  // watermelon_anim.isVisible = false;
  // cutScene.addControl(watermelon_anim);
  // watermelon_anim.onImageLoadedObservable.add(() => {
  //   anims_loaded++;
  // })
  // const reading_anim = new Image("sparkLife", "src/assets/sprites/reading_anim.png");
  // reading_anim.stretch = Image.STRETCH_UNIFORM;
  // reading_anim.cellId = 0;
  // reading_anim.cellHeight = 480;
  // reading_anim.cellWidth = 480;
  // reading_anim.sourceWidth = 480;
  // reading_anim.sourceHeight = 480;
  // reading_anim.isVisible = false;
  // cutScene.addControl(reading_anim);
  // reading_anim.onImageLoadedObservable.add(() => {
  //   anims_loaded++;
  // })

  const anim = ref<number>(1)

  state.value = STATE.GAME
  // scene.onBeforeRenderObservable.add(() => {
  //   if (beginning_anim.cellId == 9) {
  //     anim.value++;
  //     beginning_anim.isVisible = false
  //     if (anim.value === 2) state.value = STATE.GAME
  //     working_anim.isVisible = true
  //   } else {
  //     beginning_anim.cellId++;
  //   }
  // })
  return scene
}
