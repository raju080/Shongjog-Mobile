import React, { useState, useEffect } from 'react';
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
import ModalSelector from 'react-native-modal-selector';

import { CustomButton } from '../../components/CustomComponents';

import Logo from '../../components/Logo';
import { Picker } from '@react-native-picker/picker';
import {COLORS} from '../../constants/Colors';
import { AREAS, UNIVERSITIES, COLLEGES } from '../../shared/lists';
import { ReactNavigationProps } from '../../types';
import {
	Dropdown,
	GroupDropdown,
	MultiselectDropdown,
} from 'sharingan-rn-modal-dropdown';


const RegisterScreenTutor = ({ navigation }: ReactNavigationProps) => {
	// dropdown states
	const [genderDOpen, setGenderDOpen] = useState(false);
	const [districtDOpen, setDistrictDOpen] = useState(false);
	const [areaDOpen, setAreaDOpen] = useState(false);
	const [addPreferenceOverlayOpen, setAddPreferenceOverlayOpen] =
		useState(false);

	const [dist, setDist] = useState<string>('');
	const [uni, setUni] = useState<string>('');

	const {
		control,
		handleSubmit,
		getValues,
		watch,
		formState: { errors },
	} = useForm();
	const pass = watch('password');
	// const dist = watch('district');

	const genders = [
		{ label: 'Male', value: 'male' },
		{ label: 'Female', value: 'female' },
	];

	const levels = [
		{ label: '1st', value: '1st' },
		{ label: '2nd', value: '2nd' },
		{ label: '3rd', value: '3rd' },
		{ label: '4th', value: '4th' },
		{ label: 'Graduated', value: 'Graduated' },
	];

	const districts = Object.keys(AREAS)
		.sort()
		.map((d, k) => ({ value: d, label: d }));
	const universities = Object.keys(UNIVERSITIES)
		.sort()
		.map((d, k) => ({ value: d, label: d }));
	const colleges = COLLEGES.sort().map((d, k) => ({ value: d, label: d }));
	// let areas = AREAS[dist.label]
	// 	?.sort()
	// 	.map((d, k) => ({ key: k, label: d }));

	const onSubmit = (data: any) => {
		console.log(data);
		navigation.navigate('Login');
	};

	const toggleOverlay = () => {
		setAddPreferenceOverlayOpen(!addPreferenceOverlayOpen);
	};

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
					<Controller
						control={control}
						render={({ field: { onChange, onBlur, value } }) => (
							<Dropdown
								label='Your District'
								data={districts}
								value={value}
								onChange={(option) => {
									onChange(option);
									setDist(option);
								}}
								mainContainerStyle={styles.formSelect}
							/>
						)}
						rules={{
							required: {
								value: true,
								message: 'This is required.',
							},
						}}
						name='district'
					/>
					{errors.district && (
						<Text style={{ color: 'red' }}>{errors.district.message}</Text>
					)}

					<Controller
						control={control}
						render={({ field: { onChange, onBlur, value } }) => {
							let areas = AREAS[dist]?.map((d: string, k: string) => ({
								value: d,
								label: d,
							}));
							return (
								<Dropdown
									label='Your Area'
									data={areas}
									value={value}
									onChange={onChange}
									mainContainerStyle={styles.formSelect}
								/>
							);
						}}
						rules={{
							required: {
								value: true,
								message: 'This is required.',
							},
						}}
						name='area'
					/>
					{errors.area && (
						<Text style={{ color: 'red' }}>{errors.area.message}</Text>
					)}

					{/* <Text style={styles.formLabel}>Gender</Text>
					<Controller
						control={control}
						render={({ field: { onChange, onBlur, value } }) => (
							<Picker
								selectedValue={getValues('gender')}
								onValueChange={(itemValue, itemIndex) => onChange(itemValue)}
								style={styles.formSelect}
								mode='dropdown'
							>
								{genders.map((item, key) => (
									<Picker.Item
										label={item.label}
										value={item.value}
										key={key}
									/>
								))}
							</Picker>
						)}
						name='gender'
						defaultValue='male'
					/> */}
					<Controller
						control={control}
						render={({ field: { onChange, onBlur, value } }) => (
							<Dropdown
								label='Your Gender'
								data={genders}
								value={value}
								onChange={(option) => {
									onChange(option);
								}}
								mainContainerStyle={styles.formSelect}
							/>
						)}
						rules={{
							required: {
								value: true,
								message: 'This is required.',
							},
						}}
						name='gender'
					/>
					{errors.gender && (
						<Text style={{ color: 'red' }}>{errors.gender.message}</Text>
					)}

					{/* Tuition preferences */}
					<ListItem>
						<Text style={styles.header}>Education Information</Text>
					</ListItem>

					{/* University */}
					<Controller
						control={control}
						render={({ field: { onChange, onBlur, value } }) => (
							<Dropdown
								label='Your University'
								data={universities}
								value={value}
								onChange={(option) => {
									onChange(option);
									setUni(option);
								}}
								mainContainerStyle={styles.formSelect}
							/>
						)}
						rules={{
							required: {
								value: true,
								message: 'This is required.',
							},
						}}
						name='university'
					/>
					{errors.university && (
						<Text style={{ color: 'red' }}>{errors.university.message}</Text>
					)}

					{/* Department */}
					<Controller
						control={control}
						render={({ field: { onChange, onBlur, value } }) => {
							let departments = UNIVERSITIES[uni]?.map(
								(d: string, k: string) => ({ value: d, label: d })
							);
							return (
								<Dropdown
									label='Your Department'
									data={departments}
									value={value}
									onChange={(option) => {
										onChange(option);
									}}
									mainContainerStyle={styles.formSelect}
								/>
							);
						}}
						rules={{
							required: {
								value: true,
								message: 'This is required.',
							},
						}}
						name='department'
					/>
					{errors.department && (
						<Text style={{ color: 'red' }}>{errors.department.message}</Text>
					)}

					<Controller
						control={control}
						render={({ field: { onChange, onBlur, value } }) => (
							<Dropdown
								label='Your Level/Year'
								data={levels}
								value={value}
								onChange={(option) => {
									onChange(option);
								}}
								mainContainerStyle={styles.formSelect}
							/>
						)}
						rules={{
							required: {
								value: true,
								message: 'This is required.',
							},
						}}
						name='levelOrYear'
					/>
					{errors.levelOrYear && (
						<Text style={{ color: 'red' }}>{errors.levelOrYear.message}</Text>
					)}

					<Controller
						control={control}
						render={({ field: { onChange, onBlur, value } }) => (
							<Dropdown
								label='Your College'
								data={colleges}
								value={value}
								onChange={(option) => {
									onChange(option);
								}}
								mainContainerStyle={styles.formSelect}
							/>
						)}
						name='college'
					/>
				</View>

				{/* Tuition preferences */}
				{/* <ListItem>
					<Text style={styles.header}>Tuition Preferences</Text>
				</ListItem> */}

				{/* <Button
					title='Add Tuition Preference'
					style={{
						marginBottom: 10,
					}}
					onPress={() => toggleOverlay()}
				/> */}
			</ScrollView>

			{/* <Overlay
				isVisible={addPreferenceOverlayOpen}
				onBackdropPress={toggleOverlay}
			>
				<Card>
					<Card.Title>Add Tuition Preference</Card.Title>
					<Card.Divider></Card.Divider>
				</Card>
			</Overlay> */}

			<CustomButton text='Register' onPress={handleSubmit(onSubmit)} />
			{/* <View style={styles.signUpTextView}>
					<Text style={styles.signUpText}>Do not have an account yet?</Text>
					<TouchableOpacity onPress={handleSignUp}>
						<Text style={styles.signUpButton}> SignUp</Text>
					</TouchableOpacity>
				</View> */}
		</View>
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
		paddingHorizontal: 10,
		marginBottom: 10,
	},
	formGroup: {},
	formLabel: {
		fontSize: 16,
		fontWeight: '500',
	},
	formInput: {
		width: 340,
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
	formSelect: {
		// width: 300,
		// borderWidth: 0.5,
		// backgroundColor: COLORS.light,
		// paddingHorizontal: 16,
		// paddingVertical: 10,
		// fontSize: 16,
		// elevation: 7,
		// marginTop: 10,
		// marginBottom: 20,
		// paddingVertical: 10,
		marginVertical: 5
	},
	formModalSelect: {
		width: 300,
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
