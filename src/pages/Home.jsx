import styled from 'styled-components';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import StartBlock from 'pages/Home/StartBlock';
import Brands from 'pages/Home/Brands';
import Picks from 'pages/Home/Picks';
import Accessories from 'pages/Home/Accessories';
import Services from 'pages/Home/Services';
import Species from 'pages/Home/Species';
import Tips from 'pages/Home/Tips';
import AboutUs from 'pages/Home/AboutUs';

import itemAction from '../../src/store/actions/item.action';


export default function Home () {

	const dispatch = useDispatch()

	useEffect(() => {
		dispatch(itemAction.closeItem())
	}, [])
	
	return (
		<>
			<StartBlock />
			<Brands />
			<Picks />
			<Accessories />
			<Services />
			<Species />
			<Tips />
			<AboutUs />
		</>
	)
}

