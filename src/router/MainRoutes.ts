const MainRoutes = {
  path: '/main',
  meta: {
    requiresAuth: true
  },
  redirect: '/main/dashboard/default',
  component: () => import('@/layouts/full/FullLayout.vue'),
  children: [
    {
      name: 'Project',
      path: '/projects',
      component: () => import('@/views/pages/projects/list/ProjectList.vue')
    },
    {
      name: 'Project Detail',
      path: '/project-detail',
      component: () => import('@/views/pages/projects/detail/ProjectDetail.vue')
    },
    {
      name: 'Image Compare',
      path: '/imagecompare',
      component: () => import('@/imagecompare/ImageCompareView.vue')
    },
    {
      name: 'Image Editor',
      path: '/imageeditor',
      component: () => import('@/imageeditor/ImageEditorView.vue')
    },
    {
      name: 'Profile',
      path: '/profile',
      component: () => import('@/views/pages/profile/ProfileView.vue')
    },
    {
      name: 'User List',
      path: '/userlist',
      component: () => import('@/user/list/ListView.vue')
    },
    {
      name: 'User New',
      path: '/new',
      component: () => import('@/user/new/NewView.vue')
    },
    {
      name: 'User Edit',
      path: '/edit',
      component: () => import('@/user/edit/EditView.vue')
    },
    {
      name: 'User View',
      path: '/view',
      component: () => import('@/user/view/UserDetailView.vue')
    },
  ]
};

export default MainRoutes;
