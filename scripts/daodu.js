import star1 from "../images/star1.png"
import star2 from "../images/star2.png"
import axios from "axios"

export default class Daodu {
  constructor(el,URL){
    this.$el = el
    this.$head = document.querySelector(".content-head")
    this.$contents = document.querySelector(".content-list")
    this.$info = document.querySelector(".more-info")
    this.data = []
    this.URL = URL
  }

  // getData(){  //静态数据测试
  //   this.data = {
  //       "bookDetail": {
  //         "recommend": "1.这是一本非常有创意的玩具书。作者设计了一种巧妙面具方式，让宝贝可以赶走恶梦中的怪物。\r\n2.绿色大怪物通过镂空方式，与形状、色彩形成递减变化，猜猜都变成了哪些造型呢？\r\n",
  //         "reviews": "是谁，有一个蓝绿色的长鼻子、白色尖牙和黄色的大眼睛？是绿色大怪物！但是别害怕，一页页翻开这本洞洞书，看看它是什么模样？只要继续翻页，它就一点点地消失啦！",
  //         "authorDetail": "爱德华•恩贝尔利，美国艺术家、插画家，以童书而闻名，他的作品曾获得凯迪克奖。他喜欢用基本的线条、形状和色彩，进行着貌似简单的组合，变幻出各种神奇的图像，如作品《奇妙动物透视书》《会说话的脸》等。",
  //         "theme": "万圣之夜",
  //         "themeText": "每年11月1日是西方传统的万圣节，这一天孩子们会装扮鬼怪挨家挨户，去敲门、要糖果、会捣蛋。为了让孩子能感受这一独特的节日气氛，通过本周的“万圣之夜”绘本主题，让孩子了解西方传统节日“万圣节”的由来，体验不同文化习俗，拓展其世界观。",
  //         "guide": "1.这些怪物是儿童图书中常见的形象，形体特征怪异,面目表情狰狞。其实，它还有更深层的心理内涵，代表宝贝内心某种恐惧或紧张情绪。\r\n2.如何借助绘本，帮助宝贝克服并消除恐惧，使内心变得强大起来呢？父母可带领宝贝共读，只有认识了怪物和自己的心情，才能更好地战胜心中的恐惧感。\r\n",
  //         "guidePic": "https://xiaobuke.oss-cn-beijing.aliyuncs.com/file/47c6ea65-3d36-476f-b7a8-6166d1d84702.jpg",
  //         "paint": "绘本采用了镂空的手法，用黑色作为背景，巧妙用简单颜色和图形，把怪物的五官分割开来。宝贝，你在快速地翻动画面，居然发现怪物逐渐从你眼前消失了！其实，你打败了怪物，它也没这么可怕！",
  //         "paintPic": "https://xiaobuke.oss-cn-beijing.aliyuncs.com/file/f5aab540-ceb6-4273-aed0-be4a17d56010.jpg",
  //         "story": "宝贝，你看到了什么？这是怪物圆圆的眼睛，它在盯着你呢，然后又走开了。父母可借助本书对宝贝进行语言启蒙，引导宝贝观察并描述怪物的五官。如尖尖的牙齿、绿色的长鼻子等，给宝贝带来一次视觉上的奇妙之旅！",
  //         "storyPic": "https://xiaobuke.oss-cn-beijing.aliyuncs.com/file/28ca2d7b-feac-49a4-a772-bdcacd65e44c.jpg",
  //         "family": "在生活中，宝贝难免会遇到挫折，如摔跤、磕碰等情况，父母要保持镇定，表情不要过于紧张，引导宝贝自己勇敢克服困难。尝试一下，父母把镂空的画面放在脸上，互动做鬼脸。",
  //         "familyPic": "https://xiaobuke.oss-cn-beijing.aliyuncs.com/file/efc8e639-15f8-4a34-80b5-2308e23768f0.jpg",
  //         "interact": "“贴五官”任务：亲子共读完绘本，你也想自己做一个怪物吗？\r\n1.\t父母和宝贝一起，用一个废旧光盘做怪物的脸。\r\n2.\t让宝贝涂上喜欢的颜色，再用彩色卡纸剪出怪物的五官。\r\n3.\t引导孩子贴五官，自己设计一个可爱的怪物。\r\n",
  //         "interactPic": "https://xiaobuke.oss-cn-beijing.aliyuncs.com/file/a6507ee0-b7a3-481e-9248-a1f17906ee7e.jpg",
  //         "author": "爱德华.恩贝尔利",
  //         "painter": "爱德华.恩贝尔利",
  //         "others": "余治莹",
  //         "publisher": "河北教育出版社",
  //         "isbn": "9787543473652",
  //         "series": "启发精选世界优秀畅销绘本"
  //       }
  //   }
  //   this.bookDetail = this.data.bookDetail 
  //   this.chuliData(this.bookDetail)

  // }
  chuliData(books){
    Object.keys(books).forEach((key)=>{
      // console.log(key + books[key])
      var reg = new RegExp("\r\n", "g")
      books[key] = books[key].replace(reg ,"</br>")  
    })
  }

  launch(){   //开始
    // fetch(this.URL)
    //   .then(res => res.json())
    //   // .then(data => this.data = data)
    //   // .then(data => this.data = data.data)
    //   .then(data => this.bookDetail = data.data.bookDetail)
    //   .then(()=>this.render())
    // // this.getData()
    // return this
    // console.log(this.URL)
    //以上是fetch，若兼容性有问题使用axios
    axios.get(this.URL)
      .then(res => this.bookDetail = res.data.data.bookDetail)
      .then(()=>this.render())
      .catch(err => console.log(err))
  }

  render(){
    this.chuliData(this.bookDetail)
    this.renderContentHeader()
    this.renderContents()
    // this.renderInfo()
  }

  renderContentHeader(){
    this.$head.querySelector(".content-header").innerHTML = 
    `<h3>主题阅读：${this.bookDetail.theme}
      <img class="star1" src="${star1}" alt="">
      <img class="star2" src="${star2}" alt="">
    </h3> 
    `
    this.$head.querySelector(".header-intro").innerHTML =
    `
    <p>${this.bookDetail.themeText}</p>
    `
  }
  renderContents(){
    this.$contents.innerHTML = 
    `
    <div class="content-header">
        <h3>专家导读
          <img class="star1" src="${star1}" alt="">
          <img class="star2" src="${star2}" alt="">   
        </h3>
    </div>
    <div class="content-item">
      <div class="content-item-header">
        <h4>阅前准备</h4>
        <div class="number-ball">
          <div class="number">1</div>
        </div>
        <div class="underdash"></div>
      </div>
      <div class="content-item-imgbox">
        <img src="${this.bookDetail.guidePic}" alt="">
      </div>
      <div class="content-item-p">
      <p>${this.bookDetail.guide}</p>
      </div>
    </div>

    <div class="content-item">
      <div class="content-item-header">
        <h4>插画构图</h4>
        <div class="number-ball">
          <div class="number">2</div>
        </div>
        <div class="underdash"></div>
      </div>
      <div class="content-item-imgbox">
        <img src="${this.bookDetail.paintPic}" alt="">
      </div>
      <div class="content-item-p">
        <p>${this.bookDetail.paint}</p>
      </div>
    </div>  
    
    <div class="content-item">
      <div class="content-item-header">
        <h4>故事情节</h4>
        <div class="number-ball">
          <div class="number">3</div>
        </div>
      <div class="underdash"></div>
    </div>
    <div class="content-item-imgbox">
      <img src="${this.bookDetail.storyPic}" alt="">
    </div>
    <div class="content-item-p">
    <p>${this.bookDetail.story}</p>
    </div> 
    </div>
    <div class="content-item">
      <div class="content-item-header">
        <h4>家庭教育</h4>
        <div class="number-ball">
          <div class="number">4</div>
        </div>
      <div class="underdash"></div>
    </div>
    <div class="content-item-imgbox">
      <img src="${this.bookDetail.familyPic}" alt="">
    </div>
    <div class="content-item-p">
    <p>${this.bookDetail.family}</p>
    </div> 
    </div>
       
    
      <div class="content-header qinzi">
        <h3>亲子互动
          <img class="star1" src="${star1}" alt="">
          <img class="star2" src="${star2}" alt="">
        </h3>  
      </div>
      <div class="header-intro">
        <div class="content-item-imgbox">
          <img src="${this.bookDetail.interactPic}" alt="">
        </div>
        <p>${this.bookDetail.interact}</p>
      </div>
    `
  }
  renderInfo(){
    this.$info.querySelector(".book-info").innerHTML = 
    `
    <div class="info-header">更多图书信息</div>
    <ul>
      <li>
        <div class="column1">作者：</div>
        <div class="column2">${this.bookDetail.author}</div>
      </li>
      <li>
        <div class="column1">绘者：</div>
        <div class="column2">asdasdas</div>
      </li>
      <li>
        <div class="column1">译者：</div>
        <div class="column2"></div>
      </li>
      <li>
        <div class="column1">出版社：</div>
        <div class="column2"></div>
      </li>
      <li>
        <div class="column1"></div>
        <div class="column2"></div>
      </li>
      <li>
        <div class="column1"></div>
        <div class="column2"></div>
      </li>
    </ul>
    `
  }
}