import { injectReducer } from 'store/reducers';

export default store => ({
  path: 'data',
  breadcrumbName: '数据管理',
  getComponent(nextState, cd) {
    require.ensure([], (require) => {
      const component = require('./Data').default;
      const reducer = require('./containers').default;
      injectReducer(store, { key: 'data', reducer });
      cd(null, component);
    }, 'data');
  },
});
