import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

import itemAction from 'store/actions/item.action';

export default function PicksCard({ id, image, name, description, path, price, inStock }) {
	
	const dispatch = useDispatch()

	return (
		<Card
			to={path}
			onClick={() => {
				dispatch(
					itemAction.openItem({
						id: id,
						name: name,
						image: image,
						price: price,
						description: description,
						inStock: inStock,
						count: 1
					})
				)
			}}
		>
			<img src={image} alt='img' />
			<p>{name}</p>
			<h5>{price}</h5>
		</Card>
	)
}

const Card = styled(Link)`
	display: flex;
	flex: 0 0 300px;
	flex-flow: column;
	align-items: center;
	border-radius: 30px;
	border: 1px solid #969696;
	gap: 20px;
	padding: 35px 30px 25px;
	p {
		color: #000;
		font-family: Roboto;
		font-size: 15px;
		font-style: normal;
		font-weight: 400;
		line-height: normal;
	}
	h5 {
		color: #000;
		font-family: Roboto;
		font-size: 25px;
		font-style: normal;
		font-weight: 400;
		line-height: normal;
	}
`
