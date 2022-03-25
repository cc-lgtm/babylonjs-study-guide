import { ref, reactive } from 'vue'

enum STATE { START = 0, CG = 1, GAME = 2, LOSE = 3 }
const state = ref<number>(0)
const inputState = reactive({
  RUN: false,
  DASH: false,
  JUMP: false,
  IDLE: false
})

export {
  STATE,
  state,
  inputState
}
