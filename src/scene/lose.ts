import {
  Engine,
  Scene
} from 'babylonjs'

export function loseScene(engine: Engine, canvas: HTMLCanvasElement): Scene {
  const scene = new Scene(engine)

  return scene
}