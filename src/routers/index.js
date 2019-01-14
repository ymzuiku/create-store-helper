import Loadable from 'src/components/Loadable';
import paths from 'src/units/paths';

export default [
  { path: '/', redirect: paths.HOME },
  { path: paths.HOME + '*', component: Loadable(() => import('./Home'), true) },
];
