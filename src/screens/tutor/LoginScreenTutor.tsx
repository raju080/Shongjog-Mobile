import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import LoginComponent from '../../components/LoginComponent';

import RegisterBasicInfo from './RegisterBasicInfo';

import { ReactNavigationProps } from '../../types';

const LoginScreenTutor = ({ navigation }: ReactNavigationProps) => {
	const onLogin = (data: any) => {
		console.log(data);
		navigation.navigate('Home');
	}
	const handleSignUp = () => {
		console.log("sign up");
	}
	return (
		// <View style={styles.container}>
		// 	<LoginComponent onLogin={onLogin} handleSignUp={handleSignUp} />
		// </View>
		<RegisterBasicInfo />
	);
};

export default LoginScreenTutor;

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
});
