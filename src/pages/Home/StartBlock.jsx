import styled from 'styled-components'

import image from 'assets/background/home.png'
import Button from 'components/Button/Button'

export default function StartBlock() {
	return (
		<Image>
			<Text>
				<h2>Prices are falling!</h2>
				<p>
					This October, pile on the savings and welcome autumn with a
					well-stocked cupboard.
				</p>
				<Button to='/'>Explore More</Button>
			</Text>
		</Image>
	)
}

const Image = styled.div`
	width: 100%;
	height: 590px;
	background: url(${image}) center/cover no-repeat;
	@media (width <= 480px) {
		background: url(${image}) center/cover no-repeat;
	}
`

const Text = styled.div`
	padding: 250px 140px 0;
	display: flex;
	flex-flow: column;
	width: min-content;
	h2 {
		white-space: nowrap;
		color: #091859;
		font-size: 55px;
		font-weight: 800;
	}
	p {
		color: #030b2d;
		font-size: 17px;
		font-weight: 400;
		margin: 0 0 35px;
	}
	@media (width <= 480px) {
		padding: 200px 0 0 0;
		margin: 0 auto;
		text-align: center;
		align-items: center;
		h2 {
			font-size: 40px;
		}
		p {
			font-size: 20px;
			margin: 0 0 35px;
		}
	}
`
