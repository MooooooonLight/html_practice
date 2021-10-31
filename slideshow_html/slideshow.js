let index = 0;
let lock = true;
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

  bottomShow();
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
}

// 自动轮播
let autoplay = setInterval(() => {
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
function bottomShow() {
  debugger;
  let list = document.getElementById("main-pointer");

  list = list.getElementsByTagName("li");

  for (var i = 0; i < list.length; i++) {
    if (index === 4) {
      list[0].style.backgroundColor = "white";
    }
    if (i === index) {
      list[i].style.backgroundColor = "white";
    } else {
      list[i].style.backgroundColor = "blue";
    }
  }
}
