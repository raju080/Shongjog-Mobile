import * as React from 'react';
import { createStackNavigator, StackNavigationProp } from '@react-navigation/stack';

import { Button } from 'react-native';

import Header from '../components/Header';
import HomeScreen from '../screens/HomeScreen';
import FindTutorScreen from '../screens/FindTutorScreen';
import AboutUsScreen from '../screens/AboutUsScreen';

import {
	HomeTabParamList,
	FindTutorTabParamList,
  AboutUsParamList,
	ReactNavigationProps
} from '../types';


// Each tab has its own navigation stack, you can read more about this pattern here:
// https://reactnavigation.org/docs/tab-based-navigation#a-stack-navigator-for-each-tab

// type HomeScreenNavigationProp = StackNavigationProp<HomeTabParamList, 'HomeScreen'>;


const HomeStack = createStackNavigator<HomeTabParamList>();

export function HomeScreenNavigator({ navigation }: ReactNavigationProps) {
	return (
		<HomeStack.Navigator>
			<HomeStack.Screen
				name='HomeScreen'
				component={HomeScreen}
				options={{
					headerTitle: () => <Header title='Home' navigation={navigation} />,
				}}
			/>
		</HomeStack.Navigator>
	);
}

const FindTutorStack = createStackNavigator<FindTutorTabParamList>();

export function FindTutorScreenNavigator({ navigation }: ReactNavigationProps) {
	return (
		<FindTutorStack.Navigator>
			<FindTutorStack.Screen
				name='FindTutorScreen'
				component={FindTutorScreen}
				options={{
					headerTitle: () => (
						<Header title='Find Tutors' navigation={navigation} />
					),
				}}
			/>
		</FindTutorStack.Navigator>
	);
}

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

