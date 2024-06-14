import Title from 'components/Typography/Title'
import styled from 'styled-components'
import { center, maxWidth } from 'utils/StyledComponents'

import service1 from 'assets/icons/services/s1.svg'
import service2 from 'assets/icons/services/s2.svg'
import service3 from 'assets/icons/services/s3.svg'
import Card from 'components/Card/ServicesCard'

export default function Services() {
	const allService = [
		{
			image: service1,
			title: '$350+ Free Delivery',
			text: 'Free delivery on orders over $350'
		},
		{
			image: service2,
			title: '30 Days Return',
			text: 'If goods have problems'
		},
		{
			image: service3,
			title: 'Secure Payment',
			text: '100% secure payment'
		}
	]

	return (
		<ServicesBlock>
			<Title>Best customer service 🐶</Title>
			<div className='allService'>
				{allService.map((card, id) => {
					return <Card {...card} key={id} />
				})}
			</div>
		</ServicesBlock>
	)
}

const ServicesBlock = styled.div`
	${center}
	${maxWidth}
	margin: 0 auto;
	.allService {
		padding: 0 100px;
		/* width: 100%; */
		display: flex;
		flex-flow: wrap;
		align-items: center;
		justify-content: space-evenly;
		flex: 1;
		gap: 40px;
	}

	@media (width <= 480px) {
		.allService {
			padding: 0;
			padding: 0 20px;
		}
	}
`
