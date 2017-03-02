import { injectReducer } from 'store/reducers';

export default store => ({
  path: 'video',
  breadcrumbName: '视频管理',
  getComponent(nextState, cd) {
    require.ensure([], (require) => {
      const component = require('./Video').default;
      const reducer = require('./containers').default;
      injectReducer(store, { key: 'video', reducer });
      cd(null, component);
    }, 'video');
  },
});
