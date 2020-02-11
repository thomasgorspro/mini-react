'use strict';
import Component from '../mini-react/components/Component.js';

class HomeComponent extends Component {

    constructor(state) {
        super(state);        
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
                {
                    type: "div",
                    properties:
                    {
                        className: "text-center",
                        text: 'Hello World!' 
                    },
                    children:
                    [ 
                        {
                            type: "div",
                            properties:
                            {
                                className: "container text-center",
                                id: "presentation",
                                text: "Hello World! I present to you this little librairie which is not React at all, I swear cause it suck ngl."
                            }
                        },
                    ]
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
        }
    );
} 
export default HomeComponent;