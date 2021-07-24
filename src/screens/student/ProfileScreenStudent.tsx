import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button } from 'react-native-elements';
import { useAppDispatch, useAppSelector } from '../../hooks/reactReduxHooks';
import { ReactNavigationProps } from '../../types';


const ProfileScreenStudent = ({ navigation }: ReactNavigationProps) => {
	const isLoggedIn = useAppSelector(
		(state): boolean => state.uiStudent.isLoggedIn
	);
	const dispatch = useAppDispatch();

	const handleLoginClick = () => {
		navigation.navigate('LoginScreenStudent');
	};

	return (
		<View style={styles.container}>
			{isLoggedIn ? (
				<Text style={styles.title}>Student Profile Screen</Text>
			) : (
				<View>
					<Text style={styles.title}>You are not logged in</Text>
					<Button title='Login' onPress={handleLoginClick} />
				</View>
			)}
		</View>
	);
};

export default ProfileScreenStudent;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: '#fff',
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
});
