import React, { useState } from 'react';
import { StyleSheet, Text, View, SafeAreaView, Platform, StatusBar } from 'react-native';

import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';
import { ListItem, Button, CheckBox } from 'react-native-elements';

import { useForm, Controller } from 'react-hook-form';

import { COLORS } from '../../constants/Colors';
import { STUDENT_TYPES, SUBJECTS } from '../../shared/filters';
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
		useState<boolean>(false);
	const [subjectFiltersOpen, setSubjectFiltersOpen] = useState<boolean>(false);

	// form values
	const [studentType, setStudentType] = useState<string>('');
	const [subjects, setSubjects] = useState<string[]>([]);

	const addSubjectToFilter = (sub: string) => {
		if (subjects.indexOf(sub) === -1) {
			console.log('hello');
			setSubjects(subjects.concat(sub));
			console.log(subjects);
		}
	};

	const handleFilterSubmit = () => {
		console.log(studentType);
		console.log(subjects);
		dispatch(toggleFilterDrawerOpen());
	};

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
							onPress={() => setStudentType(sType)}
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
	studentTypeFilter: {

	},
	subjectFilter: {

	},
	salaryFilter: {

	},

	bottomSection: {},
	filterButton: {
		backgroundColor: '#955251',
		height: 50,
		borderRadius: 0,
	},
});
