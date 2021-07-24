import React, { useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { StyleSheet, Text, TextInput, View, TouchableOpacity } from 'react-native';
import { formStyles } from '../assets/styles/formStyles';

import Logo from '../components/Logo';
import { CustomButton } from './CustomComponents';

type LoginComponentPropType = {
  onLogin: any;
  handleSignUp: any;
	loginText: string;
}

const LoginComponent = ({ onLogin, handleSignUp, loginText }: LoginComponentPropType) => {

	const {
		control,
		handleSubmit,
		getValues,
		watch,
		formState: { errors },
	} = useForm();

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
				<Text style={styles.formLabel}>Email</Text>
				{/* <TextInput
					value={mobileNum}
					onChangeText={onChangeMobileNum}
					style={styles.formInput}
				></TextInput> */}
				<Controller
					control={control}
					render={({ field: { onChange, onBlur, value } }) => (
						<TextInput
							style={styles.formInput}
							onBlur={onBlur}
							onChangeText={(value) => onChange(value)}
							value={value}
						/>
					)}
					name='email'
					rules={{ required: true }}
					defaultValue=''
				/>
				{errors.email && (
					<Text style={{ color: 'red' }}>This is required.</Text>
				)}

				<Text style={styles.formLabel}>Password</Text>
				{/* <TextInput
					value={password}
					onChangeText={onChangePassword}
					style={styles.formInput}
				></TextInput> */}
				<Controller
					control={control}
					render={({ field: { onChange, onBlur, value } }) => (
						<TextInput
							style={styles.formInput}
							onBlur={onBlur}
							onChangeText={(value) => onChange(value)}
							value={value}
						/>
					)}
					name='password'
					rules={{ required: true }}
					defaultValue=''
				/>
				{/* {errors.password && (
					<Text style={{ color: 'red' }}>{errors.password.message}</Text>
				)} */}
				{errors.password && (
					<Text style={{ color: 'red' }}>This is required.</Text>
				)}
				<CustomButton text='Login' onPress={handleSubmit(onLogin)} />
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
