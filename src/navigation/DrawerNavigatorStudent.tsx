import React from 'react';
import { StyleSheet, Text, View, StatusBar } from 'react-native';
import {
	createDrawerNavigator,
	useIsDrawerOpen,
} from '@react-navigation/drawer';

import BottomTabNavigatorStudent from './BottomTabNavigatorStudent';
import { AboutUsScreenNavigator } from './NavigatorStacks';
import { DrawerParamListStudent } from '../types';

const Drawer = createDrawerNavigator<DrawerParamListStudent>()

// type Props = {
// 	navigation: any;
// 	route: any;
// };

export default function DrawerNavigatorStudent() {

  return (
		<Drawer.Navigator initialRouteName='Home'>
			<Drawer.Screen name='Home' component={BottomTabNavigatorStudent} />
			<Drawer.Screen name='AboutUs' component={AboutUsScreenNavigator} />
		</Drawer.Navigator>
	);
}

const styles = StyleSheet.create({})
