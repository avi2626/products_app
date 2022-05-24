import React, { useState } from 'react';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import ProductCard from './ProductCard';
import NewProductForm from './NewProductForm';

export default function ProductList() {
	const [search, setSearch] = useState('');
	const productData = useSelector((state) => state.entities.products);
	const [showForm, setShowForm] = useState(false);
	return (
		<div style={{ display: 'flex' }}>
			<div style={{ display: 'flex', flexDirection: 'column' }}>
				<div style={{ display: 'flex' }}>
					<button
						onClick={() => setShowForm(true)}
						style={{ display: 'block' }}
					>
						add
					</button>
					<input
						value={search}
						onChange={(e) => setSearch(e.target.value)}
						placeholder='search'
					/>
				</div>
				<div style={{ display: 'flex', flexDirection: 'column' }}>
					{productData
						.filter((x) => x.Name.includes(search))
						.map((product) => (
							<ProductCard key={product.id} id={product.id} />
						))}
				</div>
			</div>
			{showForm ? <NewProductForm /> : null}
		</div>
	);
}
