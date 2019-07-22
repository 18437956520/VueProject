import Vue from 'vue'
import router from 'vue-router'
import HelloWorld from '../components/HelloWorld'
import HelloZqq from '../components/HelloZqq'

Vue.use(router)

/* 配置路由 */
export default new router({
  routes:[{
    name:'helloworld',
    path:'/helloworld',
    component:HelloWorld
  },
  {
    name:'hellozqq',
    path:'/hellozqq',
    component:HelloZqq
  }]
})

