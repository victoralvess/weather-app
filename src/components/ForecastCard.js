import React, { Component } from "react";

import PropTypes from 'prop-types';

class ForecastCard extends Component {

  render() {
    const { day, icon, minTemperature, maxTemperature } = this.props;
    const imageTitle = `${day} Forecast Icon`;
    return (
      <div className="forecast-card">
        <h1 className="forecast-card__day-name">{day}</h1>
        <img className="forecast-card__icon" src={`${icon}`} alt={imageTitle} title={imageTitle} />
        <div className="forecast-card__temperatures">
          <span className="forecast-card__temperatures--maximum">{maxTemperature}</span>
          <span className="forecast-card__temperatures--minimum">{minTemperature}</span>
        </div>
      </div>
    );
  }
}

ForecastCard.propTypes = {
  day: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  minTemperature: PropTypes.string.isRequired,
  maxTemperature: PropTypes.string.isRequired,
}

export default ForecastCard;