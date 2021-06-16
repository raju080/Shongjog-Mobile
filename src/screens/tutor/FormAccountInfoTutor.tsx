import React from 'react';
import { Controller, useForm } from 'react-hook-form';
import {
	StyleSheet,
	Text,
	View,
	TextInput,
	StatusBar,
	Platform,
	SafeAreaView,
} from 'react-native';
import {
	Divider,
	ListItem,
	Tab,
	Button,
	Overlay,
	Card,
} from 'react-native-elements';

import { ReactNavigationProps } from '../../types';

const FormAccountInfoTutor = ({ navigation }: ReactNavigationProps) => {
	const {
		control,
		handleSubmit,
		getValues,
		watch,
		formState: { errors },
	} = useForm();
	const pass = watch('password');

	const onSubmit = (data) => {
		console.log(data);
		navigation.navigate('FormPersonalInfo');
	};

	return (
		<SafeAreaView style={styles.container}>
			{/* <View style={styles.logoView}>
				<View style={styles.logo}>
					<Logo />
				</View>
				<View style={styles.loginHeaderView}>
					<Text style={styles.loginHeader}>Basic Information</Text>
				</View>
			</View> */}

			{/* Basic Info */}
			<View style={styles.formView}>
				{/* <ListItem>
					<Text style={styles.header}>Account Information</Text>
				</ListItem> */}

				{/* Name */}
				<Text style={styles.formLabel}>Full Name</Text>
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
					name='fullName'
					rules={{ required: true }}
					defaultValue=''
				/>
				{errors.fullName && (
					<Text style={{ color: 'red' }}>This is required.</Text>
				)}

				{/* Mobile number */}
				<Text style={styles.formLabel}>Mobile Number</Text>
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
					name='mobileNum'
					rules={{ required: true }}
					defaultValue=''
				/>
				{errors.mobileNum && (
					<Text style={{ color: 'red' }}>This is required.</Text>
				)}

				{/* Email */}
				<Text style={styles.formLabel}>Email</Text>
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
					defaultValue=''
				/>

				{/* Password */}
				<Text style={styles.formLabel}>Password</Text>
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

				{/* Confirm Password */}
				<Text style={styles.formLabel}>Confirm Password</Text>
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
					name='password2'
					rules={{
						required: {
							value: true,
							message: 'This is required.',
						},
						validate: (val) => val === pass,
					}}
					defaultValue=''
				/>
				{errors.password2 && (
					<Text style={{ color: 'red' }}>
						{errors.password2.message
							? errors.password2.message
							: 'Password mismatch'}
					</Text>
				)}

				<Button title='Next' onPress={handleSubmit(onSubmit)}></Button>
			</View>
		</SafeAreaView>
	);
};

export default FormAccountInfoTutor;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		backgroundColor: '#fff',
		paddingTop: 10
		// marginTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
	},
	header: {
		fontSize: 24,
		fontWeight: '500',
		color: '#1c313a',
	},
	formView: {
		flex: 1,
		paddingHorizontal: 20,
		marginBottom: 10,
	},
	formGroup: {},
	formLabel: {
		fontSize: 16,
		fontWeight: '500',
	},
	formInput: {
		width: 300,
		// backgroundColor: 'rgba(255, 255,255,0.5)',
		borderWidth: 0.5,
		// borderBottomWidth: 1,
		borderRadius: 25,
		paddingHorizontal: 16,
		paddingVertical: 10,
		fontSize: 16,
		marginTop: 10,
		marginBottom: 20,
	},
	signUpButton: {
		fontSize: 18,
		fontWeight: '700',
		textDecorationLine: 'underline',
	},
});
