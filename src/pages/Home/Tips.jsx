import styled from 'styled-components'

import Card from 'components/Card/TipsCard'
import Title from 'components/Typography/Title'

import { center, maxWidth } from 'utils/StyledComponents'

import tips1 from 'assets/background/t1.png'
import tips2 from 'assets/background/t2.png'

export default function Tips() {
	return (
		<TipsBlock>
			<Title>Some helpful tips from our blog</Title>
			<div className='allBlocks'>
				<Card
					link='help-advice/2'
					image={tips1}
					date='October 04, 2023 | Paw Palace'
					title='Do Leopard Geckos Need UVA or UVB Light?'
					text='      Leopard geckos are a popular choice for pet owners for a variety of reasons. Their striking patterns and docile personalities make them ideal for both beginner and experienced reptile owners...'
				/>
				<Card
					link='help-advice/5'
					image={tips2}
					date='October 01, 2023 | Paw Palace'
					title='How to Make Nutritious and Delicious Dog Food'
					text="        It's no secret that dogs are man's best friend. We love our furry friends and want the best for them, including a nutritious and delicious diet. Making dog food at home can not only..."
				/>
			</div>
		</TipsBlock>
	)
}

const TipsBlock = styled.div`
	${center}
	${maxWidth}
	.allBlocks {
		padding: 0 100px;
		width: 100%;
		display: flex;
		flex-flow: wrap;
		align-items: start;
		justify-content: space-between;
		flex: 1;
		gap: 100px;
	}

	@media (width <= 480px) {
		.allBlocks {
			padding: 0 20px;
		}
	}
`
