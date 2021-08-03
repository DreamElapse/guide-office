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
      }

    ]
  },
  

  // todo 保留此处勿删
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
