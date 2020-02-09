import React, { Component } from 'react'
import Axios from 'axios';

// Stylesheet
import './Weather.scss'

export class Weather extends Component {

    constructor(props) {
        super();

        this.state = {
            weatherData: {
                main: '',
                description: '',
                icon: '',
                currentTemp: '',
                lowTemp: '',
                highTemp: '',
                feelsLike: '',

            }
        }
    };

    getWeatherData = async () => {
        const response = 
            await Axios.get("https://api.openweathermap.org/data/2.5/weather?zip=80228,us&units=imperial&appid=ed1fb3710e0261cc11a496c703e2ab17")
            // await Axios.get("http://api.openweathermap.org/data/2.5/forecast/daily?zip=80228&cnt=3&appid=dcbb56db50fbdd17a0b5395f8108969a")

            console.log(response.data)
            this.setState({
                weatherData: {
                    main: response.data.weather[0].main,
                    description: response.data.weather[0].description,
                    icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
                    currentTemp: response.data.main.temp,
                    lowTemp: response.data.main.temp_min,
                    highTemp: response.data.main.temp_max,
                    feelsLike: response.data.main.feels_like
                }
            })
    };

    componentDidMount() {
        this.getWeatherData();
    };


    render() {
        return (
            <div className="weather-container">
                <h1>Your local weather at Union West</h1>
                <div className="icon-container">
                    <img 
                        className="weather-icon" 
                        src={this.state.weatherData.icon} 
                        alt="weather-icon"
                    />
                    <h3>It is currently {this.state.weatherData.currentTemp}</h3>
                    <h3>and feels like {this.state.weatherData.feelsLike}</h3>
                    <h3>Today is calling for {this.state.weatherData.description}</h3>
                    <h3>With a high of {this.state.weatherData.highTemp}</h3>
                    <h3>And a low of {this.state.weatherData.lowTemp}</h3>

                </div>
            </div>
        )
    }
};

export default Weather;

