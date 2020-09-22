import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import InnerCart from './innerCart';
import { useGlobal } from 'reactn';
import CartBarHeader from './cartBarHeader';
import { vh, vw } from 'react-native-expo-viewport-units';
import SubmitOrder from './submitOrder';

const CartScreen = ({ navigation }) => {
	const [
		global,
		setGlobal
	] = useGlobal();
	const handleSendOrder = () => {
		setGlobal((state) => ({
			submitOrder: (state.submitOrder = true)
		}));
	};
	return (
		<View>
			<View
				style={{
					backgroundColor: '#444',
					elevation: 100,
					borderTopRightRadius: 0,
					borderTopLeftRadius: 0,
					height: 70
				}}
			>
				<CartBarHeader navigation={navigation} target="Menu" />
			</View>
			{global.cart.length < 1 && (
				<Text
					style={{ fontFamily: 'DIN-Next', fontSize: 20, color: '#000', marginTop: 20, textAlign: 'center' }}
				>
					Your Basket is empty!
				</Text>
			)}
			<InnerCart />

			<TouchableOpacity
				onPress={handleSendOrder}
				style={{
					marginTop: -8,
					backgroundColor: '#FECD42',
					height: 55,
					justifyContent: 'center',
					alignItems: 'center',
					position: 'fixed',
					width: vw(100),
					bottom: 0
				}}
			>
				<Text style={{ fontFamily: 'DIN-Next', fontSize: 20 }}>Place Order</Text>
			</TouchableOpacity>
			<SubmitOrder navigation={navigation} />
		</View>
	);
};

export default CartScreen;
