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
    // hover触发

  }
  if (this.type === "id-hover") {
    hoverStart();
  }
// click触发
clickStart();
// 指示器在容器外
divOutBottom();
// 箭头常驻
arrowAlwaysShow();
// 卡片化
card();
// 竖向滚动
verticalRoll();
}
