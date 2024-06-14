import { Link } from 'react-router-dom'
import styled from 'styled-components'

export default function GridImage({
	id,
	className,
	image,
	date,
	title,
	description
}) {
	return (
		<GridImageBlock
			to={`/help-advice/${id}`}
			$image={image}
			className={className}
		>
			<div className='image'></div>
			<span>{date}</span>
			<h3>{title}</h3>
			<p>{description}</p>
		</GridImageBlock>
	)
}

const GridImageBlock = styled(Link)`
	flex-flow: column;
	display: flex;
	align-items: center;
	justify-content: center;
	.image {
		width: 100%;
		min-height: 320px;
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
	}
	h3 {
		color: #000;
		font-family: Abhaya Libre ExtraBold;
		font-style: normal;
		font-weight: 800;
		line-height: normal;
	}
	p {
		color: #000;
		font-family: Roboto;
		font-style: normal;
		font-weight: 300;
		line-height: normal;
		text-align: center;
	}
	@media (width <= 480px) {
	}
`
