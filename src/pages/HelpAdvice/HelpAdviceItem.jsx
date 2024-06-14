import { Breadcrumb } from 'antd'
import styled from 'styled-components'

import { maxWidth } from 'utils/StyledComponents'

export default function HelpAdviceItem({
	image,
	date,
	title,
	description,
	allDescription
}) {
	return (
		<ItemBlock>
			<Breadcrumb
				separator='>'
				items={[
					{
						title: 'Home',
						href: '/'
					},
					{
						title: 'Help & Advice',
						href: '/help-advice'
					},
					{
						title: title
					}
				]}
			/>
			<Item $image={image}>
				<div className='image'></div>
				<h3>{title}</h3>
				<span>{date}</span>
				<p>{allDescription}</p>
			</Item>
			<p></p>
		</ItemBlock>
	)
}

const ItemBlock = styled.div`
	border-top: 1px solid #969696;
	padding: 30px 0 150px;
	${maxWidth}
	nav {
		margin: 0 0 50px 0;
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

const Item = styled.div`
	width: 100%;
	flex-flow: column;
	display: flex;
	align-items: center;
	gap: 50px;
	.image {
		width: 90%;
		min-height: 850px;
		height: 100%;
		border-radius: 30px;
		background: url(${props => props.$image}) center/cover no-repeat;
	}
	span {
		color: #000;
		font-family: Roboto;
		font-style: normal;
		font-weight: 300;
		line-height: normal;
		font-size: 20px;
	}
	h3 {
		color: #000;
		font-family: Abhaya Libre ExtraBold;
		font-style: normal;
		font-weight: 800;
		line-height: normal;
		font-size: 55px;
	}
	p {
		color: #000;
		font-family: Roboto;
		font-style: normal;
		font-weight: 300;
		line-height: normal;
		font-size: 22px;
		padding: 70px 0;
		border-top: 1px solid #969696;
		border-bottom: 1px solid #969696;
		width: 920px;
	}
	@media (width <= 480px) {
		padding: 0 20px;
		gap: 30px;
		.image {
			width: 100%;
			min-height: 400px;
			height: 100%;
			border-radius: 20px;
			background: url(${props => props.$image}) center/cover no-repeat;
		}
		span {
			font-size: 20px;
		}
		h3 {
			font-size: 40px;
		}
		p {
			color: #000;
			font-family: Roboto;
			font-style: normal;
			font-weight: 300;
			line-height: normal;
			font-size: 18px;
			padding: 40px 20px;
			border-top: 1px solid #969696;
			border-bottom: 1px solid #969696;
			width: 100%;
		}
	}
`
