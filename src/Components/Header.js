import React from 'react';
import styled from 'styled-components';

const TopBar = styled.div`
	width: 100%;
	height: 100px;
	background-color: #9fc5f8;
	color: black;
	display: flex;
	align-items: center;
`;

const Title = styled.h1`
	font-size: 20px;
	padding-left: 20px;
`;

export default function Header() {
	return (
		<TopBar>
			<Title>My Store</Title>
		</TopBar>
	);
}
