import React from 'react';
import styled from 'styled-components';

import Card from './Forecast/Card';
import Day from './Forecast/Card/Day';
import Icon from './Forecast/Card/Icon';
import Temperatures from './Forecast/Card/Temperatures';
import Temperature from './Forecast/Card/Temperature';

const iconsMapping = {
  'clear-day': 'clear-day',
  'clear-night': 'clear-night',
  'partly-cloudy-day': 'partly-cloudy',
  'partly-cloudy-night': 'partly-cloudy-night',
  rain: 'rainy-weather',
  snow: 'snow-weather',
  sleet: 'snow-weather',
  wind: 'wind-weather',
  fog: 'haze-weather',
  cloudy: 'cloudy-weather'
};

const StyledList = styled.div`
  border-radius: 4px;

  & > *:nth-child(-n + 1) {
    border-top-left-radius: 4px;
    border-bottom-left-radius: 4px;
  }

  & > :nth-last-child(-n + 1) {
    border-top-right-radius: 4px;
    border-bottom-right-radius: 4px;
  }
`;

export default ({ forecasts }) => {
  return (
    <StyledList>
      {forecasts.map((forecast, i) => {
        return (
          <Card key={i}>
            <Day time={forecast.time * 1000} />
            <Icon path={`./icons/${iconsMapping[forecast.icon]}.png`} />
            <Temperatures>
              <Temperature min="true">
                {Math.round(forecast.temperatureMin)}ºC
              </Temperature>
              <Temperature max="true">
                {Math.round(forecast.temperatureMax)}ºC
              </Temperature>
            </Temperatures>
          </Card>
        );
      })}
    </StyledList>
  );
};
