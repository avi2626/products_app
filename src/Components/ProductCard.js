import React from 'react';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
const Card = styled.div`
	width: 100%;
	display: flex;
`;

const ProductTitle = styled.p`
	font-size: 1rem;
`;
const ProductSubTitle = styled.p`
	font-size: 14px;
`;
const DeleteButton = styled.button`
	margin-left: auto;
`;

export default function ProductCard({ id }) {
	const dispatch = useDispatch();
	const productData = useSelector((state) => state.entities.products)?.find(
		(x) => x.id === id
	);
	return (
		<Card>
			<img
				style={{ width: 50, height: 50 }}
				src='https://my.yavo.app/static/media/shooting-stars.ad2106121d7ae130f3fe451ee9538bcd.svg'
			/>
			<div style={{ display: 'flex', flexDirection: 'column' }}>
				<ProductTitle>{productData.Name}</ProductTitle>
				<ProductSubTitle>{productData.Description}</ProductSubTitle>
			</div>
			<DeleteButton
				onClick={() => dispatch({ type: 'DELETE_PRODUCT', deleteDataID: id })}
			>
				Delete
			</DeleteButton>
		</Card>
	);
}
