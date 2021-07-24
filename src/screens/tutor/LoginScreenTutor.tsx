import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import LoginComponent from '../../components/LoginComponent';
import { useAppDispatch } from '../../hooks/reactReduxHooks';
import { loginTutor } from '../../store/actionCreators';

import { ReactNavigationProps } from '../../types';

const LoginScreenTutor = ({ navigation }: ReactNavigationProps) => {

	const dispatch = useAppDispatch();
	
	const onLogin = (data: any) => {
		console.log(data);
		dispatch(loginTutor(data));
		navigation.navigate('Home');
	}
	const handleSignUp = () => {
		navigation.navigate('Register');
	}
	return (
		<View style={styles.container}>
			<LoginComponent onLogin={onLogin} handleSignUp={handleSignUp} loginText='Tutor Login' />
		</View>
	);
};

export default LoginScreenTutor;

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
});
