import * as React from 'react';
import { createStackNavigator, StackNavigationProp } from '@react-navigation/stack';

import { Button } from 'react-native';

import Header from '../components/Header';
import HomeScreenStudent from '../screens/student/HomeScreenStudent';
import FindTutorScreenStudent from '../screens/student/FindTutorScreenStudent';
import TutorDetailsScreenStudent from '../screens/student/TutorDetailsScreenStudent';
import ProfileScreenStudent from '../screens/student/ProfileScreenStudent';
import AboutUsScreen from '../screens/AboutUsScreen';
import MainScreen from '../screens/MainScreen';

import {
	MainStackParamList,
	HomeTabParamListStudent,
	FindTutorTabParamListStudent,
	ProfileTabParamListStudent,
  AboutUsParamList,
	ReactNavigationProps
} from '../types';


// Each tab has its own navigation stack, you can read more about this pattern here:
// https://reactnavigation.org/docs/tab-based-navigation#a-stack-navigator-for-each-tab

// type HomeScreenNavigationProp = StackNavigationProp<HomeTabParamList, 'HomeScreen'>;

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
					headerTitle: () => <Header title='Home' navigation={navigation} />,
					headerLeft: () => null,
				}}
			/>
		</HomeStackStudent.Navigator>
	);
}

const FindTutorStackStudent = createStackNavigator<FindTutorTabParamListStudent>();

export function FindTutorScreenNavigatorStudent({ navigation }: ReactNavigationProps) {
	return (
		<FindTutorStackStudent.Navigator>
			<FindTutorStackStudent.Screen
				name='FindTutorScreenStudent'
				component={FindTutorScreenStudent}
				options={{
					headerTitle: () => (
						<Header title='Find Tutors' navigation={navigation} />
					),
					headerLeft: () => null,
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