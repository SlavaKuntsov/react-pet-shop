import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import { ChakraProvider } from '@chakra-ui/react'


import App from 'src/App'

import { store } from 'store/store'

import './reset.css'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<Provider store={store}>
			<ChakraProvider>
				<App />
			</ChakraProvider>
		</Provider>
	</React.StrictMode>
)
