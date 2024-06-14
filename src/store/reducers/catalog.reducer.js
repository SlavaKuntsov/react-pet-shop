const initialState = {
	minPrice: null,
	maxPrice: null,
	inStock: false
}

export const catalogReducer = (state = initialState, { type, payload }) => {
	switch (type) {
		case 'ADD_FILTER':
			return {
				minPrice: payload.minPrice,
				maxPrice: payload.maxPrice,
				inStock: payload.inStock
			}
		case 'RESET_FILTER':
			return {
				...state,
				minPrice: null,
				maxPrice: null,
				inStock: false
			}

		default:
			return state
	}
}
