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
  ]
};

export default MainRoutes;
