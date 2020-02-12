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
                (new CounterComponent()),
                {
                    type: "p",
                    properties:
                    {
                        className: "text-center",
                        text: "I would rather have this element as a Component but you do you"
                    }
                },
            ]
        }
    );
} 
export default HomeComponent;