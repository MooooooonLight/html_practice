/*
 *@className:
 *@Author: 张浩楠
 *@param:
 *@Date: 2021-11-01 18:16:46
 *@Description: 轮播图类
 */
class SlideShow {
  constructor(imageWidth, type) {
    this.change = false; //是否切换过
    this.lock = true; //锁定，在图片轮播时，不可以操作换页
    this.autoplay = 0; //自动播放定时器
    this.images = document.querySelector(".img-list"); //获取轮播图片块
    this.type = type;
    this.width = imageWidth;
    this.hover = false;
    this.out = false;
    this.hold = false;
    // 判断轮播模式
    if (this.type === "normal") {
      this.index = 0; // 图片轮播序号
      document.getElementsByClassName("shell")[0].style.width =
        this.width + "px"; // 设置窗口大小
    } else {
      this.index = 1; // 图片轮播序号
      document.getElementsByClassName("shell")[0].style.width =
        3 * this.width + "px"; // 设置窗口大小
    }

    // 绑定获取图片事件
    const img = function () {
      this.getImageList();
    }.bind(this);

    var imgList = document.getElementById("input");
    imgList.onchange = img;
  }
  /*
   *@functionName:
   *@Author: 张浩楠
   *@Date: 2021-11-02 20:23:36
   *@param in:
   *@param out:
   *@return:
   *@Description: 初始化
   */
  initial() {
    // 设置下标圆点显示
    let pointer = document.getElementsByClassName("pointer");
    for (let i = pointer.length + 1; i <= this.maxIndex; i++) {
      let clone = pointer[0].cloneNode();
      clone.id = "p" + i;
      document.getElementById("main-pointer").appendChild(clone);
    }

    // 绑定切换轮播样式事件
    document.getElementById("hover").addEventListener("click", () => {
      this.hoverChange();
    });
    document.getElementById("out").addEventListener("click", () => {
      this.outChange();
    });
    document.getElementById("hold").addEventListener("click", () => {
      this.holdChange();
    });

    if (this.type === "normal") {
      // 将第一张图片复制粘贴到最后
      var cloneFirst = this.images.firstElementChild.cloneNode();
      this.images.appendChild(cloneFirst);

      // 绑定左按钮事件
      const left = function () {
        this.clickLeft();
      }.bind(this);

      var rightClick = document.getElementsByClassName("btn-left")[0];
      rightClick.onclick = left;

      // 绑定右按钮事件
      const right = function () {
        this.clickRight();
      }.bind(this);

      var rightClick = document.getElementsByClassName("btn-right")[0];
      rightClick.onclick = right;

      // 绑定鼠标悬浮、离开事件
      const mouseIn = function () {
        clearInterval(this.autoplay);
      }.bind(this);
      var mainDiv = document.getElementsByClassName("shell")[0];
      mainDiv.onmouseenter;
      mainDiv.addEventListener("mouseleave", () => {
        clearInterval(this.autoplay);
        this.autoPlay();
      });
      // 绑定下标点击事件
      const love = function (event) {
        const id = event.target.id;
        this.clickBottom(id);
      }.bind(this);
      const pointer = document.getElementsByClassName("pointer");
      for (let i = 0; i < pointer.length; i++) {
        pointer[i].onclick = love;
      }

      this.autoPlay();
    } else {
      // 绑定下标点击事件
      const love = function (event) {
        const id = event.target.id;
        this.clickBottom(id);
      }.bind(this);
      const pointer = document.getElementsByClassName("pointer");
      for (let i = 0; i < pointer.length; i++) {
        pointer[i].onclick = love;
      }

      this.cardChange();
    }
  }
  /*
   *@functionName:
   *@Author: 张浩楠
   *@Date: 2021-11-01 20:40:43
   *@param in:
   *@param out:
   *@return:
   *@Description: 右按钮点击事件
   */
  clickRight() {
    //  如果图片正在移动，直接退出
    if (!this.lock) return;
    // 设置图片移动过度
    this.images.style.transition = "0.5s ease";
    // 图片序号++
    this.index++;
    debugger;

    //如果到最后一张图片，则回到第一张
    if (this.index === this.maxIndex) {
      setTimeout(() => {
        this.images.style.marginLeft = 0;
        this.index = 0;
        this.images.style.transition = "none";
      }, 500);
    }

    this.images.style.marginLeft = -this.index * 500 + "px";

    // 上锁，500毫秒之后打开
    this.lock = false;
    setTimeout(() => {
      this.lock = true;
    }, 500);

    // 移动标识
    this.bottomShow("right");
  }
  /*
   *@functionName:
   *@Author: 张浩楠
   *@Date: 2021-11-01 21:10:06
   *@param in:
   *@param out:
   *@return:
   *@Description: 左按钮点击事件
   */
  clickLeft() {
    //  如果图片正在移动，直接退出
    if (!this.lock) return;

    // 设置图片移动过度
    this.images.style.transition = "0.5s ease";

    //如果在第一张图片，则回到最后一张
    if (this.index === 0) {
      this.images.style.marginLeft = -this.maxIndex * 500 + "px";
      this.images.style.transition = "none";
      setTimeout(() => {
        this.images.style.transition = "0.5s ease";
        this.index = this.maxIndex - 1;
        this.images.style.marginLeft = -this.index * 500 + "px";
      }, 0);
    } else {
      this.index--;
      this.images.style.marginLeft = -this.index * 500 + "px";
    }

    // 上锁，500毫秒之后打开
    this.lock = false;
    setTimeout(() => {
      this.lock = true;
    }, 500);

    // 移动标识
    this.bottomShow("left");
  }
  /*
   *@functionName:
   *@Author: 张浩楠
   *@Date: 2021-11-02 15:29:47
   *@param in:
   *@param out:
   *@return:
   *@Description: 自动播放
   */
  autoPlay() {
    this.autoplay = setInterval(() => {
      this.clickRight();
    }, 2000);
  }
  /*
   *@functionName:
   *@Author: 张浩楠
   *@Date: 2021-11-02 17:10:58
   *@param in:
   *@param out:
   *@return:
   *@Description: 下标点击事件
   */
  clickBottom(id) {
    let curPos = parseInt(this.images.style.marginLeft);

    if (this.images.style.marginLeft === "") {
      curPos = 0;
    }

    if (this.type === "normal") {
      var p = document
        .getElementById("main-pointer")
        .getElementsByTagName("li");

      for (var i = 0; i < p.length; i++) {
        p[i].style.backgroundColor = "blue";
      }

      for (var i = 1; i <= p.length; i++) {
        if (id === "p" + i) {
          var targetPos = (i - 1) * -this.width;
          p[i - 1].style.backgroundColor = "white";
          this.index = i - 1;
        }
      }
    } else {
      var p = document
        .getElementById("main-pointer")
        .getElementsByTagName("li");

      for (var i = 0; i < p.length; i++) {
        p[i].style.backgroundColor = "blue";
      }

      for (var i = 1; i <= p.length; i++) {
        if (id === "p" + i) {
          var targetPos = i * -this.width;
          p[i - 1].style.backgroundColor = "white";
          this.index = i - 1;
        }
      }
    }

    this.clickMove(curPos, targetPos, id);
  }
  /*
   *@functionName:
   *@Author: 张浩楠
   *@Date: 2021-11-02 18:08:17
   *@param in:
   *@param out:
   *@return:
   *@Description: 点击下标移动函数
   */
  clickMove(curPos, tarPos, id) {
    clearInterval(this.autoplay);

    var speed;
    var _curPos = curPos;
    var _tarPos = tarPos;

    if (_curPos > _tarPos) {
      speed = -20;
    } else {
      speed = 20;
    }
    this.autoplay = setInterval(() => {
      if (_curPos - _tarPos === 0) {
        clearInterval(this.autoplay);
      } else {
        _curPos += speed;
        this.images.style.transition = "0.1s linear";

        this.images.style.marginLeft = _curPos + "px";
      }

      if (_curPos === _tarPos) {
        clearInterval(this.autoplay);
      }
    }, 0);

    if (this.type === "card") {
      // 设置上一张和下一张图片变小
      let cur = parseInt(id.substr(1, 1));
      let last = cur - 1;
      let next = cur + 1;
      debugger;
      let imageList = document.getElementsByClassName("img");
      for (let i = 0; i < imageList.length; i++) {
        imageList[i].style.transform = "scaleY(1)";
      }
    }
  }
  /*
   *@functionName:
   *@Author: 张浩楠
   *@Date: 2021-11-2 18:12:59
   *@param in:
   *@param out:
   *@return:
   *@Description: 设置下标显示
   */
  bottomShow(direction) {
    var list = document.getElementById("main-pointer");

    list = list.getElementsByTagName("li");
    if (this.type === "normal") {
      for (var i = 0; i < list.length; i++) {
        if (
          this.images.style.marginLeft ===
          this.maxIndex * -this.width + "px"
        ) {
          if (direction === "right") {
            list[0].style.backgroundColor = "white";
          } else {
            list[0].style.backgroundColor = "blue";
            list[this.maxIndex - 1].style.backgroundColor = "white";
            continue;
          }
        }
        if (this.images.style.marginLeft === i * -this.width + "px") {
          list[i].style.backgroundColor = "white";
        } else {
          list[i].style.backgroundColor = "blue";
        }
      }
    } else {
      for (var i = 0; i < list.length; i++) {
        if (
          this.images.style.marginLeft ===
          (this.maxIndex - 2) * -this.width + "px"
        ) {
          if (direction === "right") {
            list[0].style.backgroundColor = "white";
          } else {
            debugger;
            list[0].style.backgroundColor = "blue";
            list[this.maxIndex - 4].style.backgroundColor = "white";
            continue;
          }
        }

        if (this.images.style.marginLeft === (i + 1) * -this.width + "px") {
          list[i].style.backgroundColor = "white";
        } else {
          list[i].style.backgroundColor = "blue";
        }
      }
    }
  }
  /*
   *@functionName:
   *@Author: 张浩楠
   *@Date: 2021-11-02 20:35:02
   *@param in:
   *@param out:
   *@return:
   *@Description: 悬浮切换
   */
  hoverChange() {
    const pointer = document.getElementsByClassName("pointer");

    const love = function (event) {
      const id = event.target.id;
      this.clickBottom(id);
    }.bind(this);

    if (this.hover) {
      for (let i = 0; i < pointer.length; i++) {
        let id = pointer[i].id;
        pointer[i].onmouseenter = "";
        pointer[i].onclick = love;
      }
      this.hover = false;
    } else {
      for (let i = 0; i < pointer.length; i++) {
        let id = pointer[i].id;
        pointer[i].onclick = "";
        pointer[i].onmouseenter = love;
      }
      this.hover = true;
    }
  }
  /*
   *@functionName:
   *@Author: 张浩楠
   *@Date: 2021-11-03 13:35:30
   *@param in:
   *@param out:
   *@return:
   *@Description: 下标显示在外
   */
  outChange() {
    const out = document.getElementById("main-pointer");
    if (this.out) {
      out.style.bottom = "50px";
      this.out = false;
    } else {
      out.style.bottom = "-50px";
      this.out = true;
    }
  }
  /*
   *@functionName:
   *@Author: 张浩楠
   *@Date: 2021-11-03 14:27:19
   *@param in:
   *@param out:
   *@return:
   *@Description: 换页常驻
   */
  holdChange() {
    if (this.hold) {
      document.getElementsByClassName("btn-left")[0].style.display = "none";
      document.getElementsByClassName("btn-right")[0].style.display = "none";
      this.hold = false;
    } else {
      document.getElementsByClassName("btn-left")[0].style.display = "block";
      document.getElementsByClassName("btn-right")[0].style.display = "block";
      this.hold = true;
    }
  }
  /*
   *@functionName:
   *@Author: 张浩楠
   *@Date: 2021-11-03 15:11:04
   *@param in:
   *@param out:
   *@return:
   *@Description: 卡片化
   */
  cardChange() {
    // 添加图片
    let cloneFirst = this.images.firstElementChild.cloneNode();
    this.images.appendChild(cloneFirst);
    let clone = this.images.getElementsByClassName("img")[1].cloneNode();
    this.images.appendChild(clone);
    this.maxIndex++;
    clone = this.images
      .getElementsByClassName("img")
      [this.maxIndex - 2].cloneNode();
    this.images.insertBefore(clone, this.images.firstElementChild);
    this.maxIndex++;
    clone = this.images
      .getElementsByClassName("img")
      [this.maxIndex - 3].cloneNode();
    this.images.insertBefore(clone, this.images.firstElementChild);
    this.maxIndex++;

    // 设置起始位置，图片序号
    this.images.style.marginLeft = -this.width + "px";
    this.images.style.transition = "0s ease";

    this.images.getElementsByClassName("img")[1].style.transform =
      "scaleY(0.8)";
    this.images.getElementsByClassName("img")[3].style.transform =
      "scaleY(0.8)";

    // 更改绑定事件
    this.changeBind();

    this.change = true;
  }
  /*
   *@functionName:
   *@Author: 张浩楠
   *@Date: 2021-11-03 20:15:21
   *@param in:
   *@param out:
   *@return:
   *@Description: 更改事件绑定
   */
  changeBind() {
    // 绑定左按钮事件
    const left = function () {
      this.cardLeft();
    }.bind(this);

    var rightClick = document.getElementsByClassName("btn-left")[0];
    rightClick.onclick = left;

    // 绑定右按钮事件
    const right = function () {
      this.cardRight();
    }.bind(this);

    var rightClick = document.getElementsByClassName("btn-right")[0];
    rightClick.onclick = right;

    // 绑定鼠标悬浮、离开事件
    const mouseIn = function () {
      clearInterval(this.autoplay);
    }.bind(this);

    const mouseOut = function () {
      this.cardAuto();
    }.bind(this);
    var mainDiv = document.getElementsByClassName("shell")[0];
    mainDiv.onmouseenter = mouseIn;

    mainDiv.onmouseleave = mouseOut;

    // 开始卡片化轮播
    this.cardAuto();
  }
  /*
   *@functionName:
   *@Author: 张浩楠
   *@Date: 2021-11-03 17:09:19
   *@param in:
   *@param out:
   *@return:
   *@Description: 卡片化图片右移
   */
  cardRight() {
    let imageList = this.images.getElementsByClassName("img");

    //  如果图片正在移动，直接退出
    if (!this.lock) return;
    // 设置图片移动过度
    this.images.style.transition = "0.5s ease";
    // 图片序号++
    this.index++;

    //如果到倒数第三张图片，则回到第二张
    if (this.index === this.maxIndex - 2) {
      setTimeout(() => {
        this.images.style.marginLeft = "-500px";
        this.index = 1;
        imageList[this.index + 1].style.transform = "scaleY(1)";
        this.images.style.transition = "none";
      }, 500);
    }

    this.images.style.marginLeft = -this.index * 500 + "px";

    // 设置上一张和下一张图片变小
    for (let i = 0; i < imageList.length; i++) {
      if (i === this.index + 1) {
        imageList[i].style.transform = "scaleY(1)";
      } else {
        imageList[i].style.transform = "scaleY(0.8)";
      }
    }

    // 上锁，500毫秒之后打开
    this.lock = false;
    setTimeout(() => {
      this.lock = true;
    }, 500);

    // 移动标识
    this.bottomShow("right");
  }
  /*
   *@functionName:
   *@Author: 张浩楠
   *@Date: 2021-11-03 20:38:18
   *@param in:
   *@param out:
   *@return:
   *@Description: 卡片化左移
   */
  cardLeft() {
    //  如果图片正在移动，直接退出
    if (!this.lock) return;

    let imageList = this.images.getElementsByClassName("img");

    // 设置图片移动过度
    this.images.style.transition = "0.5s ease";

    //如果在第一张图片，则回到倒数第三张
    if (this.index === 1) {
      this.images.style.marginLeft = -(this.maxIndex - 2) * 500 + "px";
      this.images.style.transition = "none";
      setTimeout(() => {
        this.images.style.transition = "0.5s ease";
        this.index = this.maxIndex - 3;
        this.images.style.marginLeft = -this.index * 500 + "px";
        imageList[this.index + 1].style.transform = "scaleY(1)";
      }, 0);
    } else {
      this.index--;
      this.images.style.marginLeft = -this.index * 500 + "px";
    }

    // 设置上一张和下一张图片变小
    for (let i = 0; i < imageList.length; i++) {
      if (i === this.index + 1) {
        imageList[i].style.transform = "scaleY(1)";
      } else {
        imageList[i].style.transform = "scaleY(0.8)";
      }
    }

    // 上锁，500毫秒之后打开
    this.lock = false;
    setTimeout(() => {
      this.lock = true;
    }, 500);

    // 移动标识
    this.bottomShow("left");
  }
  /*
   *@functionName:
   *@Author: 张浩楠
   *@Date: 2021-11-03 21:56:21
   *@param in:
   *@param out:
   *@return:
   *@Description: 卡片式自动播放
   */
  cardAuto() {
    clearInterval(this.autoplay);
    this.autoplay = setInterval(() => {
      this.cardRight();
    }, 2000);
  }
  /*
   *@functionName:
   *@Author: 张浩楠
   *@Date: 2021-11-04 20:57:51
   *@param in:
   *@param out:
   *@return:
   *@Description: 获取图片
   */
  getImageList() {
    let file = document.getElementById("input").files;

    // 图片设置进DOM
    for (let i = 0; i < file.length; i++) {
      let img = document.createElement("img");
      img.className = "img";
      img.src = URL.createObjectURL(file[i]);
      this.images.appendChild(img);
    }
    this.maxIndex = this.images.getElementsByTagName("img").length; //最大图片数量

    this.initial();
  }
}

// 生成一个对象，加入图片，设置模式并开始播放
let p;
window.addEventListener("DOMContentLoaded", () => {
  p = new SlideShow(500, "normal");
});


const app=Vue.createApp({
  data () {
    return {
      
    }
  }
})
