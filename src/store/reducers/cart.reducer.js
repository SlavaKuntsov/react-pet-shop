const initialState = {
	products: []
}

export const cartReducer = (state = initialState, { type, payload }) => {
	switch (type) {
		case 'ADD_TO_CART':
			return {
				...state,
				products:
					Array.isArray(state.products) &&
					state.products.some(p => p.id === payload.id)
						? state.products.filter(p => p.id !== payload.id)
						: [...state.products, payload]
			}
		case 'DELETE_FROM_CART':
			return {
				
			}
		case 'CHANGE_COUNT':
			return {
				...state,
				products: state.products.some(p => p.id === payload.id)
					? state.products.map(p => {
							if (p.id === payload.id) {
								return { ...p, count: payload.count }
							}
							return p
					})
					: state.products
			}
		case 'UPDATE_PRODUCT':
			const { id, property, value } = payload // Предполагается, что payload содержит id, свойство (property) и значение (value) для обновления

			if (!Array.isArray(state.products)) {
				return state // Возвращаем неизмененное состояние, если products не является массивом
			}

			const updatedProducts = state.products.map(product => {
				if (product.id === id) {
					return {
						...product,
						[property]: value // Обновляем свойство объекта по идентификатору
					}
				}
				return product
			})

			return {
				...state,
				products: updatedProducts
			}
		default:
			return state
	}
}
