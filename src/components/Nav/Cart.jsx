import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

import cartImage from 'assets/icons/cart.svg'

export default function Cart() {
	const cart = useSelector(state => state.cart)
	console.log('cart nav: ', cart)

	return (
		<CartBlock to='/cart'>
			<img src={cartImage} alt='cart' />
			<span>{cart.products.length}</span>
		</CartBlock>
	)
}

const CartBlock = styled(Link)`
	position: absolute;
	right: 0;
	top: 10px;
	z-index: 20;
	span {
		bottom: -10px;
		right: -10px;
		position: absolute;
		background: #dc6919;
		border-radius: 50%;
		flex-flow: column;
		display: flex;
		justify-content: center;
		align-items: center;
		width: 25px;
		height: 25px;
		color: white;
		font-size: 16px;
		font-weight: 500;
	}
	@media (width <= 480px) {
		right: 80px;
		top: 13px;
		img {
			width: 25px;
		}
		span {
			font-size: 12px;
			width:  20px;
			height: 20px;
		}
	}
`
