import Component from '../mini-react/components/Component.js';

class CounterComponent extends Component {
    constructor(props) {
        super(props);
    }

    incrementCounter = () => {
        const element = document.getElementById('counter-button');
        const { count = 0 } = this.state;
        element.onclick = () => {
            this.setState({count: count++});
        };
    };

    display = () => {
        const {count = 0} = this.state;
        return {
            type: "label",
            properties: {
                id: "counter",
                text: `You clicked this button ${count}`
            },
            children: [
                {
                    type: "button",
                    properties: {
                        id: "counter-button",
                        text: "Count up!",
                        on: {
                            click: () => this.incrementCounter()
                        }
                    }
                }
            ]
        }
    };

}
export default CounterComponent;