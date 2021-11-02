/*
 *@className:
 *@Author: 张浩楠
 *@param:
 *@Date: 2021-11-01 18:16:46
 *@Description: 轮播图类
 */
class SlideShow {
  constructor() {
    this.index; // 图片轮播序号
    this.lock; //锁定，在图片轮播时，不可以操作换页
    this.autoplay; //自动播放定时器
    this.images; //获取轮播图片块
    this.maxIndex; //最大图片数量

    // 绑定左按钮事件
    var leftClick = document.getElementsByClassName("btn-left")[0];
    leftClick.addEventListener("click", () => {
      this.clickLeft();
    });

    // 绑定右按钮事件
    var rightClick = document.getElementsByClassName("btn-right")[0];
    rightClick.addEventListener("click", () => {
      this.clickRight();
    });

    // 绑定鼠标悬浮、离开事件
    var mainDiv = document.getElementsByClassName("shell")[0];
    mainDiv.addEventListener("mouseenter", () => {
      clearInterval(this.autoplay);
    });
    mainDiv.addEventListener("mouseleave", () => {
      clearInterval(this.autoplay);
      this.autoPlay();
    });

    // 绑定下标点击事件
    var pointer = document.getElementsByClassName("pointer");
    debugger;
    for (var i = 0; i < pointer.length; i++) {
      pointer[i].addEventListener("click", () => {
        this.clickBottom(pointer[i].id);
      });
    }

    // console.log("1111111", bodyClick, leftClick, rightClick);
  }
  /*
   *@functionName:
   *@Author: 张浩楠
   *@Date: 2021-11-01 20:36:38
   *@param in:
   *@param out:
   *@return:
   *@Description: 初始化
   */
  init() {
    this.index = 0;
    this.lock = true;
    this.autoplay = 0;
    this.images = document.querySelector(".img-list");
    this.maxIndex = 4;

    // 将第一张图片复制粘贴到最后
    var cloneFirst = this.images.firstElementChild.cloneNode();
    this.images.appendChild(cloneFirst);
  }
  /*
   *@functionName:
   *@Author: 张浩楠
   *@Date: 2021-11-01 18:59:28
   *@param in:
   *@param out:
   *@return:
   *@Description: 添加轮播图片
   */
  addPictures(src) {
    var img = document.createElement("img");
    img.src = src;
    img.className = "img";

    // 先删除最后一张图片
    var lastImg = this.images.lastElementChild;
    this.images.lastElementChild.removeChild(lastImg);

    // 添加新的图片
    this.images.appendChild(img);

    // 复制第一张图片添加到最后
    var cloneFirst = this.images.firstElementChild.cloneNode();
    this.images.appendChild(cloneFirst);

    // 添加下标圆点
    var clone = document
      .getElementById("main-pointer")
      .firstElementChild.cloneNode();
    clone.id = "p" + this.maxIndex;
    clone.className = "pointer";
    document.getElementById("main-pointer").appendChild(clone);

    // 图片最大数量++
    this.maxIndex++;
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
    // debugger;
    //  如果图片正在移动，直接退出
    if (!this.lock) return;

    // 设置图片移动过度
    this.images.style.transition = "0.5s ease";

    // 图片序号++
    this.index++;

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
    // bottomShow("right");
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
    // bottomShow("left");
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
    debugger;
    var curPos = parseInt(images.style.marginLeft);
    if (curPos === "") {
      curPos = 0;
    }
    var p = document.getElementById("main-pointer").getElementsByTagName("li");

    for (var i = 0; i < p.length; i++) {
      p[i].style.backgroundColor = "blue";
    }

    for (var i = 1; i <= p.length; i++) {
      if (id === "p" + i) {
        var targetPos = (i - 1) * -500;
        p[i - 1].style.backgroundColor = "white";
        index = i - 1;
      }
    }

    clickMove(curPos, targetPos);
  }
}

// 生成一个对象，并开始播放
var p;
window.addEventListener("DOMContentLoaded", () => {
  p = new SlideShow();
  p.init();
  p.autoPlay();
});
