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
  }
  // 根据种类生成轮播图
  creatSlide() {
    // hover触发
    if (this.type === "id-hover") { }
    // click触发
    if (this.type === "id-click") { }
    // 指示器在容器外
    if (this.type === "id-out") { }
    // 箭头常驻
    if (this.type === "id-arrows") { }
    // 卡片化
    if (this.type === "id-card") { }
    // 竖向滚动
    if (this.type === "id-vertical") { }
  }
}