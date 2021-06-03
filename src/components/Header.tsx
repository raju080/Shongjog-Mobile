import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

import { Header as HeaderRNE } from 'react-native-elements';
import { MaterialIcons } from '@expo/vector-icons'; 
import { HeaderProp } from '../types';

const Header = ({ title, navigation } : HeaderProp) => {
  const menuPressHandler = () => {
    navigation.openDrawer();
  }
  return (
		<View style={styles.headerContainer}>
			<MaterialIcons name='menu' style={styles.menuButton} onPress={menuPressHandler} />
			<View>
				<Text style={styles.headerTitle}>{title}</Text>
			</View>
		</View>
		// <HeaderRNE
		// 	leftComponent={{
		// 		icon: 'menu',
		// 		color: '#fff',
		// 		onPress: menuPressHandler,
		// 	}}
		// 	centerComponent={{ text: title, style: styles.heading }}
		// />
	);
}

export default Header;

const styles = StyleSheet.create({
	headerContainer: {
		flexDirection: 'row',
		width: '100%',
		height: '100%',
		alignItems: 'center',
		justifyContent: 'flex-start',
	},
	headerTitle: {
		fontWeight: 'bold',
		fontSize: 20,
		// color: '#333',
		color: 'white'
	},
	heading: {
		color: 'white',
		fontSize: 22,
		fontWeight: 'bold',
	},
	menuButton: {
		fontSize: 30,
		padding: 10,
		color: 'black',
		marginRight: 20,
	},
});
