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
import {
	Dropdown,
	GroupDropdown,
	MultiselectDropdown,
} from 'sharingan-rn-modal-dropdown';
import ModalSelector from 'react-native-modal-selector';
import { COLORS } from '../../constants/Colors';
import { STUDENT_TYPES, STUDENT_CLASSES, SUBJECTS } from '../../shared/filters';
import { AREAS, genders } from '../../shared/lists';
import { ReactNavigationProps } from '../../types';
import { CustomButton } from '../../components/CustomComponents';
import { formStyles } from '../../assets/styles/formStyles';

const TuitionRequestScreenStudent = ({ navigation }: ReactNavigationProps) => {
	const studentTypes = STUDENT_TYPES.map((d, k) => ({ value: d, label: d }));

	const [sTypeSelected, setSTypeSelected] = useState<string>('');
	const [classSelected, setClassSelected] = useState('');

	const {
		control,
		handleSubmit,
		getValues,
		watch,
		formState: { errors },
	} = useForm();

	const [dist, setDist] = useState<{ key: string; label: string } | any>({});
	const districts = Object.keys(AREAS)
		.sort()
		.map((d, k) => ({ key: k, value: d, label: d }));

	const onSubmit = (data: any) => {
		console.log(data);
		navigation.navigate('FindTutorScreenStudent');
	};

	return (
		<View style={styles.container}>
			<ListItem>
				<Text style={styles.header}>Student Information</Text>
			</ListItem>
			<ScrollView style={styles.formView}>
				{/* <Text style={styles.formLabel}>Student Category</Text> */}
				<View style={styles.formModalSelect}>
					<Controller
						control={control}
						render={({ field: { onChange, onBlur, value } }) => (
							<Dropdown
								label='Select your version'
								data={studentTypes}
								value={value}
								onChange={(option) => {
									onChange(option);
									setSTypeSelected(option);
								}}
							/>
						)}
						rules={{
							required: {
								value: true,
								message: 'This field is required',
							},
						}}
						name='studentType'
						defaultValue=''
					/>
				</View>
				{errors.studentType && (
					<Text style={{ color: 'red' }}>{errors.studentType.message}</Text>
				)}

				{/* Class */}
				{/* <Text style={styles.formLabel}>Student Class</Text> */}
				<View style={styles.formModalSelect}>
					<Controller
						control={control}
						render={({ field: { onChange, onBlur, value } }) => {
							let classes = STUDENT_CLASSES[sTypeSelected]?.map(
								(d: string, k: string) => ({ key: k, value: d, label: d })
							);
							return (
								<Dropdown
									label='Select your class'
									data={classes}
									value={value}
									onChange={(option) => {
										onChange(option);
										setClassSelected(option);
									}}
								/>
							);
						}}
						rules={{
							required: {
								value: true,
								message: 'This field is required',
							},
						}}
						name='class'
						defaultValue=''
					/>
				</View>
				{errors.class && (
					<Text style={{ color: 'red' }}>{errors.class.message}</Text>
				)}

				<View style={styles.multiSelect}>
					<Controller
						control={control}
						render={({ field: { onChange, onBlur, value } }) => {
							let subjects = SUBJECTS[classSelected]?.map(
								(d: string, k: string) => ({ key: k, value: d, label: d })
							);
							return (
								<MultiselectDropdown
									label='Select Subjects for tuition'
									data={subjects}
									chipType='outlined'
									value={value}
									onChange={(val) => onChange(val)}
								/>
							);
						}}
						rules={{
							required: {
								value: true,
								message: 'This field is required',
							},
						}}
						name='subjects'
						defaultValue=''
					/>
				</View>
				{errors.subjects && (
					<Text style={{ color: 'red' }}>{errors.subjects.message}</Text>
				)}

				{/* District */}
				{/* <Text style={styles.formLabel}>District</Text> */}
				<View style={styles.formModalSelect}>
					<Controller
						control={control}
						render={({ field: { onChange, onBlur, value } }) => (
							<Dropdown
								label='Select Your District'
								data={districts}
								enableSearch
								value={value}
								onChange={(option) => {
									onChange(option);
									setDist(option);
									console.log(option);
								}}
							/>
						)}
						rules={{
							required: {
								value: true,
								message: 'This field is required',
							},
						}}
						name='district'
					/>
				</View>
				{errors.district && (
					<Text style={{ color: 'red' }}>{errors.district.message}</Text>
				)}

				{/* Area */}
				{/* <Text style={styles.formLabel}>Area</Text> */}
				<View style={styles.formModalSelect}>
					<Controller
						control={control}
						render={({ field: { onChange, onBlur, value } }) => {
							let areas = AREAS[dist]?.sort().map((d: string, k: string) => ({
								key: k,
								value: d,
								label: d,
							}));
							return (
								<Dropdown
									label='Select Your Area'
									data={areas}
									value={value}
									onChange={onChange}
								/>
							);
						}}
						rules={{
							required: {
								value: true,
								message: 'This field is required',
							},
						}}
						name='area'
					/>
					{errors.area && (
						<Text style={{ color: 'red' }}>{errors.area.message}</Text>
					)}
				</View>

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
							// mainContainerStyle={formStyles.formSelect}
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
				
			</ScrollView>
			<Button
				onPress={handleSubmit(onSubmit)}
				title='Request Tuition'
				buttonStyle={styles.submitButton}
			/>
			{/* <CustomButton text='Find Tutors' onPress={handleSubmit(onSubmit)} /> */}
		</View>
	);
};


const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		backgroundColor: '#fff',
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
	multiSelect: {
		marginVertical: 10,
		minWidth: 300,
	},
	formModalSelect: {
		minWidth: 300,
		marginVertical: 10,
	},
	submitButton: {
		width: 300,
		height: 50,
		borderRadius: 25,
		marginVertical: 20,
		backgroundColor: '#871c4a',
	},
});


export default TuitionRequestScreenStudent;

