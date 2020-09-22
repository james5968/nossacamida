import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { useGlobal } from 'reactn';

const CartItem = ({ id }) => {
	const [
		global,
		setGlobal
	] = useGlobal();

	let item = global.cart[id].item;
	let modifiers = global.cart[id].modifiers;
	let type = global.cart[id].type;
	let spice = global.cart[id].spice;
	let price = global.cart[id].price;
	let qty = global.cart[id].qty;

	const handleIncreaseQty = () => {
		let newQty = qty + 1;
		let tempArray = global.cart;

		tempArray[id].qty = newQty;

		setGlobal((state) => ({
			cart: (state.cart = tempArray)
		}));
	};

	const handleDecreaseQty = () => {
		let newQty = qty - 1;
		let tempArray = global.cart;
		if (newQty < 1) {
			tempArray.splice(id, 1);
			setGlobal((state) => ({
				cart: (state.cart = tempArray)
			}));
		} else {
			tempArray[id].qty = newQty;
			setGlobal((state) => ({
				cart: (state.cart = tempArray)
			}));
		}
	};
	return (
		<View
			style={{
				backgroundColor: '#333',
				flex: 1,
				margin: 5,
				padding: 10,

				elevation: 5
			}}
		>
			<View>
				<Text style={{ color: '#fff', fontFamily: 'DIN-Next', fontSize: 20 }}>{item}</Text>
				{spice != null && (
					<Text style={{ color: '#fff', fontFamily: 'DIN-Next', fontSize: 15, marginLeft: 10 }}>{spice}</Text>
				)}

				{modifiers.sides.length == 0 &&
				type == 'main' && (
					<Text style={{ color: '#fff', fontFamily: 'DIN-Next', fontSize: 15, marginLeft: 10 }}>
						No sides
					</Text>
				)}
				{modifiers.sides.length == 1 &&
				type == 'main' && (
					<Text style={{ color: '#fff', fontFamily: 'DIN-Next', fontSize: 15, marginLeft: 10 }}>
						{'Regular ' + modifiers.sides[0]}
					</Text>
				)}
				{modifiers.sides.length == 2 &&
				type == 'main' && (
					<View>
						<Text style={{ color: '#fff', fontFamily: 'DIN-Next', fontSize: 15, marginLeft: 10 }}>
							{'Regular ' + modifiers.sides[0]}
						</Text>
						<Text style={{ color: '#fff', fontFamily: 'DIN-Next', fontSize: 15, marginLeft: 10 }}>
							{'Regular ' + modifiers.sides[1]}
						</Text>
					</View>
				)}
				<View style={{ marginLeft: 5 }}>
					{modifiers.minus.map((item) => (
						<Text
							key={item}
							style={{ color: '#fff', fontFamily: 'DIN-Next', fontSize: 15, marginLeft: 10 }}
						>
							-{item}
						</Text>
					))}

					{modifiers.plus.map((item) => (
						<Text
							key={item}
							style={{ color: '#fff', fontFamily: 'DIN-Next', fontSize: 15, marginLeft: 10 }}
						>
							+{item}
						</Text>
					))}
				</View>
			</View>
			<View
				style={{
					marginVertical: 5,
					alignItems: 'center',
					flexDirection: 'row',
					justifyContent: 'space-between',
					marginTop: 10
				}}
			>
				<View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
					<TouchableOpacity onPress={handleDecreaseQty}>
						<FontAwesome name="minus-circle" size={20} color="#fff" />
					</TouchableOpacity>
					<Text
						style={{
							color: '#fff',
							fontFamily: 'DIN-Next',
							fontSize: 24,
							marginHorizontal: 5,
							marginBottom: -4
						}}
					>
						{qty}
					</Text>

					<TouchableOpacity onPress={handleIncreaseQty}>
						<FontAwesome name="plus-circle" size={20} color="#fff" />
					</TouchableOpacity>
				</View>

				<Text style={{ color: '#fff', fontFamily: 'DIN-Next', fontSize: 20 }}>£{(price * qty).toFixed(2)}</Text>
			</View>
		</View>
	);
};

export default CartItem;
