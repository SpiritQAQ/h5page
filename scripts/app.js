import Daodu from './daodu' //导读
import scss from "../scss/app.scss"

let daodu = new Daodu(document.querySelector(".content"),"http://dev.xiaobuke.com/book/h5/detail/1671").launch()

fnResize()
window.onresize = function(){
  fnResize()
}
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

