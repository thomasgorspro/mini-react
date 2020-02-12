import Component from '../mini-react/components/Component.js';

class CounterComponent extends Component {
    constructor(props) {
        super(props);
    }

    incrementCounter = (event) => {
        console.log(this.state);
        let { count = 0 } = this.state;
        this.setState({count: count+1});
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
                        text: "Count go up!",
                        on: {
                            click: this.incrementCounter
                        }
                    }
                }
            ]
        }
    };

}
export default CounterComponent;