import styled from 'styled-components'

import Card from 'components/Card/PicksCard'
import Title from 'components/Typography/Title'

import { center, maxWidth } from 'utils/StyledComponents'

import { A_dogFood } from '../../utils/storage/sectionItems'
import { dogFood } from './../../utils/global';

export default function Picks() {
	const allCards = [
		A_dogFood[0],
		A_dogFood[1],
		A_dogFood[2],
		A_dogFood[3],
	]

	return (
		<PicksBlock>
			<Title>Our top picks</Title>
			<div className='allCards'>
				{allCards.map((card, id) => {
					return <Card {...card} key={id} path={`catalog/${dogFood}/${id + 1}`}/>
				})}
			</div>
		</PicksBlock>
	)
}

const PicksBlock = styled.div`
	${center}
	${maxWidth}
	margin: 0 auto;
	.allCards {
		padding: 0 100px;
		width: 100%;
		display: flex;
		flex-flow: wrap;
		align-items: center;
		justify-content: space-evenly;
		flex: 1;
		gap: 40px;
	}

	@media (width <= 480px) {
	}
`
