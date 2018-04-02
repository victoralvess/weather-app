import styled from 'styled-components';

export default styled.span`
  color: ${props => (props.max ? '#c8c8c8' : '#d8d8d8')};
`;