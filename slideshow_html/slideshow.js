/*
 *@className:SlideShow
 *@Author: 张浩楠
 *@param: slideType-轮播图种类 imgList-轮播图片列表
 *@Date: 2021-10-28 17:21:23
 *@Description:
 */
class SlideShow {
  // 构造函数
  constructor(slideType, imgList) {
    // 公有属性
    this.type = slideType;
    this.list = imgList;
    this.divWidth = 0;
  }

  // 根据种类生成轮播图
  creatSlide() {
    // // hover触发
    // if (this.type === "id-hover") {
    // }
    // // click触发
    // if (this.type === "id-click") {
    // }
    // // 指示器在容器外
    // if (this.type === "id-out") {
    // }
    // // 箭头常驻
    // if (this.type === "id-arrows") {
    // }
    // // 卡片化
    // if (this.type === "id-card") {
    // }
    // // 竖向滚动
    // if (this.type === "id-vertical") {
    // }
  }
  circulation() {
    // debugger;
    this.stop = setInterval(this.moveOnce, 1000);
  }

  /*
   *@functionName: moveOnce
   *@Author: 张浩楠
   *@Date: 2021-10-29 18:13:01
   *@param in:
   *@param out:
   *@return:
   *@Description: 移动一次
   */
  moveOnce() {
    this.divWidth += 100;
    document.getElementById("picture").style.marginLeft = this.divWidth + "px";

    console.log(document.getElementById("picture").style.marginLeft);

    if (this.divWidth >= 2000) {
      clearInterval(this.stop);
    }
  }
}

var p = new SlideShow(1, 2);
