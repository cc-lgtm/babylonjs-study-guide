function createLoading() {
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

export const loadingUI = {
  show() {
    createLoading()
  },
  hide() {
    document.querySelector('.loading')?.remove()
  }
}
