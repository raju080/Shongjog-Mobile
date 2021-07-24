import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import LoginComponent from '../../components/LoginComponent';

import { ReactNavigationProps } from '../../types';

const LoginScreenStudent = ({ navigation }: ReactNavigationProps) => {
	const onLogin = (data: any) => {
		console.log(data);
		navigation.navigate('Home');
	};
	const handleSignUp = () => {
		navigation.navigate('Register');
	};
	return (
		<View style={styles.container}>
			<LoginComponent onLogin={onLogin} handleSignUp={handleSignUp} loginText='Student Login' />
		</View>
	);
};

export default LoginScreenStudent;

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
});
