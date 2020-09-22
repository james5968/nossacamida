import React, { useState } from 'react';
import { useGlobal } from 'reactn';
import { View, Text, Button, TextInput } from 'react-native';
import firebase from 'firebase';
import moment, { defineLocale } from 'moment';
import Modal from 'modal-react-native-web';
import { vh, vw } from 'react-native-expo-viewport-units';

const SubmitOrder = ({ navigation }) => {
	const [
		global,
		setGlobal
	] = useGlobal();
	const [
		orderName,
		setOrderName
	] = useState('');
	let orderRef = 'ref' + Math.floor(Math.random() * Math.floor(1000));
	const [
		orderTable,
		setTable
	] = useState('');

	let timeStampCurrent = moment().toISOString();

	const handleSubmit = () => {
		if (orderName && orderTable) {
			firebase.database().ref('orders').update({
				[orderRef]: {
					tableNo: orderTable,
					timeStamp: timeStampCurrent,
					name: orderName,
					kitchenOrder: global.cart,
					id: orderRef,
					completed: false
				}
			});
			setTable('');
			setOrderName('');
			setGlobal((state) => ({
				submitOrder: (state.submitOrder = false),
				cart: (state.cart = [])
			}));
		}
		alert('Order Submitted Succesfully!');
		navigation.navigate('Menu');
	};
	return (
		<Modal visible={global.submitOrder} transparent={true}>
			<View style={{ backgroundColor: 'rgba(0,0,0,0.5)', height: vh(100), width: vw(100) }}>
				<View style={{ margin: 'auto', backgroundColor: '#333', padding: 100 }}>
					<View style={{ alignItems: 'center', marginBottom: 15 }}>
						<View style={{ flexDirection: 'row', alignItems: 'center', marginVertical: 15 }}>
							<Text style={{ marginRight: 15, color: '#fff', fontFamily: 'DIN-Next' }}>Name</Text>
							<TextInput
								style={{
									height: 40,
									width: 200,
									borderColor: 'gray',
									borderWidth: 1,
									color: '#fff',
									fontFamily: 'DIN-Next'
								}}
								value={orderName}
								onChangeText={(value) => setOrderName(value)}
							/>
						</View>
						<View style={{ flexDirection: 'row', alignItems: 'center' }}>
							<Text style={{ marginRight: 15, color: '#fff', fontFamily: 'DIN-Next' }}>Table</Text>
							<TextInput
								keyboardType="number-pad"
								style={{
									height: 40,
									width: 200,
									borderColor: 'gray',
									borderWidth: 1,
									color: '#fff',
									fontFamily: 'DIN-Next'
								}}
								value={orderTable}
								onChangeText={(value) => setTable(value)}
							/>
						</View>
					</View>

					<Button style={{ marginTop: 15 }} onPress={handleSubmit} color="red" title="Place Order" />
				</View>
			</View>
		</Modal>
	);
};

export default SubmitOrder;
