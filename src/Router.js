import { Router, Route } from  './mini-react/lib/Router.js.js';
import  HomeComponent from './mini-react/components/HomeComponent.js.js';

const routes =  {
    'routes': [
        new Route('Home', '/', HomeComponent),
    ],
    'notFound': new Route('404', '/notFound')
}
const AppRouter = new Router(routes);

export default AppRouter;
