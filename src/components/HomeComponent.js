'use strict';
import Component from '../mini-react/components/Component.js';
import CounterComponent from './CounterComponent.js';
import NotFoundComponent from './NotFoundComponent.js';

class HomeComponent extends Component {

    constructor(props) {
        super(props);        
    }

    display = () => (
        {
            type: "div",
            properties: {
                className: "container text-center",
                id: "presentation-head",
                text: "Hello",
            },
            children:
            [
                (new NotFoundComponent({slug: window.location.pathname})),
                {
                    type: "a",
                    properties:
                    {
                        className: "text-center",
                        href: "/count",
                        text: "counter"
                    }
                },
            ]
        }
    );
} 
export default HomeComponent;