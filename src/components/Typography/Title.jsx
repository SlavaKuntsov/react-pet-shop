import styled from 'styled-components'

export default function Title({ children }) {
	return <H2>{children}</H2>
}

const H2 = styled.h2`
	color: #000;
	font-family: Abhaya Libre ExtraBold;
	font-size: 50px;
	font-weight: 800;

	margin: 85px 0;

	@media (width <= 480px) {
		font-size: 35px;
		margin: 30px 10px;
		text-align: center;
	}
`
