import { Breadcrumb } from 'antd'
import { Outlet } from 'react-router-dom'
import styled from 'styled-components'

import { maxWidth } from 'utils/StyledComponents'

import AllItems from 'pages/Catalog/AllItems'
import Filter from 'pages/Catalog/Filter'
import StartBlock from 'pages/Catalog/StartBlock'
import { useEffect, useState } from 'react'

export default function Catalog({ name, productsArray }) {
	const [openFilter, setOpenFilter] = useState(false)

	const [windowWidth, setWindowWidth] = useState(window.innerWidth)

	

	useEffect(() => {
		const handleResize = () => {
			setWindowWidth(window.innerWidth)
		}

		if(windowWidth > 480) {
			setOpenFilter(true)
		}

		window.addEventListener('resize', handleResize)

		return () => {
			window.removeEventListener('resize', handleResize)
		}
	}, [windowWidth])

	return (
		<CatalogBlock>
			<StartBlock name={name} />
			<Breadcrumb
				separator='>'
				items={[
					{
						title: 'Home',
						href: '/'
					},
					{
						title: name
					}
				]}
			/>
			<CatalogMain>
				<h2
					className='filterButton'
					onClick={() => setOpenFilter(p => !p)}
					style={{ display: windowWidth <= 480 ? 'block' : 'none' }}
				>
					Open Filer
				</h2>
				<div style={{ display: openFilter ? 'flex' : 'none' }}>
					<Filter />
				</div>
				<AllItems productsArray={productsArray} />
				<Outlet />
			</CatalogMain>
		</CatalogBlock>
	)
}

const CatalogBlock = styled.div`
	flex-flow: column;
	display: flex;
	${maxWidth}
	nav {
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
const CatalogMain = styled.div`
	flex-flow: row;
	display: flex;
	justify-content: space-between;
	align-items: start;
	margin: 30px 0 100px 0;
	gap: 150px;
	@media (width <= 480px) {
		padding: 0 20px;
		flex-flow: column;
		gap: 30px;
		align-items: center;
		.filterButton {
			margin: 0;
			font-size: 20px;
			color: #000;
			font-family: Abhaya Libre ExtraBold;
			font-weight: 800;
			padding: 10px 50px;
			background: #dc6919;
			color: white;
			border-radius: 20px;
		}
	}
`
