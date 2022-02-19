import { AUTH, HOME } from './constants';
import Auth from './pages/Auth';
import Home from './pages/Home';

const createRoute = (component, path) => {return {component, path}};

const routes = [
  createRoute(<Home />, HOME),
  createRoute(<Auth />, AUTH),
];

export default routes;
