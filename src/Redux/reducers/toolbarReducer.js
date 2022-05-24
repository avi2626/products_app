const initialState = { sortBy: null, filterText: '' };

export default function (state = initialState, action) {
	switch (action.type) {
		case 'ADD_SORT_BY': {
			return {
				...state,
				sortBy: action.sortBy,
			};
		}
		case 'ADD_FILTER_TEXT': {
			return {
				...state,
				filterText: action.filterText,
			};
		}
		default:
			return state;
	}
}
