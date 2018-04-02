import styled, { keyframes } from 'styled-components';

const fade = keyframes`
  0% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
`;

export default styled.div`
  background-color: white;

  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  animation: ${fade} 300ms ease-in-out 1 forwards;

  width: 100px;
  height: 140px;
  padding: 10px;
`;