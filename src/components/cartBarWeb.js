import React, { useRef } from 'react';
import { TouchableOpacity, Text, View } from 'react-native';
import { Modalize } from 'react-native-modalize';
import CartBarHeader from './cartBarHeader';

const BottomSheet = ({ navigation }) => {
	return (
		<View
			style={{
				backgroundColor: '#444',
				elevation: 100,
				borderTopRightRadius: 0,
				borderTopLeftRadius: 0,
				height: 70
			}}
		>
			<CartBarHeader navigation={navigation} />
		</View>
	);
};

export default BottomSheet;
