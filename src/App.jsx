import Home from 'pages/Home'
import {
	Route,
	RouterProvider,
	createBrowserRouter,
	createRoutesFromElements
} from 'react-router-dom'

import Layout from 'components/Layout/Layout'
import Cart from 'pages/Cart'
import Catalog from 'pages/Catalog'
import CatalogItem from 'pages/Catalog/CatalogItem'
import HelpAdvice from 'pages/HelpAdvice'
import HelpAdviceItem from 'pages/HelpAdvice/HelpAdviceItem'

import { dogFood, dogOther, catFood, catOther, otherAnimals } from 'utils/global'
import { A_dogFood, A_dogOther, A_catFood, A_catOther, A_otherAnimals } from 'utils/storage/sectionItems'
import { gridItems } from 'utils/storage/helpAdviceItems'

export default function App() {

	const catalogSections = [
		{
			name: 'Dog Food',
			data: A_dogFood,
			path: `/catalog/${dogFood}`,
		},
		{
			name: 'Dog Other',
			data: A_dogOther,
			path: `/catalog/${dogOther}`,
		},
		{
			name: 'Cat Food',
			data: A_catFood,
			path: `/catalog/${catFood}`,
		},
		{
			name: 'Cat Other',
			data: A_catOther,
			path: `/catalog/${catOther}`,
		},
		{
			name: 'Other Animals',
			data: A_otherAnimals,
			path: `/catalog/${otherAnimals}`,
		},
	]

	const helpAdviceSection = [
		gridItems[0],
		gridItems[1],
		gridItems[2],
		gridItems[3],
		gridItems[4],
	]

	const router = createBrowserRouter(
		createRoutesFromElements(
			<Route  path='/' element={<Layout />}>
				<Route path='/' element={<Home />} />
				{catalogSections.map((item, id) => {
					return <Route
						path={item.path}
						element={
							<Catalog
								name={item.name}
								productsArray={item.data}
							/>
						}
						key={id}
				/>
				})}
				<Route path='/catalog/:section/:itemId' element={<CatalogItem />} />
				<Route path='/cart' element={<Cart />} />
				<Route path='/help-advice' element={<HelpAdvice />} />
				<Route path='/help-advice/:itemId' element={<HelpAdviceItem />} />
				{helpAdviceSection.map((item, id) => {
					return <Route
						path={`/help-advice/${id + 1}`}
						element={
							<HelpAdviceItem
								image={item.image}
								date={item.date}
								title={item.title}
								description={item.description}
								allDescription={item.allDescription}
								key={id}
							/>
						}
						key={id}
				/>
				})}
			</Route>
		)
	)

	return <RouterProvider router={router} />
}
