import Nav from 'components/Nav/Nav'
import styled from 'styled-components'

export default function Header() {
	return (
		<HeaderBlock>
			<div className='line'>
				<p>FAQs & contact</p>
			</div>
			<Nav />
		</HeaderBlock>
	)
}

const HeaderBlock = styled.header`
	display: flex;
	flex-flow: column;
	gap: 21px;
	.line {
		background: #dc6919;
		font-size: 15px;
		color: white;
		padding: 14px 20px;
	}

	@media (width <= 480px) {
		gap: 0px;
		.line {
			font-size: 14px;
		}
		nav > div.menu{
			display: block;
		}
		nav > div{
			display: none;
		}
	}
`
