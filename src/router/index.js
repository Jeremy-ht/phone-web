import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

/* Layout */
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
    path: '/scenery/home',
    hidden: true,
    name: '景区网',
    component: () => import('@/views/home/index'),
    meta: { title: '景区网' }
  },

  // 登录
  {
    path:  '/flower/shopping',
    hidden: true,
    name: '购物车',
    component: () => import('@/views/home/shopping'),
    meta: { title: '购物车' }
  },

  // 注册
  {
    path: '/flower/person',
    hidden: true,
    name: '个人中心',
    component: () => import('@/views/home/person'),
    meta: { title: '个人中心' }
  },

  // 分类详情

  // 详情
  {
    path: '/flower/info/:id',
    hidden: true,
    name: '鲜花详情',
    component: () => import('@/views/home/sceneryInfo'),
    meta: { title: '鲜花详情' }
  },

  /**
   * 鲜花管理
   */
  {
    path: '/flower',
    component: Layout,
    redirect: '/flower/list',
    name: '鲜花管理',
    meta: { title: '鲜花管理', icon: 'el-icon-s-cooperation' },
    children: [
      {
        path: 'show',
        name: '鲜花列表',
        component: () => import('@/views/scenery/list'),
        meta: { title: '鲜花列表', icon: 'table' }
      },
      {
        path: 'add',
        name: '鲜花添加',
        component: () => import('@/views/scenery/add'),
        meta: { title: '鲜花添加', icon: 'table' }
      },
      {
        path: 'category',
        name: '鲜花类别',
        component: () => import('@/views/scenery/category'),
        meta: { title: '鲜花类别', icon: 'table' }
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
    path: '/admins',
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
   * 首页管理
   */
  // {
  //   path: '/index',
  //   component: Layout,
  //   redirect: '/index/rotation',
  //   name: '首页管理',
  //   meta: { title: '首页管理', icon: 'el-icon-s-claim' },
  //   children: [
  //     {
  //       path: 'rotation',
  //       name: '首页轮播',
  //       component: () => import('@/views/index/rotation'),
  //       meta: { title: '首页轮播', icon: 'table' }
  //     },
  //     {
  //       path: 'heat',
  //       name: '热门景点',
  //       component: () => import('@/views/index/heat'),
  //       meta: { title: '热门景点', icon: 'table' }
  //     },
  //     {
  //       path: 'city',
  //       name: '城市攻略',
  //       component: () => import('@/views/index/city'),
  //       meta: { title: '城市攻略', icon: 'table' }
  //     }
  //   ]
  // },
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
  {
    path: '/order',
    component: Layout,
    children: [
      {
        path: 'orders',
        name: '交易列表',
        component: () => import('@/views/comment/orders'),
        meta: { title: '交易列表', icon: 'el-icon-s-comment' }
      }
    ]
  },
  /**
   *  统计
   */
  {
    path: '/chart',
    component: Layout,
    redirect: '/chart/user',
    name: '数据分析',
    meta: { title: '数据分析', icon: 'el-icon-s-marketing' },
    children: [
      {
        path: 'cate',
        name: '类别统计',
        component: () => import('@/views/chart/user'),
        meta: { title: '类别统计', icon: 'table' }
      }, {
        path: 'order',
        name: '交易统计',
        component: () => import('@/views/chart/chart'),
        meta: { title: '交易统计', icon: 'table' }
      }
    ]
  },
  /**
   * 日志管理
   */

  {
    path: '/log',
    component: Layout,
    children: [
      {
        path: 'sysLog',
        name: '日志列表',
        component: () => import('@/views/log/sysLog'),
        meta: { title: '日志列表', icon: 'el-icon-s-claim' }
      }
    ]
  },
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
