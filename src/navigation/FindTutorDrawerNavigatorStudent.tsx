import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {
	createDrawerNavigator,
	useIsDrawerOpen,
} from '@react-navigation/drawer';

import BottomTabNavigatorStudent from './BottomTabNavigatorStudent';
import { AboutUsScreenNavigator } from './NavigatorStacks';
import { FindTutorDrawerParamListStudent } from '../types';
import { FindTutorScreenNavigatorStudent } from './NavigatorStacks';

import TutorFilterSidebarStudent from '../screens/student/TutorFilterSidebarStudent';

const Drawer = createDrawerNavigator<FindTutorDrawerParamListStudent>();

// type Props = {
// 	navigation: any;
// 	route: any;
// };

export default function FindTutorDrawerNavigatorStudent() {
  // const isDrawerOpen = useIsDrawerOpen();

  // const handleDrawerOpen = () => {
  //   if (isDrawerOpen) {
  //     navigation.closeDrawer();
  //   } else {
  //     navigation.openDrawer();
  //   }
  // }

  return (
		<Drawer.Navigator
			drawerPosition='right'
			drawerContent={() => <TutorFilterSidebarStudent customText='hello' />}
			initialRouteName='FindTutorScreenStudent'
		>
			<Drawer.Screen
				name='FindTutorScreenStudent'
				component={FindTutorScreenNavigatorStudent}
			/>
		</Drawer.Navigator>
	);
}

const styles = StyleSheet.create({})
