import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, StatusBar } from 'react-native';

import { CustomButton } from '../components/CustomComponents';
import Logo from '../components/Logo';
import { ReactNavigationProps } from '../types';

const MainScreen = ({ navigation }: ReactNavigationProps) => {
	// StatusBar.setBackgroundColor('#34568B');
	StatusBar.setBackgroundColor('#5780c1');
	StatusBar.setBarStyle('light-content');

	const handleStudentClick = () => {
		navigation.push('Student');
	};

	const handleTutorClick = () => {
		navigation.navigate('Tutor');
	};

	return (
		<View style={styles.container}>
			<View style={styles.logoView}>
				<View style={styles.logo}>
					<Logo />
				</View>
				<View style={styles.welcomeText}>
					<Text style={styles.logoText}>Welcome to Shongjog</Text>
				</View>
			</View>
			<View style={styles.bottomView}>
				<View style={styles.titleView}>
					<Text style={styles.title}>Are You A?</Text>
				</View>
				<View style={styles.buttonsView}>
					<View style={{ marginVertical: 15 }}>
						<CustomButton text='Student' onPress={handleStudentClick} />
					</View>
					<View style={{ marginVertical: 15 }}>
						<CustomButton text='Tutor' onPress={handleTutorClick} />
					</View>
				</View>
			</View>
		</View>
	);
};

export default MainScreen;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
	},
	logoView: {
		flex: 2,
	},
	logo: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
		marginTop: 80,
	},
	welcomeText: {
		flex: 1,
	},
	logoText: {
		fontSize: 28,
		fontWeight: '500',
		color: '#1c313a',
	},
	bottomView: {
		flex: 3,
	},
	titleView: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
	},
	title: {
		fontSize: 20,
		fontWeight: 'bold',
	},
	buttonsView: {
		flex: 4,
	},
	button: {
		marginVertical: 20,
	},
	separator: {
		marginVertical: 30,
		height: 1,
		width: '80%',
	},
});
