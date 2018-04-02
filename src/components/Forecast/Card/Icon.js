import React from 'react';
import styled from 'styled-components';

const StyledIcon = styled.img`
	width: 60px;
	height: 60px;
`;

export default ({ path }) => {
	return <StyledIcon src={path} />;
};
