export default class Page {
  constructor(el){
    this.$el = el
  }

  launch(){ 
    // fetch("http://dev.xiaobuke.com/book/h5/detail/1671")
    //   .then(res => console.log(res))
    let script  = document.createElement("script")
    script.src = "http://dev.xiaobuke.com/book/h5/detail/1671&callback=handleResponse"
  }
}