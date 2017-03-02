import Sportsman from './Sportsman';
import dataRouter from './Data';
import powerRouter from './Power';
import videoRouter from './Video';

export default store => ({
  path: 'sportsman',
  component: Sportsman,
  indexRoute: dataRouter(store),
  breadcrumbName: '运动员管理',
  childRoutes: [
    powerRouter(store),
    videoRouter(store),
  ],
});
