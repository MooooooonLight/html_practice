new Vue({
  el: "#main-window",
  data: {
    change: false, //判断功能是否切换过
    lock: true, //锁定，图片在切换时，不可操作换页
    play: 0, //自动播放定时器
    type: "normal", //轮播图类型
    width: 500, //轮播图宽度
    hover: false, //是否启动鼠标悬停切换图片
    out: false, //是否开启小图标在图片外侧
    hold: false, //是否使换页标记常驻
    images: [], //图片数组
    curImg: 0, //当前图片序号
    imgNum: 0, //图片数量
    littleNum: 0, //下标圆点数量
    useTrans: false, //是否使用过度效果
    useWhite: [], //是否使用白色背景
    pos: { transform: "translateX(0px)" },
    ifBegin: false, //轮播是否开始
  },
  methods: {
    // 选择界面图片进行设置
    getImages: function (e) {
      let file = e.target.files;
      for (let i = 0; i < file.length; i++) {
        this.images.push({
          id: this.imgNum++,
          src: URL.createObjectURL(file[i]),
        });
      }

      // 设置小标数量
      this.littleNum = this.imgNum;
      this.useWhite.push(true);
      for (let i = 1; i < this.littleNum; i++) {
        this.useWhite.push(false);
      }

      // 初始化
      this.init();

      // 开启自动轮播
      this.autoPlay();
      this.ifBegin = true;
    },
    // 初始化
    init: function () {
      // 如果为normal模式，将第一张图片复制到最后
      if (this.type === "normal") {
        let id = this.images[0].id;
        let src = this.images[0].src;
        this.images.push({ id, src });
        this.imgNum++;
      }
    },
    // 图片向右移动
    imgRight: function () {
      //  如果图片正在移动，直接退出
      if (!this.lock) return;

      // 设置过度效果
      this.useTrans = true;

      // 设置下标颜色
      this.setPoint("right");

      // 图片序号++
      this.curImg++;

      // 如果在最后一张 则返回第一张
      if (this.curImg === this.imgNum - 1) {
        setTimeout(() => {
          this.pos = { transform: "translateX(0px)" };
          this.curImg = 0;
          this.useTrans = false;
        }, 500);
      }

      // 移动图片
      let curPos = "(" + -this.curImg * this.width + "px";
      this.pos = { transform: "translateX" + curPos };

      // 上锁，500ms后打开
      this.lock = false;
      setTimeout(() => {
        this.lock = true;
      }, 500);
    },
    // 图片向左移动
    imgLeft: function () {
      // 如果图片正在移动，直接退出
      if (!this.lock) return;

      //设置过度效果
      this.useTrans = true;

      // 设置下标颜色
      this.setPoint("left");

      // 如果在第一张图片，则回到最后一张
      if (this.curImg === 0) {
        this.useTrans = false;

        let curPos = "(" + (-this.imgNum + 1) * this.width + "px";
        this.pos = { transform: "translateX" + curPos };

        setTimeout(() => {
          this.useTrans = true;
          this.curImg = this.imgNum - 2;

          let curPos = "(" + -this.curImg * this.width + "px";
          this.pos = { transform: "translateX" + curPos };
        }, 0);
      } else {
        // 移动图片
        this.curImg--;
        let curPos = "(" + -this.curImg * this.width + "px";
        this.pos = { transform: "translateX" + curPos };
      }

      // 上锁，500毫秒之后打开
      this.lock = false;
      setTimeout(() => {
        this.lock = true;
      }, 500);
    },
    // 开启自动轮播
    autoPlay: function () {
      clearInterval(this.play);
      this.play = setInterval(() => {
        this.imgRight();
      }, 2000);
    },
    // 鼠标悬浮图片
    mouseIn: function () {
      clearInterval(this.play);
    },
    // 鼠标离开图片
    mouseOut: function () {
      if (!this.ifBegin) return;
      clearInterval(this.play);
      this.autoPlay();
    },
    // 设置下标位置
    setPoint: function (direction) {
      let curPoint;

      if (direction === "right") {
        curPoint = this.curImg + 1;
        if (curPoint === this.littleNum) curPoint = 0;
      } else {
        curPoint = this.curImg - 1;
        if (curPoint === -1) curPoint = this.littleNum - 1;
      }

      for (let i = 0; i < this.useWhite.length; i++) {
        this.useWhite[i] = false;
      }
      this.useWhite[curPoint] = true;
    },
  },
  mounted: function () {},
});
