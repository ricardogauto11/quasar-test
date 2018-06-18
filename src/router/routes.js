
export default [
  {
    path: '/',
    component: () => import('layouts/default'),
    children: [
      { path: '', component: () => import('pages/index') }
    ]
  },

  {
    path: '/user',
    component: () => import('layouts/User'),
    children: [
      { path: 'profile', component: () => import('pages/Profile') },
      { path: 'posts', component: () => import('pages/Posts') }
    ]
  },

  { // Always leave this as last one
    path: '*',
    component: () => import('pages/404')
  }
]
