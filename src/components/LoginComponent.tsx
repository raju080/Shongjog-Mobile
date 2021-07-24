import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, View, TouchableOpacity } from 'react-native';

import Logo from '../components/Logo';
import { CustomButton } from './CustomComponents';

type LoginComponentPropType = {
  onLogin: any;
  handleSignUp: any;
	loginText: string;
}

const LoginComponent = ({ onLogin, handleSignUp, loginText }: LoginComponentPropType) => {
	const [mobileNum, onChangeMobileNum] = useState('');
	const [password, onChangePassword] = useState('');

	return (
		<View style={styles.container}>
			<View style={styles.logoView}>
				<View style={styles.logo}>
					<Logo />
				</View>
				<View style={styles.loginHeaderView}>
					<Text style={styles.loginHeader}>{loginText}</Text>
				</View>
			</View>
			<View style={styles.formView}>
				<Text style={styles.formLabel}>Mobile Number</Text>
				<TextInput
					value={mobileNum}
					onChangeText={onChangeMobileNum}
					style={styles.formInput}
				></TextInput>
				<Text style={styles.formLabel}>Password</Text>
				<TextInput
					value={password}
					onChangeText={onChangePassword}
					style={styles.formInput}
				></TextInput>
				<CustomButton
					text='Login'
					onPress={onLogin}
				/>
				<View style={styles.signUpTextView}>
					<Text style={styles.signUpText}>Do not have an account yet?</Text>
					<TouchableOpacity onPress={handleSignUp}>
						<Text style={styles.signUpButton}> SignUp</Text>
					</TouchableOpacity>
				</View>
			</View>
		</View>
	);
};

export default LoginComponent;

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
	loginHeaderView: {
		flex: 1,
	},
	loginHeader: {
		fontSize: 28,
		fontWeight: '500',
		color: '#1c313a',
	},
	formView: {
		flex: 3,
	},
	formLabel: {
		fontSize: 16,
		fontWeight: '500',
	},
	formInput: {
		width: 300,
		// backgroundColor: 'rgba(255, 255,255,0.5)',
    borderWidth: .5,
    // borderBottomWidth: 1,
		borderRadius: 25,
		paddingHorizontal: 16,
		paddingVertical: 10,
		fontSize: 16,
		marginTop: 10,
		marginBottom: 20,
	},
	signUpTextView: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
		paddingVertical: 16,
		flexDirection: 'row',
	},
	signUpText: {
		fontSize: 16,
	},
	signUpButton: {
		fontSize: 18,
		fontWeight: '700',
		textDecorationLine: 'underline',
	},
});
