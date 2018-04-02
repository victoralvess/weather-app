import React from 'react';
import styled, { keyframes } from 'styled-components';

const progressAnimation = keyframes`
  0%, 30% {
    width: 0%;
  }
  30% {
    width: 20%;
  }
  40% {
    width: 70%;
  }
  60% {
    width: 65%;
  }
  70%, 90% {
    width: 80%;
  }
  90%, 95% {
    width: 98%;
  }
  95%, 97% {
    width: 96%;
  }
  100% {
    width: 100%;
  }
`;

export const ProgressBar = styled.div`
  width: 200px;
  height: 25px;
  background: white;
  border: 4px solid white;
  box-shadow: 0px 20px 25px -10px rgba(0, 0, 0, 0.3);
`;

export const Progress = styled.div`
  height: 100%;
  width: 0%;
  background-color: #8c70df;
  animation: ${progressAnimation} linear 4s infinite;
`;

export default (props) => (
  <ProgressBar>
    <Progress />
  </ProgressBar>
);
