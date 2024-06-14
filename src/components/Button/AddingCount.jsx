import { useEffect, useState } from 'react'
import styled from 'styled-components'

export default function AddingCount({ startCount, count }) {
	const [itemCount, setItemCount] = useState(startCount)

	useEffect(() => {
		count && count(itemCount)
	}, [itemCount])

	return (
		<AddingButton>
			<span
				onClick={() => {
					itemCount != 1 ? setItemCount(p => p - 1) : null
				}}
			>
				-
			</span>
			<p>{itemCount}</p>
			<span
				onClick={() => {
					setItemCount(p => p + 1)
				}}
			>
				+
			</span>
		</AddingButton>
	)
}

const AddingButton = styled.div`
	flex-flow: row;
	display: flex;
	gap: 20px;
	justify-content: space-between;
	align-items: center;
	background: #e9e9e9;
	border-radius: 10px;
	padding: 10px 30px;
	width: min-content;
	span {
		color: #000;
		font-family: Roboto;
		font-size: 30px;
		font-style: normal;
		font-weight: 300;
		line-height: normal;
	}
	p {
		color: #000;
		font-family: Roboto;
		font-size: 25px;
		font-style: normal;
		font-weight: 500;
		line-height: normal;
	}
	@media (width <= 480px) {
		height: min-content;
		p{
			font-size: 18px;
		}
	}
`
