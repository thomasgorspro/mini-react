import Component from '../mini-react/components/Component.js';

class WeatherComponent extends Component {
   constructor(props) {
       super(props);
   } 

   display = () => {
        return {
            type: "p",
            properties: {
                id: "weather",
                text: "",
            }
        }
   };

    getWeather = () => {
        const apiKey = 'cf78ba9982e3863f6daf7a79c270cd0b';
        return fetch(`https://api.openweathermap.org/data/2.5/weather?q=paris,fr&appid=${apiKey}`);
    };
}
export default WeatherComponent;