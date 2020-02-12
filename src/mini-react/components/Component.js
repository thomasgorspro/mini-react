'use strict'

export default class Component {
    constructor(props) {
        this.props = props;
        this.previousState = null;
        this.state = {}; 
        this.renderedComponent = null;
    }

    shouldUpdate = () => ( this.previousState !== this.state );

    componentDidUpdate = () => {};

    setState = state => {
        this.previousState = this.state;
        this.state = state;
        this.render();
        this.componentDidUpdate();
    }

    render = () => {
        if(this.shouldUpdate()) {
            this.renderedComponent = this.createNode(this.display());
        }
        return this.renderedComponent; 
    };

    createNode = element => {
        const { type, properties = {}, children = [] } = element;
        const newElement = document.createElement(type);
        Object.keys(properties).forEach(propertyName => {
            if(propertyName === 'text') {
                newElement.textContent = properties[propertyName];
                return;
            }
            //if on x then onx = foo()
            newElement.setAttribute(propertyName, properties[propertyName]);
        });

        children.forEach(child => {
           child = !(child instanceof Component) ? child : child.display();  
           const renderedChild = this.createNode(child)
           newElement.appendChild(renderedChild);
        });
        return newElement;
    };
    
}