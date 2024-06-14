import { Breadcrumb } from 'antd'
import styled from 'styled-components'
import { maxWidth } from 'utils/StyledComponents'

import GridImage from 'pages/HelpAdvice/GridImage'

import { gridItems } from 'utils/storage/helpAdviceItems'

export default function HelpAdvice() {
	const grid = [gridItems[0], gridItems[1], gridItems[2]]

	const advices = [gridItems[3], gridItems[4]]

	return (
		<HelpAdviceBlock>
			<Breadcrumb
				separator='>'
				items={[
					{
						title: 'Home',
						href: '/'
					},
					{
						title: 'Help & Advice'
					}
				]}
			/>
			<GridImages>
				{grid.map((item, id) => {
					return (
						<GridImage
							className={item.className}
							image={item.image}
							date={item.date}
							title={item.title}
							description={item.description}
							key={id}
							id={id + 1}
						/>
					)
				})}
			</GridImages>
			<Advices>
				<h2>Advices</h2>
				<div className='images'>
					{advices.map((item, id) => {
						return (
							<GridImage
								className={item.className}
								image={item.image}
								date={item.date}
								title={item.title}
								description={item.description}
								key={id}
								id={id + 4}
							/>
						)
					})}
				</div>
			</Advices>
		</HelpAdviceBlock>
	)
}
const HelpAdviceBlock = styled.div`
	border-top: 1px solid #969696;
	padding: 30px 0 150px;
	${maxWidth}
	nav {
		margin: 0 0 50px 0;
		width: 100%;
		a,
		span {
			color: #000;
			font-family: Roboto;
			font-size: 23px;
			font-style: normal;
			font-weight: 300;
			line-height: normal;
		}
		li:last-child {
			span {
				font-weight: 400;
			}
		}
	}
	@media (width <= 480px) {
		nav {
			padding: 0 20px;
			width: 100%;
			a,
			span {
				font-size: 18px;
			}
		}
	}
`
const GridImages = styled.div`
	display: grid;
	grid-template-columns: 1.4fr 1fr;
	grid-template-rows: repeat(2, 1fr);
	grid-column-gap: 50px;
	grid-row-gap: 65px;

	.div1 {
		height: 100%;
		grid-area: 1 / 1 / 3 / 2;
		gap: 20px;
		span {
			font-size: 20px;
			margin: 20px 0 0 0;
		}
		h3 {
			font-size: 50px;
		}
		p {
			font-size: 23px;
		}
	}
	.div2 {
		grid-area: 1 / 2 / 2 / 3;
	}
	.div3 {
		grid-area: 2 / 2 / 3 / 3;
	}
	.div2,
	.div3 {
		gap: 15px;
		span {
			font-size: 17px;
			margin: 15px 0 0 0;
		}
		h3 {
			font-size: 26px;
		}
		p {
			font-size: 20px;
		}
	}
	@media (width <= 480px) {
		margin: 50px 20px 100px;
		grid-template-columns: 1fr;
		grid-template-rows: repeat(3, 1fr);
		grid-column-gap: 50px;
		grid-row-gap: 65px;
		.div1 {
			grid-area: 1 / 1 / 2 / 2;
		}
		.div2 {
			grid-area: 2 / 1 / 3 / 2;
		}
		.div3 {
			grid-area: 3 / 1 / 4 / 2;
		}
		> a {
			text-align: center;
			span {
				font-size: 20px !important;
				margin: 0 !important;
			}
			h3 {
				font-size: 30px !important;
			}
			p {
				font-size: 18px !important;
			}
		}
	}
`
const Advices = styled.div`
	flex-flow: column;
	display: flex;
	h2 {
		color: #000;
		font-family: Abhaya Libre ExtraBold;
		font-size: 50px;
		font-style: normal;
		font-weight: 800;
		line-height: normal;
		margin: 90px auto 130px;
	}
	.images {
		gap: 100px;
		display: flex;
		> a {
			gap: 20px;
			width: 100%;
			flex: 1 0 300px;
		}
		span {
			font-size: 17px;
		}
		h3 {
			font-size: 30px;
		}
		p {
			font-size: 20px;
		}
	}
	@media (width <= 480px) {
		nav {
			padding: 0 20px;
			width: 100%;
			a,
			span {
				font-size: 18px;
			}
		}
		h2 {
			font-size: 40px;
			margin: 20px auto 40px;
		}
		.images {
			flex-flow: column;
			margin: 0 20px;
		}
		.images > a {
			span {
				font-size: 20px;
				margin: 0;
			}
			h3 {
				font-size: 30px;
			}
			p {
				font-size: 23px;
			}
		}
	}
`
