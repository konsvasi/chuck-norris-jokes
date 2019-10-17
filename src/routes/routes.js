import MainView from '../components/MainView';
import SingleJoke from '../components/SingleJoke';

export default [
  { path: '/', component: MainView },
  { path: '/:id', name: 'joke', component: SingleJoke, props: true }
]