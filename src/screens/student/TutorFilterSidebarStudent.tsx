import React, { useState } from 'react';
import { StyleSheet, Text, View, SafeAreaView, Platform, StatusBar, TextInput } from 'react-native';

import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';
import { ListItem, Button, CheckBox } from 'react-native-elements';

import { useForm, Controller } from 'react-hook-form';

import { COLORS } from '../../constants/Colors';
import { STUDENT_TYPES, STUDENT_CLASSES, SUBJECTS } from '../../shared/filters';
import { ScrollView } from 'react-native-gesture-handler';
import { useAppDispatch } from '../../hooks/reactReduxHooks';
import { toggleFilterDrawerOpen } from '../../store/actionCreators';
import { Dropdown } from 'sharingan-rn-modal-dropdown';
import { UNIVERSITIES } from '../../shared/lists';

type PropsType = {
	toggleSidebar: any;
};

const TutorFilterSidebarStudent = ({ toggleSidebar }: PropsType) => {
	const dispatch = useAppDispatch();
	// filter view manipulation
	const [studentTypeFiltersOpen, setStudentTypeFiltersOpen] =
		useState<boolean>(true);
	const [studentClassFiltersOpen, setStudentClassFiltersOpen] =
		useState<boolean>(false);
	const [subjectFiltersOpen, setSubjectFiltersOpen] = useState<boolean>(false);
	const [genderFilterOpen, setGenderFilterOpen] = useState<boolean>(false);
	const [salaryFilterOpen, setSalaryFilterOpen] = useState<boolean>(false);
	const [universityFilterOpen, setUniversityFilterOpen] = useState<boolean>(false);

	// form values
	const [studentType, setStudentType] = useState<string>('');
	const [studentClass, setStudentClass] = useState<string>('');
	const [subjects, setSubjects] = useState<string[]>([]);
	const [gender, setGender] = useState<string>('');

	const universities = Object.keys(UNIVERSITIES)
		.sort()
		.map((d, k) => ({ key: k, label: d, value: d }));

	// form control
	const {
		control,
		handleSubmit,
		getValues,
		watch,
		formState: { errors },
	} = useForm();

	const addSubjectToFilter = (sub: string) => {
		if (subjects.indexOf(sub) === -1) {
			setSubjects(subjects.concat(sub));
		}
	};

	const onSubmit = (data: any) => {
		data.gender = gender;
		console.log(data);
		// console.log('gender: ' + gender);
		dispatch(toggleFilterDrawerOpen());
	};


	const handleFilterReset = () => {
		// setStudentType('');
		// setStudentClass('');
		// setSubjects([]);
		// setGender('');
	}

	return (
		<SafeAreaView style={styles.container}>
			<View style={styles.header}>
				<Text style={styles.headerText}>Filters</Text>
			</View>
			<ScrollView style={styles.filterSection}>
				{/* <ListItem.Accordion
					bottomDivider
					isExpanded={studentTypeFiltersOpen}
					onPress={() => {
						setStudentTypeFiltersOpen(!studentTypeFiltersOpen);
					}}
					content={
						<ListItem>
							<Text>Student Type</Text>
						</ListItem>
					}
				>
					{STUDENT_TYPES.map((sType, i) => (
						<CheckBox
							center
							key={i}
							title={sType}
							checkedColor='green'
							checked={studentType === sType}
							onPress={() => { setStudentType(sType); setSubjects([]);}}
						/>
					))}
				</ListItem.Accordion>
				<ListItem.Accordion
					bottomDivider
					isExpanded={studentClassFiltersOpen}
					onPress={() => {
						setStudentClassFiltersOpen(!studentClassFiltersOpen);
					}}
					content={
						<ListItem>
							<Text>Student Class</Text>
						</ListItem>
					}
				>
					{STUDENT_CLASSES[studentType]?.map((sClass: string, i: number) => (
						<CheckBox
							center
							key={i}
							title={sClass}
							checkedColor='green'
							checked={studentClass === sClass}
							onPress={() => setStudentClass(sClass)}
						/>
					))}
				</ListItem.Accordion>
				<ListItem.Accordion
					bottomDivider
					isExpanded={subjectFiltersOpen}
					onPress={() => {
						setSubjectFiltersOpen(!subjectFiltersOpen);
					}}
					content={
						<ListItem>
							<Text>Subjects</Text>
						</ListItem>
					}
				>
					{SUBJECTS[studentClass]?.map((subject: string, i: number) => (
						<CheckBox
							center
							key={i}
							title={subject}
							checkedColor='green'
							checked={subjects.indexOf(subject) !== -1}
							onPress={() => addSubjectToFilter(subject)}
						/>
					))}
				</ListItem.Accordion> */}
				<ListItem.Accordion
					bottomDivider
					isExpanded={genderFilterOpen}
					onPress={() => {
						setGenderFilterOpen(!genderFilterOpen);
					}}
					content={
						<ListItem>
							<Text>Gender ({gender})</Text>
						</ListItem>
					}
				>
					{['male', 'female'].map((gn, i) => (
						<Controller
							control={control}
							key={i}
							render={({ field: { onChange, onBlur, value } }) => (
								<CheckBox
									center
									title={gn}
									checkedColor='green'
									checked={gender === gn}
									onPress={() => {
										if (gender === gn) {
											onChange('');
											setGender('');
										} else {
											onChange(gn);
											setGender(gn);
										}
									}}
								/>
							)}
							name='gender'
							defaultValue=''
						/>
					))}
				</ListItem.Accordion>
				<ListItem.Accordion
					bottomDivider
					isExpanded={salaryFilterOpen}
					onPress={() => {
						setSalaryFilterOpen(!salaryFilterOpen);
					}}
					content={
						<ListItem>
							<Text>Salary</Text>
						</ListItem>
					}
				>
					<Controller
						control={control}
						render={({ field: { onChange, onBlur, value } }) => (
							<TextInput
								style={styles.formInput}
								placeholder='min salary'
								onBlur={onBlur}
								onChangeText={(value) => onChange(value)}
								value={value}
							/>
						)}
						name='minSalary'
						defaultValue=''
					/>
					<Controller
						control={control}
						render={({ field: { onChange, onBlur, value } }) => (
							<TextInput
								style={styles.formInput}
								placeholder='max salary'
								onBlur={onBlur}
								onChangeText={(value) => onChange(value)}
								value={value}
							/>
						)}
						name='maxSalary'
						defaultValue=''
					/>
				</ListItem.Accordion>

				<ListItem.Accordion
					bottomDivider
					isExpanded={universityFilterOpen}
					onPress={() => {
						setUniversityFilterOpen(!universityFilterOpen);
					}}
					content={
						<ListItem>
							<Text>University ({getValues('university')})</Text>
						</ListItem>
					}
				>
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
								label='Select tutor university'
								data={universities}
								value={value}
								onChange={(option) => {
									onChange(option);
								}}
							/>
						)}
						name='university'
						defaultValue=''
					/>
				</ListItem.Accordion>

				<View>
					{/* <ListItem.Accordion
						isExpanded={subjectFiltersOpen}
						onPress={() => {
							setSubjectFiltersOpen(!subjectFiltersOpen);
						}}
						content={
							<ListItem>
								<Text>Subjects</Text>
							</ListItem>
						}
					>
						<ListItem topDivider bottomDivider>
							<Text>Hello</Text>
						</ListItem>
						<ListItem bottomDivider>
							<Text>Hello</Text>
						</ListItem>
						<ListItem bottomDivider>
							<Text>Hello</Text>
						</ListItem>
					</ListItem.Accordion> */}
				</View>
			</ScrollView>
			<View style={styles.bottomSection}>
				<Button
					title='Reset'
					onPress={handleFilterReset}
					buttonStyle={styles.resetButton}
				></Button>
				<Button
					title='Apply'
					onPress={handleSubmit(onSubmit)}
					buttonStyle={styles.filterButton}
				></Button>
			</View>
		</SafeAreaView>
	);
};

export default TutorFilterSidebarStudent;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		height: '100%',
		backgroundColor: '#009B77',
		marginTop: StatusBar.currentHeight && Platform.OS === 'android' ? StatusBar.currentHeight : 0,
	},
	header: {
		height: 56,
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: '#009B77',
	},
	headerText: {
		fontSize: 20,
		fontWeight: 'bold',
		color: 'white',
	},
	filterSection: {
		flex: 1,
		backgroundColor: 'white',
	},
	locationFilter: {
		backgroundColor: COLORS.aquaSky,
	},
	studentTypeFilter: {},
	subjectFilter: {},
	salaryFilter: {},

	formInput: {
		backgroundColor: 'aliceblue',
		marginHorizontal: 10,
		marginVertical: 5,
		paddingHorizontal: 10,
		fontSize: 12,
		height: 40,
		borderColor: 'lightgray',
		borderWidth: 1,
		borderRadius: 3,
	},

	bottomSection: {
		flexDirection: 'row',
	},
	resetButton: {
		backgroundColor: COLORS.red,
		height: 50,
		width: 140,
		borderRadius: 0,
	},
	filterButton: {
		backgroundColor: COLORS.blueIzis,
		height: 50,
		width: 150,
		borderRadius: 0,
	},
});
