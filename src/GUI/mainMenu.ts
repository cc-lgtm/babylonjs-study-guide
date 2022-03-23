import {
  Button,
  Rectangle,
  Image,
  AdvancedDynamicTexture,
  StackPanel,
  Control,
  TextBlock
} from 'babylonjs-gui'
import { state, STATE } from '../store'

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

function mainMenu() {
  const imageRect = new Rectangle('imageRect')
  imageRect.width = 1
  imageRect.thickness = 0

  const startbg = new Image('startbg', 'src/assets/sprites/start.jpeg')
  imageRect.addControl(startbg)

  const advancedTexture = AdvancedDynamicTexture.CreateFullscreenUI('UI')
  const UiPanel = new StackPanel()
  UiPanel.width = '100%'
  UiPanel.fontSize = '18px'
  UiPanel.top = '42%'
  UiPanel.horizontalAlignment = Control.HORIZONTAL_ALIGNMENT_RIGHT
  UiPanel.verticalAlignment = Control.VERTICAL_ALIGNMENT_CENTER
  advancedTexture.addControl(imageRect)
  advancedTexture.addControl(UiPanel)

  const title = new TextBlock("title", "夏天的节日")
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

export {
  createButton,
  mainMenu
}
