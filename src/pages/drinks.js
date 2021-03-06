import React from 'react';
import { View, Text, FlatList } from 'react-native';
import { useGlobal } from 'reactn';

import { vw, vh, vmin, vmax } from 'react-native-expo-viewport-units';

import MenuItems from '../components/menuItems';

const Drinks = () => {
	const [
		global,
		setGlobal
	] = useGlobal();

	let newArray = Object.values(global.stockList);

	let filterArray = newArray.filter(({ type, inStock }) => type == 'drink' && inStock);

	return <MenuItems itemTitles={filterArray} />;
};

export default Drinks;
