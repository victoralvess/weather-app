import React from 'react';
import styled from 'styled-components';

const StyledDay = styled.h1`
  color: #a1a1a1;
`;

const days = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday'
];

export default ({ time }) => {
  const day = days[new Date(time).getDay()].substr(0, 3);

  return <StyledDay>{day}</StyledDay>;
};
