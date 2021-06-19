import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { useAppSelector } from '../../hooks/reactReduxHooks';
import { Avatar, Card, Button } from 'react-native-elements';
import {
	Dropdown,
	GroupDropdown,
	MultiselectDropdown,
} from 'sharingan-rn-modal-dropdown';

import { TutorDetailsTypeStudent, TutorTypeTutor } from '../../types_store';
import { Controller, useForm } from 'react-hook-form';
import { AREAS, COLLEGES, UNIVERSITIES } from '../../shared/lists';
import { ReactNavigationProps } from '../../types';
import { Value } from 'react-native-reanimated';
import { COLORS } from '../../constants/Colors';


const ProfileScreenTutor = ({ navigation }: ReactNavigationProps) => {
	const tutor = useAppSelector(
		(state): TutorTypeTutor => state.tutorTutor.tutor
	);

	let formDefaultValues = {
		fullName: tutor.name,
		mobileNum: tutor.mobile,
		email: tutor.email,
		password: tutor.password,
		'address.district': tutor.address.district,
		'address.area': tutor.address.area,
		'education.university': tutor.education.university,
		'education.department': tutor.education.department,
		'education.levelOrYear': tutor.education.levelOrYear,
		'education.college': tutor.education.college,
	};

	const {
		control,
		handleSubmit,
		getValues,
		watch,
		formState: { errors },
	} = useForm({
		defaultValues: formDefaultValues,
	});

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

	const [dist, setDist] = useState<string>(tutor.address.district);
	const [uni, setUni] = useState<string>(tutor.education.university);

	const districts = Object.keys(AREAS)
		.sort()
		.map((d, k) => ({ value: d, label: d }));
	const universities = Object.keys(UNIVERSITIES)
		.sort()
		.map((d, k) => ({ value: d, label: d }));
	const colleges = COLLEGES.sort().map((d, k) => ({
		key: k,
		value: d,
		label: d,
	}));

	console.log(formDefaultValues);

	const handlePreferenceClick = () => {
		navigation.navigate('PreferenceScreenTutor');
	};

	const onSubmit = (data: any) => {
		console.log(data);
	}

	return (
		<ScrollView contentContainerStyle={styles.container}>
			<View style={styles.profileHeader}>
				<Avatar
					rounded
					source={{
						uri: tutor.imageUri,
					}}
					size={150}
					title='raju'
				>
					<Avatar.Accessory size={25} />
				</Avatar>
				<View style={{ paddingLeft: 15 }}>
					{/* <Text>{tutor.name}</Text> */}
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
					{/* <Text>{tutor.password}</Text> */}
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
				</View>
			</View>
			<View style={styles.profileSection}>
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
					name='address.district'
				/>

				<Controller
					control={control}
					render={({ field: { onChange, onBlur, value } }) => {
						console.log(getValues('address.area'));
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
					name='address.area'
				/>

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
					name='education.university'
				/>

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
					name='education.department'
				/>

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
					name='education.levelOrYear'
				/>

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
					name='education.college'
				/>
			</View>
			<View style={styles.buttonContainer}>
				<Button
					title='Change Preferences'
					onPress={handlePreferenceClick}
					buttonStyle={styles.preferenceButton}
					containerStyle={{ paddingVertical: 10 }}
				></Button>
				<Button
					title='Save'
					onPress={handleSubmit(onSubmit)}
					buttonStyle={styles.saveButton}
					containerStyle={{ paddingVertical: 10 }}
				/>
			</View>
		</ScrollView>
	);
};

export default ProfileScreenTutor;

const styles = StyleSheet.create({
	container: {},
	profileHeader: {
		flex: 1,
		flexDirection: 'row',
		paddingHorizontal: 10,
		paddingVertical: 10,
	},
	formLabel: {
		fontSize: 14,
	},
	formInput: {
		borderBottomWidth: 0.5,
		paddingVertical: 10,
		paddingHorizontal: 5,
		fontSize: 14,
		backgroundColor: '#ffffff',
	},
	profileSection: {
		flex: 1,
		paddingHorizontal: 15,
		paddingVertical: 10,
	},
	formSelect: {
		paddingVertical: 5,
	},
	buttonContainer: {
		justifyContent: 'center',
		alignItems: 'center',
	},
	preferenceButton: {
		width: 300,
		borderRadius: 20,
	},
	saveButton: {
		width: 350,
		height: 40,
		backgroundColor: COLORS.chilliPaper,
		// flex: 1,
		// flexDirection: 'row'
	},
});

