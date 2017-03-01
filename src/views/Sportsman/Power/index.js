import { injectReducer } from 'store/reducers';

export default store => ({
  path: 'power',
  breadcrumbName: '数据管理',
  getComponent(nextState, cd) {
    require.ensure([], (require) => {
      const component = require('./Power').default;
      const reducer = require('./containers').default;
      injectReducer(store, { key: 'power', reducer });
      cd(null, component);
    }, 'power');
  },
});
