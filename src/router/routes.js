export default [
  // 铁路餐饮
  {
    path: '/',
    name: 'index',
    component: () => import('@pages/index/index'),
    redirect: '/home',
    children: [
      {
        path: 'home',
        name: 'home',
        component: () => import('@pages/home/home')
      },
      
      // todo 保留此处用于自动生成页面，勿删
    ]
  },
  // 搜索结果
  {
    path: '/search-list',
    name: 'search-list',
    component: () => import('@pages/search-list/search-list')
  },
  // 人员信息
  {
    path: '/personnel-message',
    name: 'personnel-message',
    component: () => import('@pages/personnel-message/personnel-message')
  },

  {
    path: '/',
    redirect: '/home',
  },
  {
    path: '/404',
    name: '404',
    component: require('@pages/_404/_404').default,
    props: true
  },
  {
    path: '*',
    redirect: '404'
  }
]
