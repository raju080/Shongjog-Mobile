import React, { useState } from 'react';
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
import { ScrollView } from 'react-native-gesture-handler';
import {
	Divider,
	ListItem,
	Tab,
	Button,
	Overlay,
	Card,
} from 'react-native-elements';
import DropDownPicker from 'react-native-dropdown-picker';

import { CustomButton } from '../../components/CustomComponents';

import Logo from '../../components/Logo';
import { Picker } from '@react-native-picker/picker';

const RegisterScreenTutor = () => {
	// dropdown states
	const [genderDOpen, setGenderDOpen] = useState(false);
	const [districtDOpen, setDistrictDOpen] = useState(false);
	const [areaDOpen, setAreaDOpen] = useState(false);
	const [addPreferenceOverlayOpen, setAddPreferenceOverlayOpen] =
		useState(false);

	const {
		control,
		handleSubmit,
		getValues,
		watch,
		formState: { errors },
	} = useForm();
	const pass = watch('password');

	const [preferences, setGender] = useState('');

	const genders = [
		{ label: 'Male', value: 'male' },
		{ label: 'Female', value: 'female' },
	];

	const onSubmit = (data) => console.log(data);

	const toggleOverlay = () => {
		setAddPreferenceOverlayOpen(!addPreferenceOverlayOpen);
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
			<ScrollView style={styles.formView}>
				<ListItem>
					<Text style={styles.header}>Account Information</Text>
				</ListItem>

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

				{/* Personal Info */}
				<ListItem>
					<Text style={styles.header}>Personal Information</Text>
				</ListItem>

				{/* Gender */}
				<View>
					{/* District */}
					<Text style={styles.formLabel}>District</Text>
					<Controller
						control={control}
						render={({ field: { onChange, onBlur, value } }) => (
							<DropDownPicker
								open={districtDOpen}
								value={value}
								items={genders}
								setValue={(val) => onChange(val)}
								setOpen={() => setDistrictDOpen(!districtDOpen)}
								containerStyle={{ width: 300 }}
							/>
						)}
						name='district'
						defaultValue=''
					/>

					{/* Area */}
					<Text style={styles.formLabel}>Area</Text>
					<Controller
						control={control}
						render={({ field: { onChange, onBlur, value } }) => (
							<DropDownPicker
								open={areaDOpen}
								value={value}
								items={genders}
								setValue={(val) => onChange(val)}
								setOpen={() => setAreaDOpen(!areaDOpen)}
								containerStyle={{ width: 300 }}
							/>
						)}
						name='area'
						defaultValue=''
					/>

					<Text style={styles.formLabel}>Gender</Text>
					<Controller
						control={control}
						render={({ field: { onChange, onBlur, value } }) => (
							<DropDownPicker
								open={genderDOpen}
								value={value}
								items={genders}
								setValue={(val) => onChange(val)}
								setOpen={() => setGenderDOpen(!genderDOpen)}
								containerStyle={{ width: 300 }}
							/>
						)}
						name='gender'
						defaultValue=''
					/>

					{/* Tuition preferences */}
					<ListItem>
						<Text style={styles.header}>Education Information</Text>
					</ListItem>

					{/* University */}
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
						rules={{
							required: {
								value: true,
								message: 'This field is required',
							},
						}}
						name='university'
						defaultValue=''
					/>
					{errors.university && (
						<Text style={{ color: 'red' }}>{errors.university.message}</Text>
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
						rules={{
							required: {
								value: true,
								message: 'This field is required',
							},
						}}
						name='department'
						defaultValue=''
					/>
					{errors.department && (
						<Text style={{ color: 'red' }}>{errors.department.message}</Text>
					)}
				</View>

				{/* Tuition preferences */}
				<ListItem>
					<Text style={styles.header}>Tuition Preferences</Text>
				</ListItem>

				<Button
					title='Add Tuition Preference'
					style={{
						marginBottom: 10,
					}}
					onPress={() => toggleOverlay()}
				/>
			</ScrollView>

			<Overlay
				isVisible={addPreferenceOverlayOpen}
				onBackdropPress={toggleOverlay}
			>
				<Card>
					<Card.Title>Add Tuition Preference</Card.Title>
					<Card.Divider></Card.Divider>
				</Card>
			</Overlay>

			{/* <Tab
				value={index}
				onChange={(e) => setIndex(e)}
				indicatorStyle={{
					backgroundColor: 'white',
					height: 3,
				}}
				variant='primary'
			>
				<Tab.Item
					title='Recent'
					titleStyle={{ fontSize: 12 }}
					icon={{ name: 'timer', type: 'ionicon', color: 'white' }}
				/>
				<Tab.Item
					title='favourite'
					titleStyle={{ fontSize: 12 }}
					icon={{ name: 'heart', type: 'ionicon', color: 'white' }}
				/>
				<Tab.Item
					title='cart'
					titleStyle={{ fontSize: 12 }}
					icon={{ name: 'cart', type: 'ionicon', color: 'white' }}
				/>
			</Tab>
			{(() => {
				switch (index) {
					case 0:
						return <Text>Recent</Text>;
					case 1:
						return <Text>favourites</Text>;
					case 2:
						return <Text>Your Cart</Text>;
					default:
						return null;
				}
			})()} */}

			<CustomButton text='Register' onPress={handleSubmit(onSubmit)} />
			{/* <View style={styles.signUpTextView}>
					<Text style={styles.signUpText}>Do not have an account yet?</Text>
					<TouchableOpacity onPress={handleSignUp}>
						<Text style={styles.signUpButton}> SignUp</Text>
					</TouchableOpacity>
				</View> */}
		</SafeAreaView>
	);
};

export default RegisterScreenTutor;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		backgroundColor: '#fff',
		marginTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
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
