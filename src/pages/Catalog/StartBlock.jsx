import styled from 'styled-components'

import image from 'assets/background/catalog.png'
import { maxWidth } from 'utils/StyledComponents'

export default function StartBlock({ name }) {
	return (
		<Image>
			<Text>
				<h2>{name}</h2>
			</Text>
		</Image>
	)
}

const Image = styled.div`
	${maxWidth}
	width: 100%;
	height: 590px;
	background: url(${image}) center/contain no-repeat;
	display: flex;
	align-items: center;
	justify-content: center;
	/* margin: 0 0 20px 0; */
	@media (width <= 480px) {
		max-width: 100%;
		background: url(${image}) left/cover no-repeat;
		height: 400px;
		margin: 0 0 40px 0;
	}
`

const Text = styled.div`
	h2 {
		white-space: nowrap;
		color: #091859;
		font-size: 55px;
		font-weight: 800;
	}
`
