import CoreLayout from './CoreLayout';
import Home from './Home';
import loginRoute from './Login';
import logRouter from './log';

import notFoundRouter from './NotFound';

// 创建动态路由
export const createRoutes = store => ({
  childRoutes: [{
    path: '/',
    component: CoreLayout,
    indexRoute: Home,
    breadcrumbName: '主 页',
    childRoutes: [
      logRouter(store)
    ],
  },
    loginRoute(store),
    notFoundRouter(),
  ],
});

export default createRoutes;
