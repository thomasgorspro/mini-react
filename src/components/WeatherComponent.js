import Component from '../mini-react/components/Component.js';

class WeatherComponent extends Component {
   constructor(props) {
       super(props);
   } 

   display = async () => {
       let weather = await this.getWeather();
        return {
            type: "p",
            properties: {
                id: "weather",
                text: `the weather in Paris is ${weather}`,
            }
        }
   };

    async getWeather() {
        const apiKey = 'cf78ba9982e3863f6daf7a79c270cd0b';
        try {
            let response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=paris,fr&appid=${apiKey}`);
            let data = await response.json();
            return data;
        } catch (e) {
            console.log('fetch failed', e)
        }
    }
}
export default WeatherComponent;