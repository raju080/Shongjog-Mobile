import React, { useState } from 'react';
import { StyleSheet, Text, View, SafeAreaView, Platform, StatusBar } from 'react-native';

import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';
import { ListItem, Button, CheckBox } from 'react-native-elements';

import { useForm, Controller } from 'react-hook-form';

import { COLORS } from '../../constants/Colors';
import { STUDENT_TYPES, STUDENT_CLASSES, SUBJECTS } from '../../shared/filters';
import { ScrollView } from 'react-native-gesture-handler';
import { useAppDispatch } from '../../hooks/reactReduxHooks';
import { toggleFilterDrawerOpen } from '../../store/actionCreators';

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

	// form values
	const [studentType, setStudentType] = useState<string>('');
	const [studentClass, setStudentClass] = useState<string>('');
	const [subjects, setSubjects] = useState<string[]>([]);
	const [gender, setGender] = useState<string>('');

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

	const handleFilterSubmit = () => {
		dispatch(toggleFilterDrawerOpen());
	};

	const handleFilterReset = () => {
		setStudentType('');
		setStudentClass('');
		setSubjects([]);
		setGender('');
	}

	return (
		<SafeAreaView style={styles.container}>
			<View style={styles.header}>
				<Text style={styles.headerText}>Filters</Text>
			</View>
			<ScrollView style={styles.filterSection}>
				<ListItem.Accordion
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

				{/* <ListItem.Accordion
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
					{STUDENT_CLASSES[studentType]?.map((sClass, i) => (
						<CheckBox
							center
							key={i}
							title={sClass}
							checkedColor='green'
							checked={studentClass === sClass}
							onPress={() => setStudentClass(sClass)}
						/>
					))}
				</ListItem.Accordion> */}
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
					{SUBJECTS.map((subject, i) => (
						<CheckBox
							center
							key={i}
							title={subject}
							checkedColor='green'
							checked={subjects.indexOf(subject) !== -1}
							onPress={() => addSubjectToFilter(subject)}
						/>
					))}
				</ListItem.Accordion>
				<ListItem.Accordion
					bottomDivider
					isExpanded={genderFilterOpen}
					onPress={() => {
						setGenderFilterOpen(!genderFilterOpen);
					}}
					content={
						<ListItem>
							<Text>Gender</Text>
						</ListItem>
					}
				>
					{['male', 'female'].map((gn, i) => (
						<CheckBox
							center
							key={i}
							title={gn}
							checkedColor='green'
							checked={gender === gn}
							onPress={() => setGender(gn)}
						/>
					))}
				</ListItem.Accordion>
				<View style={styles.studentTypeFilter}></View>
				<View style={styles.subjectFilter}></View>
				<View style={styles.salaryFilter}></View>

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
					onPress={handleFilterSubmit}
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
		marginTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
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
