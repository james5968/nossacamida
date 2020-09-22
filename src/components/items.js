import React, { useState } from 'react';
import { View, Text, Platform, TouchableOpacity } from 'react-native';
import Modal from 'modal-react-native-web';

import { vw, vh, vmin, vmax } from 'react-native-expo-viewport-units';
import { useGlobal } from 'reactn';
import SideHelper from './sideHelper';

const Items = ({ title, type, price, description }) => {
	const [
		selectedValueOne,
		setSelectedValueOne
	] = useState('Chips');
	const [
		choice,
		setChoice
	] = useState(0);
	const [
		selectedValueTwo,
		setSelectedValueTwo
	] = useState('Chips');
	const [
		modalVisible,
		setModalVisible
	] = useState(false);
	const [
		spiceSelection,
		setSpiceSelection
	] = useState(null);
	const [
		global,
		setGlobal
	] = useGlobal();
	let width;
	if (vw(100) > 1300 && Platform.OS == 'web') {
		width = vw(18.7);
	} else {
		width = vw(49);
	}

	const handleAddItem = () => {
		setModalVisible(!modalVisible);
	};

	let handleAddToCart = () => {
		let priceSide = parseFloat(price);

		let sideArray = [];
		if (choice == 1) {
			sideArray.push(selectedValueOne);
			priceSide = priceSide + 2.3;
		} else if (choice == 2) {
			sideArray.push(selectedValueOne);
			sideArray.push(selectedValueTwo);
			priceSide = priceSide + 3.05;
		}

		let cartItem = {
			id: global.cart.length,
			qty: 1,
			item: title,
			type: type,
			spice: spiceSelection,
			price: priceSide,
			modifiers: {
				sides: sideArray,
				minus: [],
				plus: []
			}
		};
		let tempArray = global.cart;
		tempArray.push(cartItem);

		setGlobal((state) => ({
			cart: (state.cart = tempArray)
		}));
		setSpiceSelection(null);
		setChoice(0);
		setSelectedValueOne('Chips');
		setSelectedValueTwo('Chips');

		setModalVisible(!modalVisible);
	};

	let handleBack = () => {
		setModalVisible(!modalVisible);
	};

	return (
		<View
			style={{
				marginVertical: 2,
				marginHorizontal: 1,

				width: width,
				backgroundColor: '#333',
				borderWidth: 0,
				elevation: 10,
				borderRadius: 6
			}}
		>
			<Text
				numberOfLines={1}
				style={{ color: '#fff', fontFamily: 'DIN-Next', fontSize: 15, margin: 10, textAlign: 'center' }}
			>
				{title}
			</Text>
			<View style={{ backgroundColor: '#CF0A24', height: 2 }} />
			<View style={{ maxHeight: '100%', justifyContent: 'space-between', flexDirection: 'column' }}>
				<Text style={{ color: '#eee', fontFamily: 'DIN-Next', height: 60, margin: 10, textAlign: 'center' }}>
					{description}
				</Text>
				<TouchableOpacity
					style={{
						backgroundColor: '#FECD42',
						height: 40,
						justifyContent: 'space-evenly',
						alignItems: 'center',
						flexDirection: 'row',

						borderBottomLeftRadius: 6,
						borderBottomRightRadius: 6
					}}
					onPress={handleAddItem}
				>
					<Text style={{ color: '#000', fontFamily: 'DIN-Next', textAlign: 'center', fontSize: 14 }}>
						ADD ITEM
					</Text>
					<Text
						style={{
							borderLeftWidth: 1,
							borderLeftColor: '#000',
							color: '#000',
							fontFamily: 'DIN-Next',
							textAlign: 'center',
							fontSize: 14,
							paddingLeft: 10
						}}
					>
						{price && '£' + parseFloat(price).toFixed(2)}
					</Text>
				</TouchableOpacity>
			</View>
			<Modal animationType="slide" transparent={true} visible={modalVisible}>
				<View style={{ backgroundColor: 'rgba(0,0,0,0.5)', height: '100%' }}>
					<View
						style={{
							marginLeft: 'auto',
							marginRight: 'auto',
							marginVertical: 40,
							width: vw(100) < 1200 ? vw(100) : vw(70),
							height: vh(85),
							backgroundColor: '#eee'
						}}
					>
						<View style={{ alignItems: 'center', justifyContent: 'space-evenly', height: '99%' }}>
							<Text style={{ fontFamily: 'DIN-Next', fontSize: 25, margin: 10, marginBottom: 5 }}>
								{title}
							</Text>
							<Text
								style={{ fontFamily: 'DIN-Next', fontSize: 15, marginBottom: 5, textAlign: 'center' }}
							>
								{description}
							</Text>
							{type == 'main' && (
								<View>
									<View style={{ flexDirection: 'row' }}>
										<View>
											<TouchableOpacity
												onPress={() => setSpiceSelection('Lemon and Herb')}
												style={{
													width: vw(100) < 1200 ? vw(40) : 200,
													height: vw(100) < 1200 ? vw(20) : 100,
													borderWidth: 4,
													borderColor: '#97C31E',
													justifyContent: 'center',
													margin: 5,
													backgroundColor:
														spiceSelection == 'Lemon and Herb' ? '#97C31E' : 'none'
												}}
											>
												<Text
													style={{
														fontFamily: 'DIN-Next',
														fontSize: 15,
														margin: 10,
														color: spiceSelection == 'Lemon and Herb' ? '#FFF' : '#265728',
														textAlign: 'center'
													}}
												>
													Lemon and Herb
												</Text>
											</TouchableOpacity>
											<TouchableOpacity
												onPress={() => setSpiceSelection('Medium')}
												style={{
													width: vw(100) < 1200 ? vw(40) : 200,
													height: vw(100) < 1200 ? vw(20) : 100,
													borderWidth: 4,
													borderColor: '#FE9142',
													justifyContent: 'center',
													margin: 5,
													backgroundColor: spiceSelection == 'Medium' ? '#FE9142' : 'none'
												}}
											>
												<Text
													style={{
														fontFamily: 'DIN-Next',
														fontSize: 15,
														margin: 10,
														textAlign: 'center',
														color: spiceSelection == 'Medium' ? '#FFF' : '#E57727'
													}}
												>
													Medium
												</Text>
											</TouchableOpacity>
											<TouchableOpacity
												onPress={() => setSpiceSelection('Extra Hot')}
												style={{
													width: vw(100) < 1200 ? vw(40) : 200,
													height: vw(100) < 1200 ? vw(20) : 100,
													borderWidth: 4,
													borderColor: '#85471C',
													justifyContent: 'center',
													margin: 5,
													backgroundColor: spiceSelection == 'Extra Hot' ? '#85471C' : 'none'
												}}
											>
												<Text
													style={{
														fontFamily: 'DIN-Next',
														fontSize: 15,
														margin: 10,
														textAlign: 'center',
														color: spiceSelection == 'Extra Hot' ? '#FFF' : '#573116'
													}}
												>
													Extra Hot
												</Text>
											</TouchableOpacity>
										</View>
										<View>
											<TouchableOpacity
												onPress={() => setSpiceSelection('Coconut and Lemon')}
												style={{
													width: vw(100) < 1200 ? vw(40) : 200,
													height: vw(100) < 1200 ? vw(20) : 100,
													borderWidth: 4,
													borderColor: '#65C3BE',
													justifyContent: 'center',
													margin: 5,
													backgroundColor:
														spiceSelection == 'Coconut and Lemon' ? '#65C3BE' : 'none'
												}}
											>
												<Text
													style={{
														fontFamily: 'DIN-Next',
														fontSize: 15,
														margin: 10,
														textAlign: 'center',
														color:
															spiceSelection == 'Coconut and Lemon' ? '#FFF' : '#104b79'
													}}
												>
													Coconut and Lemon
												</Text>
											</TouchableOpacity>
											<TouchableOpacity
												onPress={() => setSpiceSelection('Hot')}
												style={{
													width: vw(100) < 1200 ? vw(40) : 200,
													height: vw(100) < 1200 ? vw(20) : 100,
													borderWidth: 4,
													borderColor: '#CF0A24',
													justifyContent: 'center',
													margin: 5,
													backgroundColor: spiceSelection == 'Hot' ? '#CF0A24' : 'none'
												}}
											>
												<Text
													style={{
														fontFamily: 'DIN-Next',
														fontSize: 15,
														margin: 10,
														textAlign: 'center',
														color: spiceSelection == 'Hot' ? '#FFf' : '#920618'
													}}
												>
													Hot
												</Text>
											</TouchableOpacity>
											<TouchableOpacity
												onPress={() => setSpiceSelection('Peri-Tamer')}
												style={{
													width: vw(100) < 1200 ? vw(40) : 200,
													height: vw(100) < 1200 ? vw(20) : 100,
													borderWidth: 4,
													borderColor: '#ED5250',
													justifyContent: 'center',
													margin: 5,
													backgroundColor: spiceSelection == 'Peri-Tamer' ? '#ED5250' : 'none'
												}}
											>
												<Text
													style={{
														fontFamily: 'DIN-Next',
														fontSize: 15,
														margin: 10,
														textAlign: 'center',
														color: spiceSelection == 'Peri-Tamer' ? '#FFf' : '#A43B39'
													}}
												>
													Peri-Tamer
												</Text>
											</TouchableOpacity>
										</View>
									</View>
									<SideHelper
										value1={selectedValueOne}
										changeHandler1={setSelectedValueOne}
										value2={selectedValueTwo}
										changeHandler2={setSelectedValueTwo}
										choice={choice}
										setChoice={setChoice}
									/>
								</View>
							)}
							<View style={{ width: '100%', maxWidth: 500 }}>
								<TouchableOpacity
									style={{ backgroundColor: '#FECD42', width: '100%' }}
									onPress={handleAddToCart}
								>
									<Text
										style={{
											fontFamily: 'DIN-Next',
											fontSize: 20,
											textAlign: 'center',
											margin: 5
										}}
									>
										ADD ITEM
									</Text>
								</TouchableOpacity>
								<TouchableOpacity
									style={{ backgroundColor: '#ED5250', width: '100%', marginTop: 15 }}
									onPress={handleBack}
								>
									<Text
										style={{
											fontFamily: 'DIN-Next',
											fontSize: 20,
											textAlign: 'center',
											margin: 5
										}}
									>
										BACK
									</Text>
								</TouchableOpacity>
							</View>
						</View>
					</View>
				</View>
			</Modal>
		</View>
	);
};

export default Items;
