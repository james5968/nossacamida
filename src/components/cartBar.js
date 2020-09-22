import React, { useRef } from 'react';
import { TouchableOpacity, Text } from 'react-native';
import { Modalize } from 'react-native-modalize';
import InnerCart from './innerCart';
import CartBarHeader from './cartBarHeader';

const BottomSheet = ({ navigation }) => {
	const modalizeRef = useRef(null);
	const onOpen = () => {
		if (modalizeRef.current) {
			modalizeRef.current.open('top');
		}
	};
	return (
		<Modalize
			ref={modalizeRef}
			modalStyle={{ backgroundColor: '#444', elevation: 100, borderTopRightRadius: 0, borderTopLeftRadius: 0 }}
			withHandle={true}
			handlePosition="inside"
			alwaysOpen={70}
			handleStyle={{ backgroundColor: '#777' }}
		>
			<CartBarHeader navigation={navigation} />
			<InnerCart />
		</Modalize>
	);
};

export default BottomSheet;
