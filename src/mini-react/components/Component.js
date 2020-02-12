export default class Component {
    constructor(props) {
        this.props = props;
        this.previousState = null;
        this.state = {}; 
        this.renderedComponent = null;
    }

    shouldUpdate = () => ( this.previousState !== this.state );

    setState = state => {
        this.previousState = this.state;
        this.state = state;
        await this.render();
        this.componentDidUpdate();
    }

    componentDidUpdate = () => {
        const newRenderedComponent = this.render();
        const rootElement = document.getElementById('root');
        while (rootElement.firstChild) {
            rootElement.removeChild(rootElement.firstChild);
          }
        rootElement.appendChild(newRenderedComponent);
    };

    render = () => {
        if(this.shouldUpdate()) {
            this.renderedComponent = await this.createNode(await this.display());
        }
        return this.renderedComponent; 
    };

    createNode = async element => {
        const { type, properties = {}, children = [] } = element;
        const newElement = document.createElement(type);
        Object.keys(properties).forEach(propertyName => {
            if(propertyName === 'text') {
                newElement.textContent = properties[propertyName];
                return;
            }
            if(propertyName === 'on') {
                const events = properties['on'];

                Object.keys(events).forEach(eventName => {
                    newElement.addEventListener(eventName, events[eventName]);
                });
            }
            newElement.setAttribute(propertyName, properties[propertyName]);
        });

        children.forEach(child => {
           child = !(child instanceof Component) ? child : await child.display();  
           const renderedChild =  await this.createNode(child)
           newElement.appendChild(renderedChild);
        });
        return newElement;
    };
    
}