import type { AppRouteModule } from '/@/router/types';

import { LAYOUT } from '/@/router/constant';
import { t } from '/@/hooks/web/useI18n';

const dashboard: AppRouteModule = {
  path: '/test',
  name: 'Test',
  component: LAYOUT,
  redirect: '/test/index',
  meta: {
    hideChildrenInMenu: true,
    icon: 'simple-icons:testinglibrary',
    title: t('routes.test.test'),
    orderNo: 100000,
  },
  children: [
    {
      path: 'index',
      name: 'AboutPage',
      component: () => import('/@/views/sys/test/index.vue'),
      meta: {
        title: t('routes.test.test'),
        icon: 'simple-icons:testinglibrary',
        hideMenu: true,
      },
    },
  ],
};

export default dashboard;
