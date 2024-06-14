import styled from 'styled-components'

import { center, maxWidth } from 'utils/StyledComponents'

import image from 'assets/background/a.png'
import Button from 'components/Button/Button'
import { dogFood } from '../../utils/global'

export default function AboutUs() {
	return (
		<AboutUsBlock id='about-us'>
			<div className='image'></div>
			<div className='text'>
				<h3>About Us</h3>
				<p>
					We are a brand made by pet lovers, for other pet lovers. Our
					love for pets is so strong that we made our family Boston
					dog, the logo of our pet store. As a family of pet lovers,
					we know exactly how to treat our canine lovers. Our brand of
					family owned pet stores offers quality nutrition and
					supplies for dogs. For over 10 years we have been helping
					loving pet owners like yourself take quality care of your
					furry friends.
				</p>
				<Button to={`/catalog/${dogFood}`}>Shop All</Button>
			</div>
		</AboutUsBlock>
	)
}

const AboutUsBlock = styled.div`
	${center}
	${maxWidth}
	flex-flow: row;
	height: 1000px;
	margin: 175px auto 150px;
	.image {
		background: url(${image}) center/cover no-repeat;
		width: 50%;
		height: 100%;
	}
	.text {
		background: #e9e9e9;
		${center}
		align-items: start;
		padding: 0 75px;
		width: 50%;
		height: 100%;
		gap: 25px;
	}
	h3 {
		color: #000;
		font-size: 50px;
		font-weight: 800;
	}
	p {
		margin: 0 0 20px;
		color: #000;
		font-size: 20px;
		font-weight: 300;
	}
	@media (width <= 480px) {
		margin: 100px 20px 100px;
		flex-flow: column;
		.image {
			width: 100%;
			min-height: 100px;
		}
		.text {
			padding: 30px 20px;
			height: 100%;
			gap: 25px;
			flex-flow: column;
			display: flex;
			align-items: center;
			width: 100%;
			text-align: center;
		}
		h3 {
			width: 100%;
			font-size: 40px;
		}
		p {
			margin: 0 0 20px;
			color: #000;
			font-size: 20px;
			font-weight: 300;
		}
	}
`
