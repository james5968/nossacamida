import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useGlobal } from 'reactn';
import { vh, vw } from 'react-native-expo-viewport-units';
import InnerCart from './innerCart';
import CartBarHeader from './cartBarHeader';
import SubmitOrder from './submitOrder';

const SideCart = ({ navigation }) => {
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
		<View
			style={{
				position: 'fixed',
				right: 0,
				top: 112,
				height: vh(100),
				backgroundColor: '#555',
				width: vw(24.7)
			}}
		>
			<View
				style={{
					backgroundColor: '#444',
					elevation: 100,
					borderTopRightRadius: 0,
					borderTopLeftRadius: 0,
					height: 70
				}}
			>
				<CartBarHeader dontNavigate={true} />
			</View>

			{global.cart.length < 1 && (
				<Text
					style={{ fontFamily: 'DIN-Next', fontSize: 20, color: '#fff', marginTop: 40, textAlign: 'center' }}
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
					height: 60,
					justifyContent: 'center',
					alignItems: 'center',
					position: 'fixed',
					width: vw(24.7),
					bottom: 0
				}}
			>
				<Text style={{ fontFamily: 'DIN-Next', fontSize: 20, color: '#000' }}>Place Order</Text>
			</TouchableOpacity>
			<SubmitOrder navigation={navigation} />
		</View>
	);
};

export default SideCart;
