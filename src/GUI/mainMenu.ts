import {
  Button,
  Rectangle,
  Image,
  AdvancedDynamicTexture,
  StackPanel,
  Control
} from 'babylonjs-gui'
import { state, STATE } from '../store'

function createButton(name: string, text: string, callback: () => void): Button {
  const button = Button.CreateSimpleButton(name, text)
  button.paddingTop = '15px'
  button.width = '150px'
  button.height = '60px'
  button.color = '#bdc3c7'
  button.background = '#2c3e50'
  button.onPointerDownObservable.add(callback)
  return button
}

function mainMenu() {
  const imageRect = new Rectangle('imageRect')
  imageRect.width = 1
  imageRect.thickness = 0

  const startbg = new Image('startbg', 'src/assets/sprites/start.jpg')
  imageRect.addControl(startbg)

  const advancedTexture = AdvancedDynamicTexture.CreateFullscreenUI('UI')
  const UiPanel = new StackPanel()
  UiPanel.width = '100%'
  UiPanel.fontSize = '18px'
  UiPanel.top = '30%'
  UiPanel.horizontalAlignment = Control.HORIZONTAL_ALIGNMENT_RIGHT
  UiPanel.verticalAlignment = Control.VERTICAL_ALIGNMENT_CENTER
  advancedTexture.addControl(imageRect)
  advancedTexture.addControl(UiPanel)

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
