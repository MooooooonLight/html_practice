轮播图实现 本文档充当学习笔记

1. absolute 定位下的 float：left/right 是不起作用的，通常我们会在 absolute 下用 top/right/bottom/left 来改变他的位置；绝对定位会使元素从文档流中被删除，结果就是该元素原本占据的空间被其它元素所填充
2. 在内联元素中回车符会被显示成为一个空格
3. inline 元素的高度、宽度及顶部和底部边距不可设置；inline-block 元素的高度、宽度、行高以及顶和底边距都可设置
4. position：absolute 是相对于最近祖先非 static 定位来定位的，如果说他的父级定位是默认的，那么他就会继续向上找父级的父级，直到找到非 static 定位为基准点
5. relative 定位下 top/right/bottom/left 效果和 margin 差不多，但是查看元素后可以发现，top/right/bottom/left 的部分不属于盒子模型的一部分
6. float 浮动会将元素从文档流中删除，他的空间会被其它元素补上；浮动的参数物是父元素，是在父元素这个容器中飘
7. focus 代表的是获取焦点时的样式（tab 选择的样式）
8. 按住alt+上下方向键可以换行
9. 按住ctrl+shift 上下方向键可以复制
10.getElementById querySelector之间的区别
