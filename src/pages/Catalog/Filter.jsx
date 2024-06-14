import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import styled from 'styled-components'

import CatalogAction from '../../../src/store/actions/catalog.action'

export default function Filter({ inStock, minPrice, maxPrice }) {
	const [selectedValue, setSelectedValue] = useState(null)

	const handleRadioChange = event => {
		setSelectedValue(event.target.value)
	}

	const [inputValue1, setInputValue1] = useState('')
	const [inputValue2, setInputValue2] = useState('')

	const handleResetClickNum = () => {
		setInputValue1('')
		setInputValue2('')
	}

	const dispatch = useDispatch()

	useEffect(() => {
		dispatch(
			CatalogAction.addFilter({
				inStock: selectedValue,
				minPrice: inputValue1,
				maxPrice: inputValue2
			})
		)
	}, [selectedValue, inputValue1, inputValue2])

	return (
		<FilterBlock>
			<hr />
			<div className='title'>
				<h5>Availability</h5>
				<span onClick={() => setSelectedValue(null)}>Reset</span>
			</div>
			<ul>
				<li>
					<label>
						<input
							type='radio'
							name='stock'
							value='inStock'
							checked={selectedValue === 'inStock'}
							onChange={handleRadioChange}
						/>
						In stock
					</label>
				</li>
				<li>
					<label>
						<input
							type='radio'
							name='stock'
							value='notInStock'
							checked={selectedValue === 'notInStock'}
							onChange={handleRadioChange}
						/>
						Out of stock
					</label>
				</li>
			</ul>
			<hr />
			<div className='title'>
				<h5>Price</h5>
				<span onClick={handleResetClickNum}>Reset</span>
			</div>
			<div className='range'>
				<input
					type='number'
					placeholder='$ From'
					value={inputValue1}
					onChange={e => setInputValue1(e.target.value)}
				/>
				<input
					type='number'
					placeholder='$ To'
					value={inputValue2}
					onChange={e => setInputValue2(e.target.value)}
				/>
			</div>
			<hr />
		</FilterBlock>
	)
}

const FilterBlock = styled.div`
	flex-flow: column;
	display: flex;
	gap: 30px;
	align-items: center;
	justify-content: center;
	width: 320px;
	hr {
		background: #969696;
		height: 1px;
		width: 100%;
	}
	.title {
		flex-flow: row;
		display: flex;
		justify-content: space-between;
		align-items: center;
		width: 100%;
		h5 {
			color: #000;
			font-family: Abhaya Libre ExtraBold;
			font-size: 30px;
			font-style: normal;
			font-weight: 800;
			line-height: normal;
		}
		span {
			color: #000;
			font-family: Roboto;
			font-size: 17px;
			font-style: normal;
			font-weight: 300;
			line-height: normal;
			text-decoration-line: underline;
		}
	}
	ul {
		flex-flow: column;
		display: flex;
		gap: 20px;
		width: 100%;
		label {
			flex-flow: row;
			display: flex;
			align-items: center;
			display: flex;
			gap: 25px;
			color: #000;
			font-family: Roboto;
			font-size: 20px;
			font-style: normal;
			font-weight: 300;
			line-height: normal;
			input[type='radio'] {
				transform: scale(1.5);
			}
		}
	}
	.range {
		width: 100%;
		flex-flow: row;
		display: flex;
		justify-content: space-between;
		gap: 40px;
		align-items: center;
		display: flex;
		input {
			width: 100%;
			padding: 12px 20px;
			border-radius: 10px;
			background: #e9e9e9 !important;
			box-shadow: 0px 4px 34px 0px rgba(0, 0, 0, 0.05);
			background: transparent;
			box-sizing: border-box;
			color: #000;
			font-family: Roboto;
			font-size: 17px;
			font-style: normal;
			font-weight: 300;
			line-height: normal;
		}
		input[type='number'],
		input[type='number']:active,
		input[type='number']:focus {
			-webkit-appearance: none; /* Удаление стилизации в Chrome и Safari */
			-moz-appearance: none; /* Удаление стилизации в Firefox */
			appearance: none; /* Удаление стилизации в остальных браузерах */
			/* Дополнительные стили, если необходимо */
			border: none;
		}
	}
	@media (width <= 480px) {
		h5 {
			font-size: 25px;
		}
		span {
			font-size: 17px;
		}
	}
`
