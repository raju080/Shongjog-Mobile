import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {
	createDrawerNavigator,
	useIsDrawerOpen,
} from '@react-navigation/drawer';

import BottomTabNavigator from './BottomTabNavigator';
import { AboutUsScreenNavigator } from './NavigatorStacks';
import { DrawerParamList } from '../types';

const Drawer = createDrawerNavigator<DrawerParamList>()

// type Props = {
// 	navigation: any;
// 	route: any;
// };

export default function DrawerNavigator() {
  // const isDrawerOpen = useIsDrawerOpen();

  // const handleDrawerOpen = () => {
  //   if (isDrawerOpen) {
  //     navigation.closeDrawer();
  //   } else {
  //     navigation.openDrawer();
  //   }
  // }

  return (
		<Drawer.Navigator initialRouteName='Home'>
			<Drawer.Screen name='Home' component={BottomTabNavigator} />
			<Drawer.Screen name='AboutUs' component={AboutUsScreenNavigator} />
		</Drawer.Navigator>
	);
}

const styles = StyleSheet.create({})
