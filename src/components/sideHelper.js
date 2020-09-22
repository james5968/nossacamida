import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Picker } from 'react-native';

const SideHelper = ({ value1, value2, changeHandler1, changeHandler2, choice, setChoice }) => {
	const SidePicker = ({ value, changeHandler }) => {
		return (
			<Picker
				selectedValue={value}
				style={{ height: 50, width: 150, marginBottom: 10, fontFamily: 'DIN-Next' }}
				onValueChange={(itemValue, itemIndex) => changeHandler(itemValue)}
				itemStyle={{ fontFamily: 'DIN-Next' }}
			>
				<Picker.Item label="Chips" value="Chips" />
				<Picker.Item label="Garlic Bread" value="Garlic Bread" />
				<Picker.Item label="Peri Salted Chips" value="Peri Salted Chips" />
				<Picker.Item label="Creamy Mash" value="Creamy Mash" />
				<Picker.Item label="Macho Peas" value="Macho Peas" />
				<Picker.Item label="Mixed Leaf Salad" value="Mixed Leaf Salad" />
				<Picker.Item label="Spicy Rice" value="Spicy Rice" />
				<Picker.Item label="Coleslaw" value="Coleslaw" />
				<Picker.Item label="Long Stem Brocolli" value="Long Stem Brocolli" />
				<Picker.Item label="Corn on the Cob" value="Corn on the Cob" />
			</Picker>
		);
	};

	return (
		<View>
			<View style={{ flexDirection: 'row', justifyContent: 'space-evenly' }}>
				<TouchableOpacity
					onPress={() => setChoice(0)}
					style={{
						backgroundColor: choice == 0 ? '#ED5250' : '#eee',
						width: 90,
						height: 40,
						borderColor: '#ED5250',
						borderWidth: 2,

						margin: 5,
						justifyContent: 'center'
					}}
				>
					<Text style={{ color: choice == 0 ? '#fff' : '#000', fontSize: 15, textAlign: 'center' }}>
						No Sides
					</Text>
				</TouchableOpacity>
				<TouchableOpacity
					onPress={() => setChoice(1)}
					style={{
						backgroundColor: choice == 1 ? '#97C31E' : '#eee',
						width: 90,
						height: 40,
						borderWidth: 2,
						borderColor: '#97C31E',
						margin: 5,
						justifyContent: 'center'
					}}
				>
					<Text style={{ color: choice == 1 ? '#fff' : '#000', fontSize: 15, textAlign: 'center' }}>
						One Side
					</Text>
				</TouchableOpacity>
				<TouchableOpacity
					onPress={() => setChoice(2)}
					style={{
						backgroundColor: choice == 2 ? '#65C3BE' : '#eee',
						width: 90,
						height: 40,
						borderWidth: 2,
						borderColor: '#65C3BE',
						margin: 5,
						justifyContent: 'center'
					}}
				>
					<Text style={{ color: choice == 2 ? '#fff' : '#000', fontSize: 15, textAlign: 'center' }}>
						Two Sides
					</Text>
				</TouchableOpacity>
			</View>

			{choice == 1 && <SidePicker value={value1} changeHandler={changeHandler1} />}
			{choice == 2 && (
				<View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
					<SidePicker value={value1} changeHandler={changeHandler1} />
					<SidePicker value={value2} changeHandler={changeHandler2} />
				</View>
			)}
		</View>
	);
};

export default SideHelper;
