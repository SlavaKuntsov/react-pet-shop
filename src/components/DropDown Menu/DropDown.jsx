import { useState } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

export default function DropDown({ children, links }) {
	const [isOpen, setIsOpen] = useState(false)

	return (
		<DropDownBlock>
			<button onClick={() => setIsOpen(p => !p)}>{children}</button>
			{isOpen && (
				<ul>
					{links.map((item, id) => {
						return (
							<Link to={item.to} onClick={() => setIsOpen(false)} key={id}>
								{item.title}
							</Link>
						)
					})}
				</ul>
			)}
		</DropDownBlock>
	)
}

const DropDownBlock = styled.div`
	flex-flow: column;
	display: flex;
	justify-content: center;
	align-items: center;
	gap: 10px;
	position: relative;
	text-align: center;
	button {
		padding: 0 10px;
		color: #000;
		font-family: Roboto;
		font-size: 20px;
		font-style: normal;
		font-weight: 600;
		z-index: 10;
	}
	ul {
		background: white;
		border: 1px solid #9a9a9a;
		border-radius: 4px;
		position: absolute;
		top: 40px;
		flex-flow: column;
		display: flex;
		a {
			padding: 5px 25px;
			color: #000;
			font-family: Roboto;
			font-size: 18px;
			font-style: normal;
			font-weight: 500;
			z-index: 5;
		}
	}
`
