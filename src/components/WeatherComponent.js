import Component from '../mini-react/components/Component.js';

class WeatherComponent extends Component {
   constructor(props) {
       super(props);
   } 

   display = () => {
       let weather = this.getWeather();
        return {
            type: "p",
            properties: {
                id: "weather",
                text: `the weather in Paris is ${weather}`,
            }
        }
   };

    getWeather = async () => {
        const apiKey = 'cf78ba9982e3863f6daf7a79c270cd0b';
        try {
            let response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=paris,fr&appid=${apiKey}`);
            let data = response.json();
            console.log(data);
            return data;
        } catch (e) {
            console.log('fetch failed', e)
        }
    }
}
export default WeatherComponent;