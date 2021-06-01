import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

import { ReactNavigationProps } from '../types';

const MainScreen = ({ navigation }: ReactNavigationProps) => {
	const handleStudentClick = () => {
		navigation.push('Student');
	};

	const handleTutorClick = () => {
		navigation.navigate('Tutor');
	};

	return (
		<View style={styles.container}>
			<Text style={styles.title}>Are You A</Text>
			<TouchableOpacity style={styles.button} onPress={handleStudentClick}>
				<Text style={styles.buttonText}>Student</Text>
			</TouchableOpacity>
			<TouchableOpacity style={styles.button} onPress={handleTutorClick}>
				<Text style={styles.buttonText}>Tutor</Text>
			</TouchableOpacity>
		</View>
	);
};

export default MainScreen;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
	},
	title: {
		fontSize: 20,
		fontWeight: 'bold',
	},
	separator: {
		marginVertical: 30,
		height: 1,
		width: '80%',
	},
	button: {
		width: 300,
		backgroundColor: '#1c313a',
		borderRadius: 25,
		marginVertical: 10,
		paddingVertical: 13,
	},
	buttonText: {
		fontSize: 16,
		fontWeight: '500',
		color: '#ffffff',
		textAlign: 'center',
	},
});
