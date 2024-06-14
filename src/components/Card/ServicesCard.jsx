import styled from 'styled-components'

export default function ServicesCard({ image, title, text }) {
	return (
		<Card>
			<img src={image} alt='img' />
			<div className='text'>
				<h5>{title}</h5>
				<p>{text}</p>
			</div>
		</Card>
	)
}

const Card = styled.div`
	display: flex;
	flex: 1 0 auto;
	flex-flow: row;
	align-items: center;
	justify-content: space-evenly;
	border-radius: 30px;
	border: 1px solid #969696;
	gap: 25px;
	padding: 35px 30px 25px;

	h5 {
		color: #000;
		font-family: Roboto;
		font-size: 25px;
		font-style: normal;
		font-weight: 500;
		line-height: normal;
		margin: 0 0 5px 0;
	}
	p {
		color: #000;
		font-family: Roboto;
		font-size: 15px;
		font-style: normal;
		font-weight: 400;
		line-height: normal;
	}

	@media (width <= 480px) {
		width: max-content;
		gap: 10px;
		padding: 20px 15px;
		img{
			width:  45px;
			height: 45px;
		}
		h5{
			font-size: 20px;
		}
		p{
			font-size: 13px;
		}
	}
`
