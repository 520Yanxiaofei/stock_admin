const _import = require('./_import_' + process.env.NODE_ENV)
const asyncRouterMap = [
  {
    path: '/',
    component: _import('Index'),
    // roles: ['admin'], // you can set roles in root nav
    children: [{
      key:'1',
      path: '/',
      component: _import('Index1/index'),
      name: '测试页面',
      icon:'lock',
      roles:['admin']
    },{
      key:'2',
      path: '/index2',
      component: _import('Index2/index'),
      name: '测试页面2',
      icon:'lock',
      roles:['admin']
    },
    // {
    //   key:'sub2',
    //   path: '/index2',
    //   component: _import('Index2/index'),
    //   name: '测试页面2',
    //   icon:'lock',
    //   roles:['admin'],
    //   children: [{
    //     key:'6',
    //     path: '/index1',
    //     component: _import('Index1/index'),
    //     name: '测试页面22',
    //     icon:'lock',
    //     roles:['admin']
    //   },{
    //     key:'7',
    //     path: '/index1',
    //     component: _import('Index1/index'),
    //     name: '测试页面22',
    //     icon:'lock',
    //     roles:['admin']
    //   }]
    // }
  ]
  },
  {
    path: '/login',
    component:  _import('login/login'),
    children: []
  },
  // { path: '*', redirect: '/404', hidden: true }
]

export {asyncRouterMap};
