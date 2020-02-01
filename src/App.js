import { Router, Route } from './lib/Router.js';
import DOM from './lib/DOM.js';
import HomeComponent from './components/HomeComponent.js';

const routes =  {
    'routes': [
        new Route('Home', '/'),
    ],
    'notFound': new Route('404', '/notFound')
};
const Router = new Router(routes);
const route = Router.currentRoute();

DOM.render(HomeComponent);