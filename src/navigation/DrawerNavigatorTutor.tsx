import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {
	createDrawerNavigator,
	useIsDrawerOpen,
} from '@react-navigation/drawer';

import LoginScreenTutor from '../screens/tutor/LoginScreenTutor';

import BottomTabNavigatorStudent from './BottomTabNavigatorStudent';
import { AboutUsScreenNavigator, RegistrationNavigatorTutor } from './NavigatorStacks';
import { DrawerParamListTutor } from '../types';
import BottomTabNavigatorTutor from './BottomTabNavigatorTutor';
import RegisterScreenTutor from '../screens/tutor/RegisterScreenTutor';

const Drawer = createDrawerNavigator<DrawerParamListTutor>();

// type Props = {
// 	navigation: any;
// 	route: any;
// };

export default function DrawerNavigatorTutor() {
	// const isDrawerOpen = useIsDrawerOpen();

	// const handleDrawerOpen = () => {
	//   if (isDrawerOpen) {
	//     navigation.closeDrawer();
	//   } else {
	//     navigation.openDrawer();
	//   }
	// }

	return (
		<Drawer.Navigator initialRouteName='Login'>
			<Drawer.Screen name='Login' component={LoginScreenTutor} />
			<Drawer.Screen name='Register' component={RegisterScreenTutor} />
			<Drawer.Screen name='Home' component={BottomTabNavigatorTutor} />
			<Drawer.Screen name='AboutUs' component={AboutUsScreenNavigator} />
		</Drawer.Navigator>
	);
}

const styles = StyleSheet.create({});
