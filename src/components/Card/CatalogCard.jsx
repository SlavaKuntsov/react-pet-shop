import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

import itemAction from '../../../src/store/actions/item.action'

export default function CatalogCard({ pathname, id, image, name, price, description, inStock }) {
	
	const dispatch = useDispatch()

	const cart = useSelector(state => state.cart)

	return (
		<Card to={`${pathname}/${id}`} onClick={() => {
			dispatch(itemAction.openItem({id: id, name: name, image: image, price: price, description: description, inStock: inStock}))
		}}>
			<img src={image} alt='image' />
			<h5>{name}</h5>
			<span>${price}</span>
			{cart.products.some(cart => cart.id === id) && <p>In Card</p>}
		</Card>
	)
}

const Card = styled(Link)`
	max-width: 250px;
	flex-flow: column;
	display: flex;
	gap: 20px;
	align-items: center;
	justify-content: center;
	text-align: start;
	flex: 0 1 250px;
	position: relative;
	h5 {
		color: #515151;
		font-family: Roboto;
		font-size: 20px;
		font-style: normal;
		font-weight: 400;
		line-height: normal;
		width: 100%;
	}
	span {
		color: #000;
		font-family: Roboto;
		font-size: 25px;
		font-style: normal;
		font-weight: 400;
		line-height: normal;
		width: 100%;
	}
	p{
		position: absolute;
		top: 0;
		left: 0;
		background: #DC6919;
		border-radius: 4px;
		color: white;
		font-family: Roboto;
		font-size: 15px;
		font-style: normal;
		font-weight: 400;
		line-height: normal;
		padding: 5px 10px;
	}
`
