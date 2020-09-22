import React from 'react';
import { View, Text, FlatList } from 'react-native';

import { useGlobal } from 'reactn';

import { vw, vh, vmin, vmax } from 'react-native-expo-viewport-units';

import MenuItems from '../components/menuItems';

const Extras = () => {
	const [
		global,
		setGlobal
	] = useGlobal();

	let newArray = Object.values(global.stockList);

	let filterArray = newArray.filter(({ type, inStock }) => type == 'extra' || (type == 'side' && inStock));

	return <MenuItems itemTitles={filterArray} />;
};

export default Extras;
