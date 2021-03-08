import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

//  #5a98de;
//  #c62b26;

import Layout from '@/layout'

export const constantRoutes = [
  {
    path: '/login',
    component: () => import('@/views/login/index'),
    hidden: true
  },

  {
    path: '/404',
    component: () => import('@/views/404'),
    hidden: true
  },

  {
    path: '/',
    component: Layout,
    redirect: '/dashboard',
    children: [{
      path: 'dashboard',
      name: '首页',
      component: () => import('@/views/dashboard/index'),
      meta: { title: '首页', icon: 'el-icon-s-home' }
    }]
  },
  /**
   *   首页
   */
  // 用户首页
  {
    path: '/phone/home',
    hidden: true,
    name: '云购手机',
    component: () => import('@/views/home/index'),
    meta: { title: '云购手机' }
  },

  {
    path:  '/phone/shopping',
    hidden: true,
    name: '云购手机购物车',
    component: () => import('@/views/home/shopping'),
    meta: { title: '云购手机购物车' }
  },

  // 注册
  {
    path: '/phone/my',
    hidden: true,
    name: '云购手机个人中心',
    component: () => import('@/views/home/person'),
    meta: { title: '云购手机个人中心' }
  },

  // login
  {
    path: '/phone/login',
    hidden: true,
    name: '云购手机登录',
    component: () => import('@/views/home/userLogin'),
    meta: { title: '云购手机登录' }
  },


  // 详情
  {
    path: '/phone/show/:id',
    hidden: true,
    name: '手机详情',
    component: () => import('@/views/home/sceneryInfo'),
    meta: { title: '手机详情' }
  },

  /**
   * 手机管理
   */
  {
    path: '/phone',
    component: Layout,
    redirect: '/phone/list',
    name: '手机管理',
    meta: { title: '手机管理', icon: 'el-icon-s-cooperation' },
    children: [
      {
        path: 'show',
        name: '手机列表',
        component: () => import('@/views/scenery/list'),
        meta: { title: '商品列表', icon: 'table' }
      },
      {
        path: 'add',
        name: '手机添加',
        component: () => import('@/views/scenery/add'),
        meta: { title: '商品添加', icon: 'table' }
      },
      {
        path: 'category',
        name: '品牌分类',
        component: () => import('@/views/scenery/category'),
        meta: { title: '品牌分类', icon: 'table' }
      }
    ]
  },



  /**
   *   系统管理
   */
  // 个人中心
  {
    path: '/admin',
    redirect: '/info',
    component: Layout,
    hidden: true,
    children: [
      {
        path: 'info',
        name: '个人中心',
        component: () => import('@/views/admin/info'),
        meta: { title: '个人中心' }

      }
    ]
  },


  {
    path: '/one',
    component: Layout,
    children: [
      {
        path: 'four',
        name: '首页管理',
        component: () => import('@/views/scenery/four'),
        meta: { title: '首页管理', icon: 'el-icon-s-claim' }
      }
    ]
  },

  {
    path: '/system',
    component: Layout,
    redirect: '/admin',
    name: '系统管理',
    meta: { title: '系统管理', icon: 'el-icon-s-tools' },
    children: [
      {
        path: 'admin',
        name: 'admin',
        component: () => import('@/views/admin/index'),
        meta: { title: '员工列表', icon: 'table' }
      },
      {
        path: 'user',
        name: 'user',
        component: () => import('@/views/user/index'),
        meta: { title: '用户列表', icon: 'table' }
      }
    ]
  },


  /**
   *  评论
   */
  // {
  //   path: '/comment',
  //   component: Layout,
  //   children: [
  //     {
  //       path: 'commentList',
  //       name: '评论列表',
  //       component: () => import('@/views/comment/commentList'),
  //       meta: { title: '评论列表', icon: 'el-icon-s-comment' }
  //     }
  //   ]
  // },
  /**
   *  评论
   */
  // {
  //   path: '/order',
  //   component: Layout,
  //   children: [
  //     {
  //       path: 'orderList',
  //       name: '订单列表',
  //       component: () => import('@/views/comment/orders'),
  //       meta: { title: '订单列表', icon: 'el-icon-s-comment' }
  //     }
  //   ]
  // },
  /**
   *  统计
   */
  {
    path: '/chart',
    component: Layout,
    redirect: '/chart/cate',
    name: '数据展示',
    meta: { title: '数据展示', icon: 'el-icon-s-marketing' },
    children: [
      {
        path: 'cate',
        name: '品牌统计',
        component: () => import('@/views/chart/user'),
        meta: { title: '品牌统计', icon: 'table' }
      }
      // , {
      //   path: 'order',
      //   name: '交易统计',
      //   component: () => import('@/views/chart/chart'),
      //   meta: { title: '交易统计', icon: 'table' }
      // }
    ]
  },
  /**
   * 日志管理
   */

  // {
  //   path: '/log',
  //   component: Layout,
  //   children: [
  //     {
  //       path: 'sysLog',
  //       name: '日志列表',
  //       component: () => import('@/views/log/sysLog'),
  //       meta: { title: '日志列表', icon: 'el-icon-s-claim' }
  //     }
  //   ]
  // },
  // {
  //   path: '/log',
  //   component: Layout,
  //   redirect: '/log/sysLog',
  //   name: '日志管理',
  //   meta: { title: '日志管理', icon: 'el-icon-s-claim' },
  //   children: [
  //     {
  //       path: 'sysLog',
  //       name: '系统日志',
  //       component: () => import('@/views/log/sysLog'),
  //       meta: { title: '系统日志', icon: 'table' }
  //     },
  //     {
  //       path: 'userLog',
  //       name: '用户日志',
  //       component: () => import('@/views/log/userLog'),
  //       meta: { title: '用户日志', icon: 'table' }
  //     }
  //   ]
  // },

  { path: '*', redirect: '/404', hidden: true }
]

const createRouter = () => new Router({
  // mode: 'history', // require service support
  scrollBehavior: () => ({ y: 0 }),
  mode: 'history',
  routes: constantRoutes
})

const router = createRouter()

export function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher // reset router
}

export default router
