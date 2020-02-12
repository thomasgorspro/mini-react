import { Router, Route } from  './mini-react/lib/Router.js';
import HomeComponent from './components/HomeComponent.js';
import CounterComponent from './components/CounterComponent.js';
import notFoundComponent from './components/NotFoundComponent.js';

const routes =  {
    routes: [
        new Route('Home', '/', new HomeComponent()),
        new Route('Count', '/count', new CounterComponent()),
    ],
    notFound: new Route('404', '/notFound', new notFoundComponent({slug: window.location.pathname}))
};

const AppRouter = new Router(routes);

export default AppRouter;

