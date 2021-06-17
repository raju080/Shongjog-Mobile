import React, {useEffect} from 'react';
import { createStackNavigator, StackNavigationProp } from '@react-navigation/stack';

import { Button } from 'react-native';

import { useAppSelector, useAppDispatch } from '../hooks/reactReduxHooks';

import Header from '../components/Header';

import HomeScreenStudent from '../screens/student/HomeScreenStudent';
import FindTutorScreenStudent from '../screens/student/FindTutorScreenStudent';
import TutorDetailsScreenStudent from '../screens/student/TutorDetailsScreenStudent';
import ProfileScreenStudent from '../screens/student/ProfileScreenStudent';

import HomeScreenTutor from '../screens/tutor/HomeScreenTutor';
import FormAccountInfoTutor from '../screens/tutor/FormAccountInfoTutor';
import FormPersonalInfoTutor from '../screens/tutor/FormPersonalInfoTutor';
import FormPreferenceInfoTutor from '../screens/tutor/FormPreferenceInfoTutor';
import AboutUsScreen from '../screens/AboutUsScreen';
import MainScreen from '../screens/MainScreen';

import FindTutorDrawerNavigatorStudent from './FindTutorDrawerNavigatorStudent';

import { FilterContext } from '../store/contexts';

import {
	MainStackParamList,
	HomeTabParamListStudent,
	FindTutorScreenParamListStudent,
	ProfileTabParamListStudent,
	HomeTabParamListTutor,
	ProfileTabParamListTutor,
	LeaderBoardTabParamListTutor,
  AboutUsParamList,
	ReactNavigationProps,
	RegisterParamListTutor
} from '../types';
import { useIsDrawerOpen } from '@react-navigation/drawer';
import { toggleFilterDrawerOpen } from '../store/actionCreators';
import GeneralFiltersStudent from '../screens/student/GeneralFiltersStudent';


// Each tab has its own navigation stack, you can read more about this pattern here:
// https://reactnavigation.org/docs/tab-based-navigation#a-stack-navigator-for-each-tab

// type HomeScreenNavigationProp = StackNavigationProp<HomeTabParamList, 'HomeScreen'>;

const HEADER_COLOR = '#34568b';


/*  
** Navigation stacks for student part
*/ 

const HomeStackStudent = createStackNavigator<HomeTabParamListStudent>();

export function HomeScreenNavigatorStudent({ navigation }: ReactNavigationProps) {
	return (
		<HomeStackStudent.Navigator>
			<HomeStackStudent.Screen
				name='HomeScreenStudent'
				component={HomeScreenStudent}
				options={{
					headerLeft: () => null,
					headerTitle: () => <Header title='Home' navigation={navigation} />,
					headerRight: () => null,
					headerStyle: {backgroundColor: HEADER_COLOR}
				}}
			/>
		</HomeStackStudent.Navigator>
	);
}

const FindTutorStackStudent = createStackNavigator<FindTutorScreenParamListStudent>();

export function FindTutorScreenNavigatorStudent({ navigation }: ReactNavigationProps) {
	const dispatch = useAppDispatch();
	const isFilterDrawerOpen = useAppSelector(
		(state) => state.uiStudent.isFilterDrawerOpen
	);
	const isDrawerOpen = useIsDrawerOpen();
	const handleFilterDrawerOpen = (isFilterDrawerOpen: boolean) => {
		if (isFilterDrawerOpen != isDrawerOpen) {
			navigation.toggleDrawer();
		} 
	};

	useEffect(() => {
		handleFilterDrawerOpen(isFilterDrawerOpen);
	}, [isFilterDrawerOpen]);

	useEffect(() => {
		if (isFilterDrawerOpen != isDrawerOpen) {
			dispatch(toggleFilterDrawerOpen());
		}
	}, [isDrawerOpen]);

	return (
		<FindTutorStackStudent.Navigator>
			<FindTutorStackStudent.Screen
				name='FindTutorBasicScreenStudent'
				component={GeneralFiltersStudent}
				options={{
					headerTitle: () => (
						<Header title='Find Tutors' navigation={navigation} />
					),
					headerLeft: () => null,
					headerRight: () => null,
					headerStyle: { backgroundColor: HEADER_COLOR },
				}}
			/>
			<FindTutorStackStudent.Screen
				name='FindTutorScreenStudent'
				component={FindTutorScreenStudent}
				options={{
					headerTitle: () => (
						<Header title='Find Tutors' navigation={navigation} />
					),
					headerLeft: () => null,
					headerRight: () => null,
					headerStyle: { backgroundColor: HEADER_COLOR },
				}}
			/>

			<FindTutorStackStudent.Screen
				name='TutorDetailsScreenStudent'
				component={TutorDetailsScreenStudent}
				// options={{
				// 	headerTitle: () => (
				// 		<Header title='Find Tutors' navigation={navigation} />
				// 	),
				// }}
			/>
		</FindTutorStackStudent.Navigator>
	);
}



const ProfileStackStudent = createStackNavigator<ProfileTabParamListStudent>();

export function ProfileScreenNavigatorStudent({ navigation }: ReactNavigationProps) {
	return (
		<ProfileStackStudent.Navigator>
			<ProfileStackStudent.Screen
				name='ProfileScreenStudent'
				component={ProfileScreenStudent}
				options={{
					headerTitle: () => (
						<Header title='Find Tutors' navigation={navigation} />
					),
				}}
			/>
		</ProfileStackStudent.Navigator>
	);
}



/*  
** Navigation stacks for tutor part
*/ 


const HomeStackTutor = createStackNavigator<HomeTabParamListTutor>();

export function HomeScreenNavigatorTutor({
	navigation,
}: ReactNavigationProps) {
	return (
		<HomeStackTutor.Navigator>
			<HomeStackTutor.Screen
				name='HomeScreenTutor'
				component={HomeScreenTutor}
				options={{
					headerTitle: () => <Header title='Home' navigation={navigation} />,
					headerLeft: () => null,
				}}
			/>
		</HomeStackTutor.Navigator>
	);
}


const RegisterStackTutor = createStackNavigator<RegisterParamListTutor>();

export function RegistrationNavigatorTutor({ navigation }: ReactNavigationProps) {
	return (
		<RegisterStackTutor.Navigator initialRouteName='FormPersonalInfo'>
			<RegisterStackTutor.Screen
				name='FormAccountInfo'
				component={FormAccountInfoTutor}
				options={{
					headerTitle: 'Account Information',
					headerLeft: () => null,
				}}
			/>
			<RegisterStackTutor.Screen
				name='FormPersonalInfo'
				component={FormPersonalInfoTutor}
				options={{
					headerTitle: 'Personal Information',
					headerLeft: () => null,
				}}
			/>
			<RegisterStackTutor.Screen
				name='FormPreferenceInfo'
				component={FormPreferenceInfoTutor}
				options={{
					headerTitle: 'Preference Information',
					headerLeft: () => null,
				}}
			/>
		</RegisterStackTutor.Navigator>
	);
}


/*  
** Navigation stacks for common staff
*/ 




const AboutUsStack = createStackNavigator<AboutUsParamList>();

export function AboutUsScreenNavigator({ navigation }: ReactNavigationProps) {
	return (
		<AboutUsStack.Navigator>
			<AboutUsStack.Screen
				name='AboutUsScreen'
				component={AboutUsScreen}
				options={{ headerTitle: 'About Us' }}
			/>
		</AboutUsStack.Navigator>
	);
}