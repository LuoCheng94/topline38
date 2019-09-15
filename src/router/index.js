import Vue from 'vue'
import Router from 'vue-router'


Vue.use(Router)

export default new Router({
  routes: [
    {
      //测试vant的基本使用
      name:"test",
      path:"/test",
      //导入一个组件
      component:() => import("@/views/test")
      //component:test
    },
    {
      name:"login",
      path:"/login",
      component:() => import("@/views/login")
      //component:login
    }
  ]
})
