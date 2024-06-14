import { Breadcrumb } from 'antd'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'

import { maxWidth } from 'utils/StyledComponents'

import AddingCount from 'components/Button/AddingCount'

import deleteImg from 'assets/icons/delete.svg'

import CartAction from 'store/actions/cart.action'
// import CartAction from '../../src/store/actions/cart.action'

export default function Cart() {
	const dispatch = useDispatch()

	const cart = useSelector(state => state.cart)
	// console.log('cart: ', cart)

	const [itemCount, setItemCount] = useState()
	// console.log('itemCount: ', itemCount)
	// const [itemId, setItemId] = useState()

	const [itemStates, setItemStates] = useState([])

	const handleItemClick = index => {
		const updatedItemStates = [...itemStates]
		updatedItemStates[index] = !updatedItemStates[index]
		setItemStates(updatedItemStates)
	}

	return (
		<CartBlock>
			<Breadcrumb
				separator='>'
				items={[
					{
						title: 'Home',
						href: '/'
					},
					{
						title: 'Cart'
					}
				]}
			/>
			<CartItems>
				{cart.products && cart.products.length != 0 ? (
					cart.products.map((item, id) => {
						const itemCountC = item.count
						return (
							<Item key={id}>
								<img src={item.image} alt='item' />
								<div className='item'>
									<h5>
										{item.name} * {itemCountC}
									</h5>
									<div className='footer'>
										<span>
											{/* {item.price} * {itemCountC} ={' '}
											{item.price * itemCountC} */}
											${item.price}
										</span>
										<div className='buttons'>
											<AddingCount
												startCount={item.count}
												count={count => {
													setItemCount(count)
													// handleItemClick(count, id)
													dispatch(
														CartAction.changeCount({
															id: item.id,
															property: 'count',
															value: count
														})
													)
												}}
											/>
											<img
												onClick={() => {
													dispatch(
														CartAction.addToCart({
															id: item.id
														})
													)
												}}
												src={deleteImg}
												alt='item'
											/>
										</div>
									</div>
								</div>
							</Item>
						)
					})
				) : (
					<h1>The cart is empty</h1>
				)}
			</CartItems>
		</CartBlock>
	)
}

const CartBlock = styled.div`
	position: relative;
	top: 0;
	left: 0;
	${maxWidth}
	margin: 60px auto;
	font-size: 25px;
	nav {
		width: 100%;
		a,
		span {
			color: #000;
			font-family: Roboto;
			font-size: 23px;
			font-style: normal;
			font-weight: 300;
			line-height: normal;
		}
		li:last-child {
			span {
				font-weight: 400;
			}
		}
	}
	h1 {
		text-align: center;
		font-family: Roboto;
		font-size: 30px;
		font-style: normal;
		font-weight: 400;
	}
	@media (width <= 480px) {
		nav {
			padding: 0 20px;
			width: 100%;
			a,
			span {
				font-size: 18px;
			}
		}
	}
`
const CartItems = styled.div`
	margin: 100px 0 200px;
	flex-flow: column;
	display: flex;
	align-items: center;
	gap: 60px;
	justify-content: center;
	@media (width <= 480px) {
		gap: 40px;
		margin: 50px 0 100px;
		padding: 0 20px;
	}
`

const Item = styled.div`
	width: 100%;
	flex-flow: row;
	display: flex;
	justify-content: space-between;
	gap: 40px;
	padding: 30px 60px;
	border-radius: 40px;
	background: #dc6919;
	color: white;
	.item {
		width: 100%;
		flex-flow: column;
		display: flex;
		gap: 20px;
		justify-content: space-evenly;
		h5 {
			font-family: Abhaya Libre ExtraBold;
			font-size: 30px;
			font-style: normal;
			font-weight: 800;
			line-height: normal;
		}
		.footer {
			flex-flow: row;
			display: flex;
			gap: 20px;
			justify-content: space-between;
			align-items: center;
			span {
				white-space: nowrap;
			}
			.buttons {
				flex-flow: row;
				display: flex;
				gap: 20px;
				img {
					width: 40px;
					padding: 10px;
				}
			}
		}
	}
	@media (width <= 480px) {
		gap: 20px;
		padding: 20px 30px;
		img {
			margin: auto 0;
			width: 120px;
			height: 100px;
		}
		.item {
			z-index: 10;
			h5 {
				font-size: 18px;
			}
			.footer {
				flex-flow: column;
				display: flex;
				gap: 20px;
				justify-content: space-between;
				align-items: start;
				span {
					white-space: nowrap;
					font-size: 15px;
				}
				.buttons {
					align-items: center;
					flex-flow: row;
					display: flex;
					gap: 10px;
					img {
						z-index: 20;
						width: 20px;
						height: 20px;
						padding: 0px;
					}
				}
			}
		}
	}
`
