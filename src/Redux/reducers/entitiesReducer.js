const initialState = {
	products: [
		{
			id: 1,
			Name: 'Car',
			Description: 'Cool car',
			Price: 200,
			Creation: new Date('2022-02-18T07:00:00.000Z'),
		},
		{
			id: 2,
			Name: 'Cat',
			Description: 'Cool cat',
			Price: 20,
			Creation: new Date('2022-02-19T07:00:00.000Z'),
		},
	],
};

export default function (state = initialState, action) {
	switch (action.type) {
		case 'ADD_PRODUCT': {
			return {
				...state,
				products: [...state.products, action.newData],
			};
		}
		case 'UPDATE_PRODUCT': {
			return {
				...state,
				products: state.products.map((x) =>
					x.id === action.updateData.id ? action.updateData : x
				),
			};
		}
		case 'DELETE_PRODUCT': {
			return {
				...state,
				products: state.products.filter((x) => x.id !== action.deleteDataID),
			};
		}
		default:
			return state;
	}
}
