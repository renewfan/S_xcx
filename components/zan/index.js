// components/zan/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    taplike:function(e){
      console.log(e)
      console.log(e.currentTarget.dataset.code)
    }
  }
})
