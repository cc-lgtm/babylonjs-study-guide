import {
  Scene,
  Sound
} from 'babylonjs'

function mainBGM(scene: Scene, status: boolean) {
  const sound = new Sound('sound', 'src/assets/sound/mainSound.mp3', scene, null, {
    loop: true,
    autoplay: true
  })
  status ? sound.play() : sound.stop()
}

export {
  mainBGM
}
