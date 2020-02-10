import AppRouter from './Router.js';
import DOM from './mini-react/lib/DOM.js';

const result = AppRouter.getRoute(location);

DOM.render(result.getComponent());
