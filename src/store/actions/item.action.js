const actions = {
	openItem: data => ({
		type: 'OPEN_ITEM',
		payload: data
	}),
	closeItem: () => ({
		type: 'CLOSE_ITEM'
	})
}

export default actions
