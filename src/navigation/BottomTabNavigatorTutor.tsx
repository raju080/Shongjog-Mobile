/**
 * Learn more about createBottomTabNavigator:
 * https://reactnavigation.org/docs/bottom-tab-navigator
 */

import { Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import * as React from 'react';

import {
	createDrawerNavigator,
	useIsDrawerOpen,
} from '@react-navigation/drawer';
import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';
import { BottomTabParamListTutor, ReactNavigationProps } from '../types';

import {
	HomeScreenNavigatorTutor,
} from './NavigatorStacks';

const BottomTab = createBottomTabNavigator<BottomTabParamListTutor>();

export default function BottomTabNavigatorTutor({
	navigation,
}: ReactNavigationProps) {
	const colorScheme = useColorScheme();

	const isDrawerOpen = useIsDrawerOpen();

	const handleDrawerOpen = () => {
		if (isDrawerOpen) {
			navigation.closeDrawer();
		} else {
			navigation.openDrawer();
		}
	};

	return (
		<BottomTab.Navigator
			initialRouteName='HomeTutor'
			tabBarOptions={{ activeTintColor: Colors[colorScheme].tint }}
		>
			<BottomTab.Screen
				name='HomeTutor'
				component={HomeScreenNavigatorTutor}
				options={{
					tabBarIcon: ({ color }) => (
						<TabBarIcon name='ios-home' color={color} />
					),
				}}
			/>
		</BottomTab.Navigator>
	);
}

// You can explore the built-in icon families and icons on the web at:
// https://icons.expo.fyi/
function TabBarIcon(props: {
	name: React.ComponentProps<typeof Ionicons>['name'];
	color: string;
}) {
	return <Ionicons size={30} style={{ marginBottom: -3 }} {...props} />;
}
