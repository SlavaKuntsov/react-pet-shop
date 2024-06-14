import { Outlet, useLocation } from 'react-router-dom'
import { useEffect } from 'react'

import Footer from 'components/Footer/Footer'
import Header from 'components/Header/Header'

export default function Layout () {
	
	const { pathname } = useLocation()

	useEffect(() => {
		window.scrollTo(0, 0)
	}, [pathname])

	return (
		<>
			<Header />
			<main style={{ overflowX: 'hidden'}}>
				<Outlet />
			</main>
			<Footer />
		</>
	)
}
