import { Link } from 'react-router-dom'
import styled from 'styled-components'

export default function SpeciesCard({ image, name, link }) {
	return (
		<Card to={link}>
			<img src={image} alt='img' />
			<div className='text'>
				<p>{name}</p>
			</div>
		</Card>
	)
}

const Card = styled(Link)`
	display: flex;
	flex: 0 1 250px;
	flex-flow: column;
	align-items: center;
	img {
		width: 100%;
	}
	.text {
		background: #e9e9e977;
		width: 100%;
		border-radius:  0 0 30px 30px;
	}
	p {
		color: #000;
		font-size: 25px;
		font-style: normal;
		font-weight: 500;
		line-height: normal;
		padding: 25px 0 45px;
		text-align: center;
	}
`
