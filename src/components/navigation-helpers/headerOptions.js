import React from 'react';
import { View, Image, Text, TouchableOpacity } from 'react-native';
import LogoImage from '../../../assets/desktop_Logo.png';
import UserIco from '../../../assets/icoUser.png';
import HelpIco from '../../../assets/icoHelp.png';
import Logo from '../../../assets/splash.png';

const headerOptions = {
	headerTitle: () => (
		<View style={{ flexDirection: 'row', alignItems: 'center', marginLeft: -25 }}>
			<Image
				resizeMethod="resize"
				resizeMode="contain"
				style={{ height: 100, width: 100, marginLeft: -20 }}
				source={Logo}
			/>
			<View
				style={{
					width: 200,
					height: 70,
					justifyContent: 'center',
					marginLeft: -60
				}}
			>
				<Text
					style={{
						color: '#CF0A24',
						fontSize: 22,
						textAlign: 'center',
						fontFamily: 'DIN-Next'
					}}
				>
					NOSSA COMIDA
				</Text>
			</View>
		</View>
	),
	headerRight: () => (
		<View style={{ flexDirection: 'row', marginRight: 10 }}>
			<TouchableOpacity onPress={() => alert('Sadly I am just for show for now!')}>
				<Image
					resizeMethod="resize"
					resizeMode="contain"
					style={{ height: 30, width: 30, marginHorizontal: 5 }}
					source={UserIco}
				/>
			</TouchableOpacity>
			<TouchableOpacity onPress={() => alert('Sadly I am just for show for now!')}>
				<Image
					resizeMethod="resize"
					resizeMode="contain"
					style={{ height: 34, width: 34, marginHorizontal: 5 }}
					source={HelpIco}
				/>
			</TouchableOpacity>
		</View>
	),
	headerStyle: { backgroundColor: '#fff' }
};

export default headerOptions;
