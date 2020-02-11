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
        console.log(type, properties, children, '---------');
        Object.keys(properties).forEach(propertieName => {
            if(propertieName === 'text') {
                newElement.textContent = properties[propertieName];
                return;
            }
            newElement.setAttribute(propertieName, properties[propertieName]);
        });
        children.forEach(child => {
            if(!(child instanceof Component)) {
                console.log(child)
                newElement.appendChild(this.createNode(child));
            }
        });
        return newElement;
    };
}
export default DOM;
