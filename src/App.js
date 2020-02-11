import AppRouter from './Router.js';
import DOM from './mini-react/lib/DOM.js';

const result = AppRouter.getRoute(window.location.pathname);
const Component = result.getComponent();

const AppDOM = new DOM();
AppDOM.render(Component);