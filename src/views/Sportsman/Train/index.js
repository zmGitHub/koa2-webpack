import { injectReducer } from 'store/reducers';

export default store => ({
  path: 'train',
  breadcrumbName: '训练管理',
  getComponent(nextState, cd) {
    require.ensure([], (require) => {
      const component = require('./Train').default;
      const reducer = require('./containers').default;
      injectReducer(store, { key: 'train', reducer });
      cd(null, component);
    }, 'train');
  },
});
