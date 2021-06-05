import React from 'react';
import { Controller, useForm } from 'react-hook-form';
import { StyleSheet, Text, View, ScrollView, TextInput, StatusBar, Platform } from 'react-native';
import { Divider } from 'react-native-elements';
import { CustomButton } from '../../components/CustomComponents';

import Logo from '../../components/Logo';

const RegisterBasicInfo = () => {
    const {
			control,
			handleSubmit,
			formState: { errors },
		} = useForm();

		const onSubmit = (data) => console.log(data);
    
  return (
		<View style={styles.container}>
			{/* <View style={styles.logoView}>
				<View style={styles.logo}>
					<Logo />
				</View>
				<View style={styles.loginHeaderView}>
					<Text style={styles.loginHeader}>Basic Information</Text>
				</View>
			</View> */}
			<View style={styles.headerView}>
				<Text style={styles.header}>Basic Information</Text>
			</View>
			<Divider />

			{/* Name */}
			<View style={styles.formView}>
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
				{errors.password && (
					<Text style={{ color: 'red' }}>This is required.</Text>
				)}

				{/* Institute */}
				<Text style={styles.formLabel}>University</Text>
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
					name='university'
					rules={{ required: true }}
					defaultValue=''
				/>
				{errors.university && (
					<Text style={{ color: 'red' }}>This is required.</Text>
				)}

				{/* Department */}
				<Text style={styles.formLabel}>Department</Text>
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
					name='department'
					rules={{ required: true }}
					defaultValue=''
				/>
				{errors.department && (
					<Text style={{ color: 'red' }}>This is required.</Text>
				)}

				{/* <Text style={styles.formLabel}>Mobile Number</Text> */}
				{/* <TextInput
					value={mobileNum}
					onChangeText={onChangeMobileNum}
					style={styles.formInput}
				></TextInput>
				<Text style={styles.formLabel}>Password</Text>
				<TextInput
					value={password}
					onChangeText={onChangePassword}
					style={styles.formInput}
				></TextInput> */}
				<CustomButton text='Register' onPress={handleSubmit(onSubmit)} />
				{/* <View style={styles.signUpTextView}>
					<Text style={styles.signUpText}>Do not have an account yet?</Text>
					<TouchableOpacity onPress={handleSignUp}>
						<Text style={styles.signUpButton}> SignUp</Text>
					</TouchableOpacity>
				</View> */}
			</View>
		</View>
	);
}

export default RegisterBasicInfo;


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
	headerView: {
		height: 60,
    marginTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
	},
	header: {
		fontSize: 24,
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
		borderWidth: 0.5,
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
