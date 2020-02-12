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
                class: "center-align",
            },
            children:
            [
                {
                    type: "h1",
                    properties: {
                        text: "Accueil",
                    },
                },
                (new NotFoundComponent({slug: window.location.pathname})),
                {
                    type: "a",
                    properties:
                    {
                        class: "btn-large",
                        href: "/count",
                        text: "Counter"
                    }
                },
            ]
        }
    );
} 
export default HomeComponent;