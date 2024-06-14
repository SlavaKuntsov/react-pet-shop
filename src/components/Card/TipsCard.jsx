import { Link } from 'react-router-dom'
import styled from 'styled-components'

export default function TipsCars({ image, date, title, text, link }) {
	return (
		<Card to={link}>
			<img src={image} alt='img' />
			<span>{date}</span>
			<h5>{title}</h5>
			<p>{text}</p>
		</Card>
	)
}

const Card = styled(Link)`
	display: flex;
	flex: 1 0 400px;
	flex-flow: column;
	align-items: center;
	gap: 20px;
	text-align: center;
	img {
		width: 100%;
	}
	span {
		color: #000;
		font-size: 17px;
		font-weight: 300;
	}
	h5 {
		color: #000;
		font-size: 30px;
		font-weight: 500;
		line-height: 120%;
	}
	p {
		color: #000;
		font-size: 20px;
		font-weight: 300;
		line-height: 26px; /* 130% */
	}

	@media (width <= 480px) {
		max-width: 100%;
		width: min-content;
		gap: 15px;
		img {
			width: 100%;
			padding: 0 20px;
		}
		span {
			font-size: 15px;
		}
		h5 {
			font-size: 25px;
		}
		p {
			font-size: 18px;
		}
	}
`
