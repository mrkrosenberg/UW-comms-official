import React, { Component } from 'react'
import Axios from 'axios';

// Stylesheet
import './Weather.scss';

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

            // console.log(response.data)
            this.setState({
                weatherData: {
                    main: response.data.weather[0].main,
                    description: response.data.weather[0].description,
                    icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
                    currentTemp: Math.round(response.data.main.temp),
                    lowTemp: Math.round(response.data.main.temp_min),
                    highTemp: Math.round(response.data.main.temp_max),
                    feelsLike: Math.round(response.data.main.feels_like)
                }
            })
    };

    componentDidMount() {
        this.getWeatherData();
    };


    render() {
        return (
            <div className="weather-container">
                <div className="inner-weather-container">
                    <header className="title-container text-center">
                        <h1>Local Weather @ Union West</h1>
                        <h6>Today is calling for {this.state.weatherData.description}</h6>
                    </header>
                    <div className="icon-container text-center">
                        <img 
                            className="weather-icon" 
                            src={this.state.weatherData.icon} 
                            alt="weather-icon"
                        />
                    </div>
                    <div className="data-container text-center">
                        <p className="weather-data">Currently: {this.state.weatherData.currentTemp}&deg;</p>
                        <p className="weather-data">Feels Like: {this.state.weatherData.feelsLike}&deg;</p>
                        <p className="weather-data">High: {this.state.weatherData.highTemp}&deg;</p>
                        <p className="weather-data">Low: {this.state.weatherData.lowTemp}&deg;</p>
                    </div>
                </div>                                           
            </div>
        )
    }
};

export default Weather;

