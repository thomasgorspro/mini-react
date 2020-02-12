import AppRouter from './Router.js';

document.addEventListener("DOMContentLoaded", () => {
    const Component = AppRouter.getRoute(window.location.pathname).getComponent();
    const rootElement = document.getElementById('root');

    let renderedComponent = Component.render();
    rootElement.appendChild(renderedComponent);

    Component.componentDidUpdate = () => {
        const newRenderedComponent = Component.render();
        rootElement.replaceChild(newRenderedComponent, renderedComponent);
        renderedComponent = newRenderedComponent;
    };
});