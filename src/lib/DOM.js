'use strict'
import Component from '../components/Component.js';

export const createNode = (element) => {
    const { type, properties, children } = element;
    const newElement = document.createElement(type);
    Object.keys(properties).forEach(propertieName => {
        if(propertieName === 'text') {
            newElement.textContent = properties[propertieName];
            continue;
        }
        newElement.setAttribute(propertieName, properties[propertieName]);
    });

    children.forEach(child => {
        const childComponent = child instanceof Component ? child.render() : this.createElement(child);
        newElement.appendChild(childComponent);
    });

    return newElement;
};

class DOM {
    constructor() {}
    render = MainComponent => {
        const rootElement = document.getElementById('root');
        const renderedComponent = MainComponent.render();
        rootElement.appendChild(renderedComponent);
    }
}
export default DOM;
