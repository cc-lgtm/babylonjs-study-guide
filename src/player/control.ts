import {
  Scene,
  ActionManager,
  ExecuteCodeAction
} from '@babylonjs/core'
import { WaterMaterial } from '@babylonjs/materials'

// 摄像机保持在任务后上方

// w 移动
// d 人物右转
// a 人物左转
// s 冲刺
// space 跳跃
export function onKeyBord(scene: Scene): {
  [key: string]: boolean
} {
  const inputMaps = {} as { [key: string]: boolean }
  scene.actionManager = new ActionManager(scene)
  scene.actionManager.registerAction(new ExecuteCodeAction(ActionManager.OnKeyDownTrigger, (evt) => {
    inputMaps[evt.sourceEvent.key] = evt.sourceEvent.type === "keydown"
  }))
  scene.actionManager.registerAction(new ExecuteCodeAction(ActionManager.OnKeyUpTrigger, (evt) => {
    inputMaps[evt.sourceEvent.key] = evt.sourceEvent.type === "keydown"
  }))
  return inputMaps
}
