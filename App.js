import { StatusBar } from 'expo-status-bar';
import React, { useState, useRef } from 'react';
import { StyleSheet, Text, View, Button, TextInput, TouchableOpacity, Platform } from 'react-native';
import firebase from 'firebase';
import { useFonts } from 'expo-font';
import { AppLoading } from 'expo';
import moment from 'moment';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { useGlobal } from 'reactn';
import headerOptions from './src/components/navigation-helpers/headerOptions';

import Mains from './src/pages/mains';
import Starters from './src/pages/starters';
import Desserts from './src/pages/desserts';
import Extras from './src/pages/extras';
import BottomSheet from './src/components/cartBar';
import BottomSheetWeb from './src/components/cartBarWeb';
import CartScreen from './src/components/cartScreen';

import SideCart from './src/components/sideCart';
import Drinks from './src/pages/drinks';
import { vw } from 'react-native-expo-viewport-units';

const Tab = createMaterialTopTabNavigator();

function Home() {
	const [
		orderName,
		setOrderName
	] = useState('');
	let orderRef = 'ref' + Math.floor(Math.random() * Math.floor(1000));
	const [
		orderTable,
		setTable
	] = useState('');
	const orderKitchenOrder = {
		item1: {
			item: '1/4 Chicken',
			spice: 'M'
		},
		item2: {
			item: 'Chicken Wrap',
			modifiers: [
				'+Hal',
				'-CJ'
			],
			sides: [
				'RPC',
				'RCM'
			],
			spice: 'LH'
		}
	};
	let timeStampCurrent = moment().toISOString();

	const handleSubmit = () => {
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
	};
	return (
		<View style={styles.container}>
			<View style={{ alignItems: 'center' }}>
				<View style={{ flexDirection: 'row', alignItems: 'center', marginVertical: 15 }}>
					<Text style={{ marginRight: 15 }}>Name</Text>
					<TextInput
						style={{ height: 40, width: 200, borderColor: 'gray', borderWidth: 1 }}
						value={orderName}
						onChangeText={(value) => setOrderName(value)}
					/>
				</View>
				<View style={{ flexDirection: 'row', alignItems: 'center' }}>
					<Text style={{ marginRight: 15 }}>Table</Text>
					<TextInput
						keyboardType="number-pad"
						style={{ height: 40, width: 200, borderColor: 'gray', borderWidth: 1 }}
						value={orderTable}
						onChangeText={(value) => setTable(value)}
					/>
				</View>
			</View>

			<Button onPress={handleSubmit} color="red" title="Submit Order" />
		</View>
	);
}

const Stack = createStackNavigator();

const MenuTabs = ({ navigation }) => {
	let tabOptions = {
		style: { backgroundColor: '#444' },
		labelStyle: { fontSize: vw(100) < 1300 ? 9.2 : 15, color: '#fff', fontFamily: 'DIN-Next' },
		indicatorStyle: { backgroundColor: '#CF0A24', height: '100%' }
	};
	return (
		<View style={{ maxHeight: '100%' }}>
			<Tab.Navigator tabBarOptions={tabOptions} initialRouteName="Starters">
				<Tab.Screen name="Starters" component={Starters} />
				<Tab.Screen name="Mains" component={Mains} />
				<Tab.Screen name=" Sides & Extras" component={Extras} />
				<Tab.Screen name="Drinks" component={Drinks} />

				<Tab.Screen name="Desserts" component={Desserts} />
			</Tab.Navigator>
			{vw(100) < 1300 ? Platform.OS !== 'web' ? (
				<BottomSheet navigation={navigation} />
			) : (
				<BottomSheetWeb navigation={navigation} />
			) : (
				<SideCart navigation={navigation} />
			)}
		</View>
	);
};

const App = ({ navigation }) => {
	const [
		global,
		setGlobal
	] = useGlobal();
	let [
		fontsLoaded
	] = useFonts({
		'DIN-Next': require('./assets/fonts/din-next.otf')
	});
	if (!fontsLoaded) {
		return <AppLoading />;
	}

	firebase.database().ref('stock/').on('value', (snapshot) => {
		const data = snapshot.val() ? snapshot.val() : {};
		setGlobal((state) => ({
			stockList: (state.stockList = data)
		}));
	});

	return (
		<NavigationContainer>
			<Stack.Navigator headerMode="float" initialRouteName="Menu">
				<Stack.Screen
					name="Menu"
					options={(({ route }) => ({ title: route.params.name }), headerOptions)}
					component={MenuTabs}
				/>
				<Stack.Screen name="Cart" options={{ headerShown: false }} component={CartScreen} />
			</Stack.Navigator>
			<StatusBar hidden />
		</NavigationContainer>
	);
};
export default App;
