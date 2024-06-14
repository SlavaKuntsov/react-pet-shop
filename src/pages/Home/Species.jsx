import styled from 'styled-components'

import Card from 'components/Card/SpeciesCard'

import { center } from 'utils/StyledComponents'

import species1 from 'assets/species/s1.png'
import species2 from 'assets/species/s2.png'
import species3 from 'assets/species/s3.png'
import species4 from 'assets/species/s4.png'
import species5 from 'assets/species/s5.png'
import { catFood, dogFood, otherAnimals } from './../../utils/global';

export default function Species() {
	const allSpecies = [
		{ image: species1, link: `/catalog/${dogFood}`, name: 'Dog' },
		{ image: species2, link: `/catalog/${catFood}`, name: 'Cat' },
		{ image: species3, link: `/catalog/${otherAnimals}`, name: 'Bird' },
		{ image: species4, link: `/catalog/${otherAnimals}`, name: 'Fish' },
		{ image: species5, link: `/catalog/${otherAnimals}`, name: 'Ant' }
	]

	return (
		<SpeciesBlock>
			{allSpecies.map((card, id) => {
				return <Card {...card} key={id} />
			})}
		</SpeciesBlock>
	)
}

const SpeciesBlock = styled.div`
	margin: 140px 100px;
	${center}
	flex-flow: wrap;
	flex: 1;
	gap: 70px;

	@media (width <= 480px) {
		margin: 50px 20px;
	}
`
