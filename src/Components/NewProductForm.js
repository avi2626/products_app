import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

export default function NewProductForm() {
	const dispatch = useDispatch();
	const [name, setName] = useState('');
	const [description, setDescription] = useState('');
	const [price, setPrice] = useState(null);

	return (
		<form
			style={{ display: 'flex', flexDirection: 'column' }}
			onSubmit={(e) => {
				e.preventDefault();
				dispatch({
					type: 'ADD_PRODUCT',
					newData: {
						Name: name,
						Description: description,
						Price: price,
						id: Math.floor(Math.random() * 1e6),
						Creation: new Date(),
					},
				});
				setName('');
				setDescription('');
				setPrice(null);
			}}
		>
			<label>Name</label>
			{/* {errorState['Name'] ? <ErrorText description={errorState.Name} />:null} */}
			<input
				onChange={(e) => setName(e.target.value)}
				value={name}
				type={'text'}
			/>
			<label>Description</label>

			<input
				onChange={(e) => setDescription(e.target.value)}
				value={description}
				type={'text'}
			/>
			<label>Price</label>

			<input
				onChange={(e) => setPrice(e.target.value)}
				value={price}
				type={'number'}
			/>
			<button type={'submit'}>add</button>
		</form>
	);
}
