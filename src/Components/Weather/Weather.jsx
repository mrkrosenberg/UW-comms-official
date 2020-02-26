import React, { Component } from 'react'
import Axios from 'axios';

// Stylesheet
import './Weather.scss'

// Bootstrap Imports
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

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
            // <Container>
            //     <Row>
            //         <Col md={1} />
            //         <Col className="weather-container" md={10}>
            <div className="weather-container">
                <div className="inner-weather-container">
                    <header className="title-container text-center">
                        <h1>Local Weather @ Union West</h1>
                        <h6>Today is calling for {this.state.weatherData.description}</h6>
                    </header>
                    {/* <Container>
                        <Row>
                            <Col md={6}> */}
                                <div className="icon-container text-center">
                                    <img 
                                        className="weather-icon" 
                                        src={this.state.weatherData.icon} 
                                        alt="weather-icon"
                                    />
                                </div>
                            {/* </Col>
                            <Col md={6}> */}
                            <div className="data-container text-center">
                                <h6>It is currently {this.state.weatherData.currentTemp}</h6>
                                <h6>and feels like {this.state.weatherData.feelsLike}</h6>
                                <h6>With a high of {this.state.weatherData.highTemp}</h6>
                                <h6>And a low of {this.state.weatherData.lowTemp}</h6>
                            </div> 
                            {/* </Col>
                        </Row>
                    </Container>  */}
                </div>
                                                          
            </div>
            //         </Col>
            //         <Col md={1} />
            //     </Row>
            // </Container>
        )
    }
};

export default Weather;

