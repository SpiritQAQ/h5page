import Page from './page'

let page = new Page(document.querySelector(".content")).launch()

fnResize()
window.onresize = function(){
  fnResize()
}
console.log(123)
function fnResize() {
  var deviceWidth = document.documentElement.clientWidth || window.innerWidth
  if (deviceWidth >= 720) {
  deviceWidth = 750
  }
  if (deviceWidth <= 320) {
  deviceWidth = 320
  }
  document.documentElement.style.fontSize = (deviceWidth / 7.5 ) + 'px'
  //这里设置的比例是100px=1rem,例如，宽度为100px时，可以直接写成1rem。
}

