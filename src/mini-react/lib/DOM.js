'use strict'
import Component from '../components/Component.js';

class DOM {

    render = MainComponent => {
        const rootElement = document.getElementById('root');
        const renderedComponent = this.createNode(MainComponent.display());
        rootElement.appendChild(renderedComponent);
    };

    createNode = element => {
        const { type, properties, children = [] } = element;
        const newElement = document.createElement(type);
        Object.keys(properties).forEach(propertyName => {
            if(propertyName === 'text') {
                newElement.textContent = properties[propertyName];
                return;
            }
            newElement.setAttribute(propertyName, properties[propertyName]);
        });
        children.forEach(child => {
            if(!(child instanceof Component)) {
                newElement.appendChild(this.createNode(child));
                return;
            }
            newElement.appendChild(this.render(child))
        });
        return newElement;
    };
}
export default DOM;
