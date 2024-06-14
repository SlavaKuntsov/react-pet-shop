const initialState = {
	id: null,
	name: null,
	image: null,
	price: null,
	description: null,
	inStock: false,
	count: null
}

export const itemReducer = (state = initialState, { type, payload }) => {
	switch (type) {
		case 'OPEN_ITEM':
			return {
				id: payload.id,
				name: payload.name,
				image: payload.image,
				price: payload.price,
				description: payload.description,
				inStock: payload.inStock,
			}
		case 'CLOSE_ITEM':
			return {
				...state,
				id: null,
				name: null,
				image: null,
				price: null,
				description: null,
				inStock: false
			}

		default:
			return state
	}
}
