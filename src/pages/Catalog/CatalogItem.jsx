import { Breadcrumb } from 'antd'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useLocation } from 'react-router-dom'
import styled from 'styled-components'

import { maxWidth } from 'utils/StyledComponents'

import AddingCount from 'components/Button/AddingCount'

import CartAction from '../../store/actions/cart.action'

import cartImg from 'assets/icons/cartWhite.svg'
import deleteImg from 'assets/icons/delete.svg'

export default function CatalogItem() {
	const dispatch = useDispatch()

	const item = useSelector(state => state.item)
	console.log('item in catalog item: ', item)
	const cart = useSelector(state => state.cart)
	console.log('cart.products: ', cart.products)

	// if(cart.products.some(cart => cart.id === item.id)) {
	// 	console.log('find: ' + item.id)
	// }
	// else{
	// 	console.log('none')
	// }

	const [itemCount, setItemCount] = useState(1)

	const { pathname } = useLocation()

	const lastSlashIndex = pathname.lastIndexOf('/')
	const substringBeforeLastSlash = pathname.substring(0, lastSlashIndex)

	return (
		<CatalogWrapper>
			<Breadcrumb
				separator='>'
				items={[
					{
						title: 'Home',
						href: '/'
					},
					{
						title: 'Catalog',
						href: `${substringBeforeLastSlash}`
					},
					{
						title: 'Item'
					}
				]}
			/>
			<Catalog>
				<img src={item.image} alt='' />
				<div className='main'>
					<h2>{item.name}</h2>
					<h4>{item.description}</h4>
					<h3>${item.price} USD</h3>
					{/* <h3>${item.price * itemCount} USD</h3> */}
					<Buttons>
						<AddingCount
							startCount={itemCount}
							count={count => setItemCount(count)}
						/>
						<div
							onClick={() => {
								dispatch(
									CartAction.addToCart({
										id: item.id,
										name: item.name,
										image: item.image,
										price: item.price,
										description: item.description,
										inStock: item.inStock,
										count: itemCount
									})
								)
							}}
							className={
								Array.isArray(cart.products) &&
								cart.products.some(cart => cart.id === item.id)
									? 'delete'
									: 'buy'
							}
						>
							{cart.products &&
							cart.products.some(cart => cart.id === item.id) ? (
								<>
									<img src={cartImg} alt='cart' />
									<p>Delete from cart</p>
								</>
							) : (
								<>
									<img src={deleteImg} alt='cart' />
									<p>Add to cart</p>
								</>
							)}
						</div>
					</Buttons>
				</div>
			</Catalog>
		</CatalogWrapper>
	)
}

const CatalogWrapper = styled.div`
	flex-flow: column;
	display: flex;
	${maxWidth}
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
	@media (width <= 480px) {
		margin: 60px auto;

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

const Catalog = styled.div`
	flex-flow: row;
	display: flex;
	justify-content: space-around;
	gap: 100px;
	> img {
		width: 40%;
		transform: scale(0.6);
	}
	.main {
		width: 50%;
		padding: 100px 0;
		flex-flow: column;
		display: flex;
		gap: 40px;
		h2 {
			color: #000;
			font-family: Abhaya Libre ExtraBold;
			font-size: 40px;
			font-style: normal;
			font-weight: 800;
			line-height: normal;
		}
		h3 {
			color: #000;
			font-family: Roboto;
			font-size: 30px;
			font-style: normal;
			font-weight: 400;
			line-height: normal;
		}
		h4 {
			color: #000;
			font-family: Roboto;
			font-size: 20px;
			font-style: normal;
			font-weight: 400;
			line-height: normal;
		}
	}
	@media (width <= 480px) {
		margin: 50px 20px 100px;
		flex-flow: column;
		align-items: center;
		gap: 30px;
		> img {
			width: 60%;
			transform: scale(1);
		}
		.main {
			padding: 0;
			width: 100%;
		}
	}
`
const Buttons = styled.div`
	flex-flow: row;
	display: flex;
	gap: 100px;
	justify-content: space-between;
	.buy,
	.delete {
		flex-flow: row;
		display: flex;
		align-items: center;
		gap: 40px;
		border-radius: 10px;
		padding: 10px 60px;
		img {
			width: 27px;
			height: 27px;
		}
		p {
			text-align: center;
			width: 140px;
			color: white;
			font-family: Roboto;
			font-size: 20px;
			font-style: normal;
			font-weight: 300;
			line-height: normal;
			white-space: nowrap;
		}
	}
	.buy {
		background: #dc6919;
	}
	.delete {
		background: #676767;
	}
	@media (width <= 480px) {
		flex-flow: column;
		gap: 40px;
		.buy,
		.delete {
			padding: 15px 60px;
		}
	}
`
