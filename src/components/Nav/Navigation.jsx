import { Menu, MenuButton, MenuItem, MenuList, Portal } from '@chakra-ui/react'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import styled from 'styled-components'

import DropDown from '../DropDown Menu/DropDown'

import { dogFood, dogOther, catFood, catOther, otherAnimals } from 'utils/global'
import scrollToAnchor from 'utils/behaviorScroll'

export default function Navigation() {
	
	const navigate = useNavigate();
	const currentPath = window.location.pathname;

	return (
		<NavigationBlock>
			<DropDown links={[{title: 'Food', to: `/catalog/${catFood}`}, {title: 'Other', to: `/catalog/${catOther}`}]}>CATS</DropDown>
			<DropDown links={[{title: 'Food', to: `/catalog/${dogFood}`}, {title: 'Other', to: `/catalog/${dogOther}`}]}>DOGS</DropDown>
			<Link to={`/catalog/${otherAnimals}`}>OTHER ANIMALS</Link>
			<Link to='/help-advice'>HELP & ADVICE</Link>
			{/* <Link to='/about-us'>HELP & ADVICE</Link> */}
			<button onClick={() => {
				if(currentPath !== '/') {
					navigate('/')
					setTimeout(() => {
						scrollToAnchor('about-us')
					}, 0);
					return
				}
				scrollToAnchor('about-us')
			}}>ABOUT US</button>
		</NavigationBlock>
	)
}

const NavigationBlock = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	flex-flow: row;
	gap: 40px;
	margin: 0 0 30px;
	button, a {
		padding: 0 10px;
		color: #000;
		font-family: Roboto;
		font-size: 20px;
		font-style: normal;
		font-weight: 600;
	}

	@media (width <= 480px) {
		flex-flow: column;
		display: flex;
		gap: 90px;
	}
`
