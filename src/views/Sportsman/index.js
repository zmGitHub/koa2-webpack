import Sportsman from './Sportsman';
import dataRouter from './Data';
import powerRouter from './Power';
import videoRouter from './Video';
import trainRouter from './Train';

export default store => ({
  path: 'sportsman/:id',
  component: Sportsman,
  indexRoute: dataRouter(store),
  breadcrumbName: '运动员管理',
  childRoutes: [
    powerRouter(store),
    trainRouter(store),
    videoRouter(store),
  ],
});
