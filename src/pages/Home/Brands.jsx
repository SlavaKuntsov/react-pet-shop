import styled from 'styled-components'

import Title from 'components/Typography/Title'

import brand1 from 'assets/brands/b1.png'
import brand2 from 'assets/brands/b2.png'
import brand3 from 'assets/brands/b3.png'
import brand4 from 'assets/brands/b4.png'
import brand5 from 'assets/brands/b5.png'
import brand6 from 'assets/brands/b6.png'
import brand7 from 'assets/brands/b7.png'

import { center } from 'utils/StyledComponents'

export default function Brands() {
	const allImage = [brand1, brand2, brand3, brand4, brand5, brand6, brand7]

	return (
		<BrandsBlock>
			<Title>Brands you know and trust</Title>
			<div className='image-container'>
				{allImage.map((image, id) => {
					return <img src={image} alt='brand' key={id} />
				})}
			</div>
			<hr />
		</BrandsBlock>
	)
}

const BrandsBlock = styled.div`
	${center}
	margin: 35px 0 0;
	gap: 40px;
	h2 {
		color: #091859;
		font-size: 40px;
		font-weight: 800;
	}
	.image-container {
		width: 100%;
		display: flex;
		flex-flow: row;
		align-items: center;
		justify-content: space-evenly;
	}
	hr {
		background: #969696;
		height: 0.5px;
		width: 100%;
	}

	@media (width <= 480px) {
		h2 {
			font-size: 35px;
			line-height: 95%;
			margin: 0 20px;
		}
		.image-container{
			display: grid;
			grid-template-columns: repeat(2, minmax(0, 1fr));
			justify-items: center;
			gap: 10px;
		}
	}
`
