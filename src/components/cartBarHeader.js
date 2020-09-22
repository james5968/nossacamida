import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { useGlobal } from 'reactn';

Array.prototype.sum = function(prop, prop2) {
	var total = 0;
	for (var i = 0, _len = this.length; i < _len; i++) {
		total += this[i][prop] * this[i][prop2];
	}
	return total;
};

const CartBarHeader = ({ navigation, target = 'Cart', dontNavigate }) => {
	const [
		global,
		setGlobal
	] = useGlobal();

	let cartTotalComp = global.cart.sum('price', 'qty').toFixed(2);

	if (global.cartTotal !== cartTotalComp) {
		setGlobal((state) => ({
			cartTotal: (state.cartTotal = global.cart.sum('price', 'qty').toFixed(2))
		}));
	}

	return (
		<TouchableOpacity
			style={{
				height: 70,
				justifyContent: !dontNavigate ? 'space-between' : 'center',
				alignItems: 'center',
				flexDirection: 'row',
				marginLeft: 10
			}}
			onPress={() => {
				if (!dontNavigate) {
					navigation.navigate(target);
				}
			}}
		>
			<View
				style={{
					flexDirection: 'row',
					alignItems: 'center'
				}}
			>
				<FontAwesome
					name={dontNavigate ? 'shopping-basket' : target == 'Cart' ? 'angle-up' : 'angle-down'}
					size={30}
					color="#d31a98"
				/>
				<Text style={{ color: '#fff', fontFamily: 'DIN-Next', margin: 10, fontSize: 18 }}>
					Your order: £{global.cartTotal}
				</Text>
			</View>
			{!dontNavigate && (
				<View style={{ backgroundColor: '#fefe01', marginHorizontal: 20 }}>
					<Text style={{ color: '#000', fontFamily: 'DIN-Next', margin: 10, fontSize: 14 }}>
						{target == 'Cart' ? 'CONTINUE' : 'BACK'}
					</Text>
				</View>
			)}
		</TouchableOpacity>
	);
};

export default CartBarHeader;
