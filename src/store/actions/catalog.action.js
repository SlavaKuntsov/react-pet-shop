const actions = {
	addFilter: data => ({
		type: 'ADD_FILTER',
		payload: data
	}),
	resetFilter: () => ({
		type: 'RESET_FILTER'
	})
}

export default actions
