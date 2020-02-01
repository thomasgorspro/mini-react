'use strict';
import { createNode } from '../lib/DOM.js';
import Component from './Component.js';

class HomeComponent extends Component {

    constructor(properties, child = {}) {
        super(properties);        
    }

    render = state => (
        createNode({
            type: "h1",
            properties: {
                className: "container text-center",
                id: "title",
                text: "Hello",
            },
            children:
            [
                {
                    type: "div",
                    properties:
                    {
                        className: "text-center",
                        text: 'Hello World!' 
                    },
                    children: 
                    {
                        type: "div",
                        properties:
                        {
                            className: "container text-center",
                            id: "presentation",
                            text: "Hello World! I present to you this little librairie which is not React at all, I swear cause it suck ngl."
                        }
                    },
                },
                {
                    type: "p",
                    properties:
                    {
                        className: "text-center",
                        text: "I would rather have this element as a Component but you do you"
                    }
                },
            ]
        })
    );
} 
export default HomeComponent;