import * as React from 'react';
import { createStackNavigator, StackNavigationProp } from '@react-navigation/stack';

import { Button } from 'react-native';

import Header from '../components/Header';

import HomeScreenStudent from '../screens/student/HomeScreenStudent';
import FindTutorScreenStudent from '../screens/student/FindTutorScreenStudent';
import TutorDetailsScreenStudent from '../screens/student/TutorDetailsScreenStudent';
import ProfileScreenStudent from '../screens/student/ProfileScreenStudent';

import HomeScreenTutor from '../screens/tutor/HomeScreenTutor';
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
	ReactNavigationProps
} from '../types';
import { useIsDrawerOpen } from '@react-navigation/drawer';


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

const FindTutorStackStudent = createStackNavigator<FindTutorScreenParamListStudent>();

export function FindTutorScreenNavigatorStudent({ navigation }: ReactNavigationProps) {

	const isDrawerOpen = useIsDrawerOpen();

	const handleFilterDrawerOpen = () => {
		console.log('Filter drawer opening')
		if (isDrawerOpen) {
			navigation.closeDrawer();
		} else {
			navigation.openDrawer();
		}
	};

	return (
		<FilterContext.Provider
			value={{ handleDrawerOpen: handleFilterDrawerOpen }}
		>
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
		</FilterContext.Provider>
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