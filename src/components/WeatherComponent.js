import Component from '../mini-react/components/Component.js';

class WeatherComponent extends Component {
   constructor(props) {
       super(props);
   } 

   display = () => {
       let weather = "not found"
       this.getWeather().then(data => {
           weather = data;
       });

        return {
            type: "p",
            properties: {
                id: "weather",
                text: `the weather in Paris is ${weather}`,
            }
        }
   };

    getWeather = () => {
        const apiKey = 'cf78ba9982e3863f6daf7a79c270cd0b';
            return fetch(`https://api.openweathermap.org/data/2.5/weather?q=paris,fr&appid=${apiKey}`).then(response => {
                return response.json().then(data => {
                    console.log(data);
                });
            })
            .catch((e) => {
            console.log(`Error: ${e}`);
        });
    }
}
export default WeatherComponent;