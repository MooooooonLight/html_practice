let index = 0;
let lock = true;
let autoplay;
/*
 *@functionName:
 *@Author: 张浩楠
 *@Date: 2021-10-31 15:59:32
 *@param in:
 *@param out:
 *@return:
 *@Description: 右按钮点击事件
 */
function clickRight() {
  // bottomShow();
  if (!lock) return;
  let images = document.querySelector(".img-list");

  index++;
  images.style.transition = "0.5s ease";
  if (index === 4) {
    setTimeout(function () {
      images.style.marginLeft = 0;
      index = 0;
      images.style.transition = "none";
    }, 500);
  }

  images.style.marginLeft = -index * 500 + "px";

  lock = false;

  // 500毫秒之后打开
  setTimeout(function () {
    lock = true;
  }, 500);

  bottomShow("right");
}
/*
 *@functionName:
 *@Author: 张浩楠
 *@Date: 2021-10-31 15:59:32
 *@param in:
 *@param out:
 *@return:
 *@Description: 左按钮点击事件
 */
function clickLeft() {
  if (!lock) return;

  let images = document.querySelector(".img-list");

  images.style.transition = "0.5s ease";

  if (index === 0) {
    images.style.marginLeft = -4 * 500 + "px";
    images.style.transition = "none";

    setTimeout(function () {
      images.style.transition = "0.5s ease";
      index = 3;
      images.style.marginLeft = -3 * 500 + "px";
    }, 0);
  } else {
    index--;
    images.style.marginLeft = -index * 500 + "px";
  }
  lock = false;

  // 500毫秒之后打开
  setTimeout(function () {
    lock = true;
  }, 500);

  bottomShow("left");
}

// 自动轮播;
autoplay = setInterval(() => {
  clickRight();
}, 2000);

/*
 *@functionName:
 *@Author: 张浩楠
 *@Date: 2021-10-31 19:13:16
 *@param in:
 *@param out:
 *@return:
 *@Description: 暂停轮播
 */
function pause() {
  clearInterval(autoplay);
}

/*
 *@functionName:
 *@Author: 张浩楠
 *@Date: 2021-10-31 19:14:00
 *@param in:
 *@param out:
 *@return:
 *@Description: 重新开始轮播
 */
function rollContinue() {
  // debugger;
  clearInterval(autoplay);
  autoplay = setInterval(() => {
    clickRight();
  }, 2000);
}
/*
 *@functionName:
 *@Author: 张浩楠
 *@Date: 2021-10-31 19:35:46
 *@param in:
 *@param out:
 *@return:
 *@Description: 设置下标显示
 */
function bottomShow(direction) {
  let list = document.getElementById("main-pointer");
  let images = document.querySelector(".img-list");

  list = list.getElementsByTagName("li");

  for (var i = 0; i < list.length; i++) {
    if (images.style.marginLeft === "-2000px") {
      if (direction === "right") {
        list[0].style.backgroundColor = "white";
      } else {
        list[0].style.backgroundColor = "blue";
        list[3].style.backgroundColor = "white";
        continue;
      }
    }
    if (images.style.marginLeft === i * -500 + "px") {
      list[i].style.backgroundColor = "white";
    } else {
      list[i].style.backgroundColor = "blue";
    }
  }
}
/*
 *@functionName:
 *@Author: 张浩楠
 *@Date: 2021-11-01 09:33:30
 *@param in:
 *@param out:
 *@return:
 *@Description: 点击下标事件
 */
function clickBottom(id) {
  let images = document.querySelector(".img-list");
  var curPos = parseInt(images.style.marginLeft);
  if (curPos === "") {
    curPos = 0;
  }

  if (id === "p1") {
    var targetPos = 0;
  }
  if (id === "p2") {
    var curPos = images.style.marginLeft;
    var targetPos = -500;
  }
  if (id === "p3") {
    var curPos = images.style.marginLeft;
    var targetPos = -1000;
  }
  if (id === "p4") {
    var curPos = images.style.marginLeft;
    var targetPos = -1500;
  }
  clickMove(curPos, targetPos);
}
/*
 *@functionName:
 *@Author: 张浩楠
 *@Date: 2021-11-01 09:45:52
 *@param in:
 *@param out:
 *@return:
 *@Description: 点击下标移动函数
 */
function clickMove(curPos, tarPos) {
  debugger;
  clearInterval(autoplay);
  let images = document.querySelector(".img-list");
  var speed;
  if (curPos > tarPos) {
    speed = -5;
  } else {
    speed = 5;
  }

  autoplay = setInterval(() => {
    debugger;
    curPos += speed;
    // images.style.marginLeft = curPos + "px";
    // if (images.style.marginLeft === tarPos + "px") {
    //   clearInterval(autoplay);
    // }
  }, 0);

  // rollContinue();
}
