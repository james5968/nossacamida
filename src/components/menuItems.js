import React from 'react';
import { View, Text, FlatList, Platform } from 'react-native';

import { vw, vh, vmin, vmax } from 'react-native-expo-viewport-units';

import Items from './items';

const MenuItems = ({ itemTitles }) => {
	const _renderItem = ({ item }) => (
		<Items key={item.title} title={item.title} type={item.type} price={item.price} description={item.description} />
	);

	return (
		<View
			style={{
				flex: 1,
				alignItems: vw(100) < 1300 ? 'center' : 'flex-start',
				backgroundColor: '#f2f2f2',
				paddingBottom: Platform.OS !== 'web' ? 70.1 : 0
			}}
		>
			<FlatList
				showsVerticalScrollIndicator={Platform.OS == 'web' ? false : true}
				columnWrapperStyle={{ borderWidth: 0 }}
				data={itemTitles}
				renderItem={_renderItem}
				numColumns={Platform.OS !== 'web' || vw(100) < 1300 ? 2 : 4}
				keyExtractor={(item, index) => 'key' + index}
			/>
		</View>
	);
};

export default MenuItems;
