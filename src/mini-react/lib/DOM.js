'use strict'
import Component from '../components/Component.js';

class DOM {

    render = MainComponent => {
        const rootElement = document.getElementById('root');
        const renderedComponent = this.createNode(MainComponent.display());
        rootElement.appendChild(renderedComponent);
    }

    createNode = (element) => {
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
            if( child instanceof Component) {
                newElement.appendChild(createNode(child));
            }
        });
    
        return newElement;
    };
    
}
export default DOM;
