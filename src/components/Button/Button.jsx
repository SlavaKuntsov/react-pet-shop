import styled from 'styled-components';

import arrow from 'assets/icons/arrow.svg';
import { Link } from 'react-router-dom';

export default function Button ({ to, children }) {
	
	return (
		<Link to={to}>
			<StyledButton>
				{children}
				<img src={arrow} alt='icon' />
			</StyledButton>
		</Link>
	)
}

const StyledButton = styled.button`
	border-radius: 33px;
	background: #802F2C;
	width: fit-content;
	display: flex;
	flex-flow: row;
	align-items: center;
	justify-content: center;
	gap: 18px;
	padding: 20px 35px;
	color: #FFF;
	font-size: 17px;
	font-weight: 500;
`;
