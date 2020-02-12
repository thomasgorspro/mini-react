import AppRouter from './Router.js';

document.addEventListener("DOMContentLoaded", () => {
    const Component = AppRouter.getRoute(window.location.pathname).getComponent();
    const rootElement = document.getElementById('root');

    let renderedComponent = Component.render();
    rootElement.appendChild(renderedComponent);
});