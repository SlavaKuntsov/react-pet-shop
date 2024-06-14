import Title from 'components/Typography/Title'
import styled from 'styled-components'

import Button from 'components/Button/Button'

import { center } from 'utils/StyledComponents'

import image from 'assets/background/accessories.png'
import { dogFood } from './../../utils/global';

export default function Accessories() {
	return (
		<AccessoriesBlock>
			<Title>Accessories</Title>
			<div className='image'>
				<Button to={`/catalog/${dogFood}`}>See all</Button>
			</div>
		</AccessoriesBlock>
	)
}

const AccessoriesBlock = styled.div`
	${center}
	.image {
		position: relative;
		background: url(${image}) center/cover no-repeat;
		width: 1122px;
		height: 493px;
	}
	a {
		position: absolute;
		top: 130px;
		right: 70px;
	}

	@media (width <= 480px) {
		margin: 0 0 20px 0;
		a {
			left: 0;
			right: 0;
			margin-left: auto;
			margin-right: auto;
			width: min-content;
			white-space: nowrap;
			top: 400px;
		}
	}
`
