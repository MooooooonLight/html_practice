/*
 *@className:
 *@Author: 张浩楠
 *@param:
 *@Date: 2021-11-01 18:16:46
 *@Description: 轮播图类
 */
class SlideShow {
  constructor() {
    this.index = 0; // 图片轮播序号
    this.lock = true; //锁定，在图片轮播时，不可以操作换页
    this.autoplay; //自动播放定时器
    this.document.querySelector(".img-list"); //获取轮播图片块
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
  addPictures() {}
}
