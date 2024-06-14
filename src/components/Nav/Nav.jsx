import { Drawer } from 'antd'
import { useState } from 'react'
import styled from 'styled-components'

import { IoIosMenu } from 'react-icons/io'

import Navigation from 'components/Nav/Navigation'

import logo from 'assets/paw.svg'
import Cart from 'components/Nav/Cart'
import { NavLink } from 'react-router-dom'
import { maxWidth } from 'utils/StyledComponents'

export default function Nav() {
	const [open, setOpen] = useState(false)
	const showDrawer = () => {
		setOpen(true)
	}
	const onClose = () => {
		setOpen(false)
	}

	return (
		<NavBlock>
			<NavLink to='/'>
				<LogoBlock>
					<img src={logo} alt='image' />
					<h3>
						<span>Paw</span>
						<span>Palace</span>
					</h3>
				</LogoBlock>
			</NavLink>
			<Cart />
			<div className='menu'>
				<IoIosMenu onClick={showDrawer} />
			</div>
			<Drawer
				placement='right'
				onClose={onClose}
				open={open}
				title={'menu'}
			>
				<h2 className='text-2xl font-bold'></h2>
				<Navigation />
			</Drawer>
			<Navigation />
		</NavBlock>
	)
}

const NavBlock = styled.nav`
	display: flex;
	flex-flow: column;
	gap: 21px;
	position: relative;
	${maxWidth}
	width: 100%;
	.menu{
		display: none;
	}

	@media (width <= 480px) {
		.menu {
			position: absolute;
			top: 12px;
			right: 18px;
			svg {
				width:  30px;
				height: 30px;
			}
		}
		a{
			width: fit-content;
		}
	}
`

const LogoBlock = styled.div`
	width: fit-content;
	display: flex;
	align-items: center;
	justify-content: center;
	gap: 2px;
	margin: 0 auto;
	h3 {
		font-size: 40px;
		font-weight: 800;
		span:nth-child(1) {
			color: #ffaa00;
			font-family: Abhaya Libre ExtraBold;
		}
		span:nth-child(2) {
			color: #ffdc25;
			font-family: Abhaya Libre ExtraBold;
		}
	}

	@media (width <= 480px) {
		margin: 0 0 0 10px;
		img {
			width: 40px;
		}
		h3 {
			font-size: 2.8rem;
			font-weight: 800;
			span:nth-child(1) {
				color: #ffaa00;
				font-family: Abhaya Libre ExtraBold;
			}
			span:nth-child(2) {
				color: #ffdc25;
				font-family: Abhaya Libre ExtraBold;
			}
		}
	}
`
