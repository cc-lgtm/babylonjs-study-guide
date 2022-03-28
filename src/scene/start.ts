import {
  Button,
  Control,
  Rectangle,
  Image,
  AdvancedDynamicTexture,
  StackPanel,
  TextBlock
} from '@babylonjs/gui'
import {
  Scene,
  Engine,
  UniversalCamera,
  Vector3
} from '@babylonjs/core'
import { state, STATE } from '../store'
import { App } from '../main'

function createButton(name: string, text: string, callback: () => void): Button {
  const button = Button.CreateSimpleButton(name, text)
  button.fontFamily = "Viga"
  button.width = 0.2
  button.height = "30px"
  button.color = "white"
  button.top = "-14px"
  button.thickness = 0 // 不显示边框
  button.verticalAlignment = Control.VERTICAL_ALIGNMENT_BOTTOM
  button.onPointerDownObservable.add(callback)
  return button
}
function showLoading() {
  const div = document.createElement('div')
  div.style.width = '100%'
  div.className = 'loading'
  div.style.height = '100%'
  div.style.background = '#2980b9'
  div.innerText = '资源加载中...'
  div.style.position = 'absolute'
  div.style.top = '0'
  div.style.left = '0'
  div.style.color = '#fff'
  div.style.textAlign = 'center'
  div.style.boxSizing = 'borderBox'
  div.style.paddingTop = '25%'
  div.style.transition = 'all .3s linear'
  div.style.zIndex = '999999'
  document.querySelector('#app')?.appendChild(div)
}
function hideLoding() {
  document.querySelector('.loading')?.remove()
}

function menu(scene: Scene) {
  const imageRect = new Rectangle('imageRect')
  imageRect.width = 1
  imageRect.thickness = 0

  const startbg = new Image('startbg', 'src/assets/sprites/start.jpeg')
  imageRect.addControl(startbg)

  const advancedTexture = AdvancedDynamicTexture.CreateFullscreenUI('UI', true, scene)
  const UiPanel = new StackPanel()
  UiPanel.width = '100%'
  UiPanel.fontSize = '18px'
  UiPanel.top = '42%'
  UiPanel.horizontalAlignment = Control.HORIZONTAL_ALIGNMENT_RIGHT
  UiPanel.verticalAlignment = Control.VERTICAL_ALIGNMENT_CENTER
  advancedTexture.addControl(imageRect)
  advancedTexture.addControl(UiPanel)

  const title = new TextBlock("title", "夏日灯笼节")
  title.resizeToFit = true
  title.fontFamily = "Ceviche One"
  title.fontSize = "64px"
  title.color = "white"
  title.resizeToFit = true
  title.top = "28px"
  title.width = 0.8
  title.verticalAlignment = Control.VERTICAL_ALIGNMENT_TOP
  imageRect.addControl(title)

  const startButton = createButton('startButton', '开始游戏', () => {
    state.value = STATE.CG
    document.querySelector('canvas')?.remove()
    const app = new App()
    app.render()
  })
  const continueButton = createButton('continueButton', '继续游戏', () => {
  })
  const settingButton = createButton('settingButton', '设置', () => {
  })
  const aboutButton = createButton('aboutButton', '关于', () => {
  })
  UiPanel.addControl(startButton)
  UiPanel.addControl(continueButton)
  UiPanel.addControl(settingButton)
  UiPanel.addControl(aboutButton)
}

export function start(engine: Engine): Scene {
  const scene = new Scene(engine)
  const camera = new UniversalCamera('camera', new Vector3(10, 10, 5), scene)
  menu(scene)
  return scene
}
