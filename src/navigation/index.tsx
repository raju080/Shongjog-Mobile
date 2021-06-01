/**
 * If you are not familiar with React Navigation, check out the "Fundamentals" guide:
 * https://reactnavigation.org/docs/getting-started
 *
 */
import {
	NavigationContainer,
	DefaultTheme,
	DarkTheme,
} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import * as React from 'react';
import { ColorSchemeName, Button } from 'react-native';

import NotFoundScreen from '../screens/NotFoundScreen';
import MainScreen from '../screens/MainScreen';
import { RootStackParamList, MainStackParamList } from '../types';
import DrawerNavigatorStudent from './DrawerNavigatorStudent';
import DrawerNavigatorTutor from './DrawerNavigatorTutor';
// import LinkingConfiguration from './LinkingConfiguration';

export default function Navigation({
	colorScheme,
}: {
	colorScheme: ColorSchemeName;
}) {
	return (
		<NavigationContainer
			// linking={LinkingConfiguration}
			theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}
		>
			<RootNavigator />
		</NavigationContainer>
	);
}

// A root stack navigator is often used for displaying modals on top of all other content
// Read more here: https://reactnavigation.org/docs/modal
const RootStack = createStackNavigator<RootStackParamList>();

function RootNavigator() {
	return (
		<RootStack.Navigator screenOptions={{ headerShown: false }}>
			<RootStack.Screen
				name='Root'
				component={MainNavigator}
			/>
			<RootStack.Screen
				name='NotFound'
				component={NotFoundScreen}
				options={{ title: 'Oops!' }}
			/>
		</RootStack.Navigator>
	);
}

const MainStack = createStackNavigator<MainStackParamList>();

function MainNavigator() {
	return (
		<MainStack.Navigator initialRouteName='Main' screenOptions={{ headerShown: false }}>
			<MainStack.Screen name='Main' component={MainScreen} />
			<MainStack.Screen name='Student' component={DrawerNavigatorStudent} />
			<MainStack.Screen name='Tutor' component={DrawerNavigatorTutor} />
		</MainStack.Navigator>
	);
}