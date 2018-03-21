import React, { Component } from 'react';

import ForecastCard from './ForecastCard';

export default class ForecastsList extends Component {

  constructor(props) {
    super(props);
    this.state = {
      forecasts: []
    };

    /* From API Icons To public/icons Icons */
    this.iconsMapping = {
      'clear-day': 'clear-day',
      'clear-night': 'clear-night',
      'partly-cloudy-day': 'partly-cloudy',
      'partly-cloudy-night': 'partly-cloudy-night',
      rain: 'rainy-weather',
      snow: 'snow-weather',
      sleet: 'snow-weather',
      wind: 'wind-weather',
      fog: 'haze-weather',
      cloudy: 'cloudy-weather',
    }

    this.days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  }

  async componentDidMount() {
    const locationResponse = await fetch('https://location.services.mozilla.com/v1/geolocate?key=test');
    const position = await locationResponse.json();
    const { lat, lng } = position.location;
    const forecastsResponse = await fetch(
      `//localhost:4000/api/v1/json?lat=${lat}&lng=${lng}&units=si`
    );
    const data = await forecastsResponse.json();
    this.setState({
      forecasts: data.daily.data
    });
  }

  render() {
    const { forecasts } = this.state;
    return (
      <div className="forecasts-list">
        {
          (forecasts.length > 0) ? forecasts.map((forecast, i) => {
            let time = forecast.time * 1000;
            let date = new Date(time);
            let day = this.days[date.getDay()].substr(0, 3);
            return (
              <ForecastCard
                key={i}
                day={day}
                icon={`./icons/${this.iconsMapping[forecast.icon]}.png`}
                minTemperature={`${Math.round(forecast.temperatureMin)}ºC`}
                maxTemperature={`${Math.round(forecast.temperatureMax)}ºC`}/>
            );
          }) : (
                <div className="progress-bar">
                  <div className="progress"></div>
                </div>
              )
        }
      </div>
    )
  }
}