import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const ProfileScreenStudent = () => {
	return (
		<View style={styles.container}>
			<Text style={styles.title}>Student Profile Screen</Text>
		</View>
	);
};

export default ProfileScreenStudent;

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
});
