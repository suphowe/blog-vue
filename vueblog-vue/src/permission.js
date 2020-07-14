//路由权限拦截
import router from "./router"
//路由判断登陆,根据路由配置文件的参数
//每次路由之前(router.beforeEach)判断token的状态,是否需要跳转到登陆页面
router.beforeEach((to, from, next) => {
  //判断路由是否需要登陆权限
  if (to.matched.some(record => record.meta.requireAuth)) {
    const token = localStorage.getItem("token")
    //console.log("------->" + token)
    //判断当前的token是否存在
    if (token) {
      if (to.path === '/login') {
      } else {
        next()
      }
    } else {
      next({
        path: '/login'
      })
    }
  } else {
    next()
  }
})