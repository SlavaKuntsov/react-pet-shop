import styled from 'styled-components'

import { center, maxWidth } from 'utils/StyledComponents'

import arrow from 'assets/icons/arrow2.svg'
import email from 'assets/icons/email.svg'
import facebook from 'assets/icons/facebook.svg'
import instagram from 'assets/icons/instagram.svg'

export default function Footer() {
	return (
		<FooterBlock>
			<hr />
			<FooterInfo>
				<div className='other'>
					<div className='newsletter'>
						<h5>NEWSLETTER</h5>
						<p>
							Sign up for our e-mail and be the first who knows
							our special offers!
						</p>
						<div className='email'>
							<div className='input'>
								<img src={email} alt='' />
								<input
									type='email'
									placeholder='Type your email address here'
								/>
							</div>
							<img src={arrow} alt='' />
						</div>
					</div>
					<div className='followUs'>
						<h5>FOLLOW US</h5>
						<div className='icons'>
							<img src={facebook} alt='icon' />
							<img src={instagram} alt='icon' />
						</div>
					</div>
				</div>
				<div className='contact'>
					<h5>Connect With Us</h5>
					<p>
						15732 Northwest Trakehner Way, Portland, Oregon 97229,
						USA
					</p>
					<p>
						Mon-Fri 9am-8pm
						<br />
						Sat 9am-6pm
					</p>
					<p>
						📞 +1 (800)3875643
						<br />
						petpalaceshop@gmail.com
					</p>
				</div>
			</FooterInfo>
			<hr />
			<div className='rights'>
				<p>
					©2023 Copyright Fetch! Retail Limited. All Rights Reserved.
				</p>
			</div>
		</FooterBlock>
	)
}

const FooterBlock = styled.footer`
	${center}
	${maxWidth}
	/* padding: 0 100px;	 */

	hr {
		width: 100%;
		height: 1px;
		background: #969696;
	}
	.rights {
		height: 290px;
		width: 100%;
	}
	.rights p {
		padding: 30px 0 0 0;
		color: #000;
		font-size: 20px;
		font-weight: 300;
	}
	@media (width <= 480px) {
		padding: 0 20px;
	}
`

const FooterInfo = styled.div`
	${center}

	width: 100%;
	display: flex;
	flex: 1;
	flex-flow: wrap;
	align-items: center;
	justify-content: space-between;
	padding: 70px 0;
	gap: 100px;
	h5 {
		color: #000;
		font-size: 25px;
		font-weight: 400;
	}
	p {
		color: #000;
		font-size: 20px;
		font-weight: 300;
		line-height: 26px; /* 130% */
	}
	.other {
		display: flex;
		flex-flow: column;
		gap: 40px;
	}
	.newsletter {
		display: flex;
		flex-flow: column;
		gap: 25px;
	}
	.email {
		width: 100%;
		height: 73px;
		border-radius: 30px;
		background: #e9e9e9;
		flex-flow: row;
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 10px 30px;
		.input {
			img {
				width: 30px;
			}
			flex-flow: row;
			display: flex;
			justify-content: center;
			align-items: center;
			gap: 20px;
		}
		input {
			color: #000;
			text-align: center;
			font-family: Roboto;
			font-size: 19px;
			font-style: normal;
			font-weight: 400;
			line-height: 137.9%; /* 26.201px */
			letter-spacing: 0.95px;
			padding: 10px 50px 10px 10px;
			background: transparent;
		}
		input::placeholder {
			color: #414141;
			text-align: center;
			font-family: Roboto;
			font-size: 19px;
			font-style: normal;
			font-weight: 400;
			line-height: 137.9%; /* 26.201px */
			letter-spacing: 0.95px;
		}
	}
	.email > img {
		width: 10px;
	}
	.followUs {
		display: flex;
		flex-flow: column;
		gap: 15px;
	}
	.icons {
		display: flex;
		flex-flow: row;
		align-items: center;
		gap: 25px;
	}
	.contact {
		display: flex;
		flex-flow: column;
		align-items: start;
		gap: 45px;
	}

	@media (width <= 480px) {
		gap: 70px;
		h5 {
			font-size: 20px;
		}
		p {
			font-size: 18px;
		}
		.email {
			width: 100%;
			.input {
				img {
					width: 25px;
				}
				gap: 10px;
			}
			input {
				font-size: 13px;
				padding: 10px 60px 10px 10px;
			}
			input::placeholder {
				font-size: 13px;
			}
		}
		.other {
			display: flex;
			flex-flow: column;
			gap: 40px;
		}
		.newsletter {
			display: flex;
			flex-flow: column;
			gap: 25px;
		}
	}
`
