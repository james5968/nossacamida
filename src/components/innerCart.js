import React from 'react';
import { Text, FlatList, View, ScrollView, TouchableOpacity } from 'react-native';
import { useGlobal } from 'reactn';
import { vh, vw } from 'react-native-expo-viewport-units';

import CartItem from './cartItem';

const SideCart = () => {
	const [
		global,
		setGlobal
	] = useGlobal();

	let cartLength = global.cart.length;

	let data = global.cart;

	let _renderItem = ({ item, index }) => <CartItem id={index} key={index} />;
	return (
		<View
			style={{
				justifyContent: 'space-between',
				maxHeight: vh(100) - 108,

				flex: 1
			}}
		>
			<ScrollView>
				{global.cart.map((item, index) => (
					<View>
						<CartItem id={index} key={index} />
					</View>
				))}
			</ScrollView>
		</View>
	);
};

export default SideCart;
