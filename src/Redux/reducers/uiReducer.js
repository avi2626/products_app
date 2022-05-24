const initialState = { productIdInEdit: null, lastProductId: null,productForm:"hide/edit/add"};

export default function (state = initialState, action) {
	switch (action.type) {
		case 'UPDATE_PRODUCT_ID_IN_EDIT': {
			return {
				...state,
				productIdInEdit: action.productIdInEdit,
			};
		}
		case 'UPDATE_LAST_PRODUCT_ID': {
			return {
				...state,
				lastProductId: action.lastProductId,
			};
		}
		default:
			return state;
	}
}
