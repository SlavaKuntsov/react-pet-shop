const actions = {
	addToCart: data => console.log('data: ', data) || ({
		type: 'ADD_TO_CART',
		payload: data
	}),
	changeCount: data => ({
		type: 'UPDATE_PRODUCT',
		payload: data
	}),
	deleteItem: data => ({
		type: 'DELETE_FROM_CART',
		payload: data
	})
}

export default actions
