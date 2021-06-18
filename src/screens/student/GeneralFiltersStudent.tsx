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
import { AREAS } from '../../shared/lists';
import { ReactNavigationProps } from '../../types';
import { CustomButton } from '../../components/CustomComponents';

const GeneralFiltersStudent = ({ navigation }: ReactNavigationProps) => {
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
		.map((d, k) => ({ key:k, value: d, label: d }));

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
							// <ModalSelector
							// 	data={studentTypes}
							// 	style={styles.formModalSelect}
							// 	initValue={
							// 		sTypeSelected ? sTypeSelected.label : 'Select your version'
							// 	}
							// 	onChange={(option) => {
							// 		onChange(option);
							// 		setSTypeSelected(option);
							// 	}}
							// />
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
								// <ModalSelector
								// 	data={classes}
								// 	style={styles.formModalSelect}
								// 	initValue={
								// 		getValues('class')
								// 			? getValues('class').label
								// 			: 'Select your class'
								// 	}
								// 	onChange={(option) => {
								// 		onChange(option);
								// 	}}
								// />
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
				{errors.classes && (
					<Text style={{ color: 'red' }}>{errors.classes.message}</Text>
				)}

				{/* <Text style={styles.formLabel}>Subjects</Text> */}
				{/* <MultiselectDropdown
				label='Multi select with avatar chip outlined'
				data={data}
				enableSearch
				enableAvatar
				chipType='outlined'
				value={valueMS}
				onChange={onChangeMS}
			/> */}
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
						name='subjects'
						defaultValue=''
					/>
				</View>

				{/* District */}
				{/* <Text style={styles.formLabel}>District</Text> */}
				<View style={styles.formModalSelect}>
					<Controller
						control={control}
						render={({ field: { onChange, onBlur, value } }) => (
							// <ModalSelector
							// 	data={districts}
							// 	style={styles.formModalSelect}
							// 	initValue={dist ? dist.label : 'Select your district'}
							// 	onChange={(option) => {
							// 		onChange(option);
							// 		setDist(option);
							// 	}}
							// />
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
						name='district'
					/>
				</View>

				{/* Area */}
				{/* <Text style={styles.formLabel}>Area</Text> */}
				<View style={styles.formModalSelect}>
					<Controller
						control={control}
						render={({ field: { onChange, onBlur, value } }) => {
							let areas = AREAS[dist]
								?.sort()
								.map((d: string, k: string) => ({ key: k, value: d, label: d }));
							return (
								// <ModalSelector
								// 	data={areas}
								// 	style={styles.formModalSelect}
								// 	initValue={
								// 		getValues('area')
								// 			? getValues('area').label
								// 			: 'Select your area'
								// 	}
								// 	onChange={(option) => {
								// 		onChange(option);
								// 	}}
								// />
								<Dropdown
									label='Select Your Area'
									data={areas}
									value={value}
									onChange={onChange}
								/>
							);
						}}
						name='area'
					/>
				</View>
			</ScrollView>
			<Button
				onPress={handleSubmit(onSubmit)}
				title='Find Tutors'
				containerStyle={styles.submitButton}
			/>
			{/* <CustomButton text='Find Tutors' onPress={handleSubmit(onSubmit)} /> */}
		</View>
	);
};

export default GeneralFiltersStudent;

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
		width: 200,
		marginBottom: 50,
	},
});
