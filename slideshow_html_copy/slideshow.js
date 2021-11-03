/*
 *@className:
 *@Author: 张浩楠
 *@param:
 *@Date: 2021-11-01 18:16:46
 *@Description: 轮播图类
 */
class SlideShow {
  constructor() {
    // 初始化成员变量
    this.index = 0; // 图片轮播序号
    this.lock = true; //锁定，在图片轮播时，不可以操作换页
    this.autoplay = 0; //自动播放定时器
    this.images = document.querySelector(".img-list"); //获取轮播图片块
    this.maxIndex = 4; //最大图片数量

    this.initial();
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
      // let id = pointer[i].id;
      // pointer[i].addEventListener("click", love);
      pointer[i].onclick = love;
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
    document.getElementById("card").addEventListener("click", () => {
      this.cardChange();
    });
    document.getElementById("vertical").addEventListener("click", () => {
      this.verticalChange();
    });
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
    debugger;
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
    var p = document.getElementById("main-pointer").getElementsByTagName("li");

    for (var i = 0; i < p.length; i++) {
      p[i].style.backgroundColor = "blue";
    }

    for (var i = 1; i <= p.length; i++) {
      if (id === "p" + i) {
        var targetPos = (i - 1) * -500;
        p[i - 1].style.backgroundColor = "white";
        this.index = i - 1;
      }
    }

    this.clickMove(curPos, targetPos);
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
  clickMove(curPos, tarPos) {
    clearInterval(this.autoplay);

    var speed;
    var _curPos = curPos;
    var _tarPos = tarPos;

    if (_curPos > _tarPos) {
      speed = -20;
    } else {
      speed = 20;
    }
    debugger;
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

    for (var i = 0; i < list.length; i++) {
      if (this.images.style.marginLeft === this.maxIndex * -500 + "px") {
        if (direction === "right") {
          list[0].style.backgroundColor = "white";
        } else {
          list[0].style.backgroundColor = "blue";
          list[this.maxIndex - 1].style.backgroundColor = "white";
          continue;
        }
      }
      if (this.images.style.marginLeft === i * -500 + "px") {
        list[i].style.backgroundColor = "white";
      } else {
        list[i].style.backgroundColor = "blue";
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
    // 移除点击事件，添加悬浮事件
    const pointer = document.getElementsByClassName("pointer");

    const love = function (event) {
      const id = event.target.id;
      this.clickBottom(id);
    }.bind(this);

    for (let i = 0; i < pointer.length; i++) {
      let id = pointer[i].id;
      pointer[i].onclick = "";
      pointer[i].onmouseenter = love;
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
    debugger;
    const out = document.getElementById("main-pointer");
    out.style.bottom = "-50px";
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
    document.getElementsByClassName("btn-left")[0].style.display = "block";
    document.getElementsByClassName("btn-right")[0].style.display = "block";
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
    clearInterval(this.autoplay);
    // 添加图片
    debugger;
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

    // 设置主窗口宽度
    document.getElementsByClassName("shell")[0].style.width = "1500px";

    // 设置起始位置，图片序号
    this.images.style.marginLeft = "-1000px";

    // 更改绑定事件

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
    //  如果图片正在移动，直接退出
    if (!this.lock) return;
    // 设置图片移动过度
    this.images.style.transition = "0.5s ease";
    // 图片序号++
    this.index = 0;
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
    this.bottomShow("right");
  }
}

// 生成一个对象，并开始播放
var p;
window.addEventListener("DOMContentLoaded", () => {
  p = new SlideShow();
  // p.init();
  p.autoPlay();
});
