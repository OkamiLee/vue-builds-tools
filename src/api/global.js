exports.install = function (Vue, options) {
  Vue.prototype.obj = {//可生成类型全局变量
    input:"inputForm",
    button:"buttonList",
    select:"selectList",
    table:"tableList",
    radio:"radioList",
    checkbox:"checkboxList",
    num:"numList",
    dateTime:"dateTimeList",
		layout:"layoutList",
  };
  Vue.prototype.computeGuidesForElement = function(elem, pos, w, h){//参考线返回元素偏移量
    if( elem != null ){
      var $t = $(elem);
      //offset:返回当前元素 的偏移量
      pos = $t.offset();
      w = $t.outerWidth() - 1;
      h = $t.outerHeight() - 1;
    }
    return [
      { type: "h", left: pos.left, top: pos.top }, //垂直方向左下对齐线
      { type: "h", left: pos.left, top: pos.top + h },
      { type: "v", left: pos.left, top: pos.top },
      { type: "v", left: pos.left + w, top: pos.top },
      //您可以添加_any_其他指南在这里就好了（如指南10像素单元的左）
      { type: "h", left: pos.left, top: pos.top + h/2 },
      { type: "v", left: pos.left + w/2, top: pos.top }
    ];
  }
};
