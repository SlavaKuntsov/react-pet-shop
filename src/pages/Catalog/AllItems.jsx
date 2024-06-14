import { useSelector } from 'react-redux'
import styled from 'styled-components'

import CatalogCard from 'components/Card/CatalogCard'
import { useLocation } from 'react-router-dom'

export default function AllItems({ productsArray }) {
	// console.log('maxPrice: ', maxPrice);
	// console.log('minPrice: ', minPrice);
	// console.log('inStock: ', inStock)

	const { pathname } = useLocation()

	const catalog = useSelector(state => state.catalog)
	console.log('catalog: ', catalog)

	const filteredItems = productsArray.filter(item => {
		// Фильтрация по наличию товара в наличии (inStock)
		if (catalog.inStock === 'inStock' && !item.inStock) {
			return false
		}
		if (catalog.inStock === 'notInStock' && item.inStock) {
			return false
		}
		// Фильтрация по минимальной цене (minPrice)
		if (catalog.minPrice && item.price < catalog.minPrice) {
			return false
		}
		// Фильтрация по максимальной цене (maxPrice)
		if (catalog.maxPrice && item.price > catalog.maxPrice) {
			return false
		}
		return true
	})

	return (
		<Items>
			{filteredItems.map((item, id) => {
				return <CatalogCard pathname={pathname} {...item} key={id} />
			})}
		</Items>
	)
}

const Items = styled.div`
	/* flex-flow: wrap;
	display: flex;
	align-items: center;
	 */
	gap: 50px;
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(250px, 0fr));
	width: 100%;
	@media (width <= 480px) {
		margin: 30px 0 0 0;
		justify-content: center;
	}
`
