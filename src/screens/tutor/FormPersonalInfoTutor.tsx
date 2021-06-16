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
import {
	Divider,
	ListItem,
	Tab,
	Button,
	Overlay,
	Card,
} from 'react-native-elements';
import { Picker } from '@react-native-picker/picker';
import DropDownPicker from 'react-native-dropdown-picker';

const FormPersonalInfoTutor = () => {
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

	const [gender, setGender] = useState('male');

	const genders = [
		{ label: 'Male', value: 'male' },
		{ label: 'Female', value: 'female' },
	];

	return (
		<View>
			{/* Personal Info */}
			<View>
				{/* District */}
				<Text style={styles.formLabel}>District</Text>
				<Controller
					control={control}
					render={({ field: { onChange, onBlur, value } }) => (
						// <DropDownPicker
						// 	open={districtDOpen}
						// 	value={value}
						// 	items={genders}
						// 	setValue={(val) => onChange(val)}
						// 	setOpen={() => setDistrictDOpen(!districtDOpen)}
						// 	containerStyle={{
						// 		width: 300,
						// 		backgroundColor: 'lightblue',
						// 	}}

						// 	style={{ backgroundColor: 'lightblue' }}
						// />
						<Picker
							selectedValue={getValues('district')}
							onValueChange={(itemValue, itemIndex) => onChange(itemValue)}
							style={{ backgroundColor: 'white', width: 300 }}
							mode='dropdown'
						>
							{genders.map((item, key) => (
								<Picker.Item label={item.label} value={item.value} key={key} />
							))}
						</Picker>
					)}
					name='district'
					defaultValue=''
				/>

				{/* Area */}
				<Text style={styles.formLabel}>Area</Text>
				<Controller
					control={control}
					render={({ field: { onChange, onBlur, value } }) => (
						// <DropDownPicker
						// 	open={areaDOpen}
						// 	value={value}
						// 	items={genders}
						// 	setValue={(val) => onChange(val)}
						// 	setOpen={() => setAreaDOpen(!areaDOpen)}
						// 	containerStyle={{ width: 300 }}
						// />
						<Picker
							selectedValue={getValues('area')}
							onValueChange={(itemValue, itemIndex) => onChange(itemValue)}
							style={{ backgroundColor: 'white', width: 300 }}
							mode='dropdown'
						>
							{genders.map((item, key) => (
								<Picker.Item label={item.label} value={item.value} key={key} />
							))}
						</Picker>
					)}
					name='area'
					defaultValue=''
				/>

				<Text style={styles.formLabel}>Gender</Text>
				<Controller
					control={control}
					render={({ field: { onChange, onBlur, value } }) => (
						<Picker
							selectedValue={getValues('gender')}
							onValueChange={(itemValue, itemIndex) => onChange(itemValue)}
							style={{ backgroundColor: 'white', width: 300 }}
							mode='dropdown'
						>
							{genders.map((item, key) => (
								<Picker.Item label={item.label} value={item.value} key={key} />
							))}
						</Picker>
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
		</View>
	);
};

export default FormPersonalInfoTutor;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		backgroundColor: '#fff',
    paddingTop: 10
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
