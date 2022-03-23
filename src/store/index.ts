import { ref } from 'vue'

enum STATE { START = 0, CG = 1 }
const state = ref<number>(0)

export {
  STATE,
  state
}
