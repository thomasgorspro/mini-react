import Component from '../mini-react/components/Component.js';

class CounterComponent extends Component {
    constructor(props) {
        super(props);
    }

    incrementCounter = () => {
        let { count = 0 } = this.state;
        this.setState({count: count+1});
    };

    display = () => {
        const {count = 0} = this.state;
        return {
            type: "h1",
            properties: {
                id: "counter",
                class: "center-align",
                text: `You clicked this button ${count}`
            },
            children: [
                {
                    type: "button",
                    properties: {
                        id: "counter-button",
                        text: "Count go up!",
                        class: "btn-large red",
                        style: "margin: 1rem;",
                        on: {
                            click: this.incrementCounter
                        }
                    }
                },
                {
                    type: "a",
                    properties:
                    {
                        href: "/",
                        class: "btn-large",
                        text: "Home"
                    }
                },
            ]
        }
    };

}
export default CounterComponent;