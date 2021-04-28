/**
 * Learn more about createBottomTabNavigator:
 * https://reactnavigation.org/docs/bottom-tab-navigator
 */

import { Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';

import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';
import HomeScreen from '../screens/HomeScreen';
import FindTutorScreen from '../screens/FindTutorScreen';
import { BottomTabParamList, HomeTabParamList, FindTutorTabParamList } from '../types';

const BottomTab = createBottomTabNavigator<BottomTabParamList>();

export default function BottomTabNavigator() {
  const colorScheme = useColorScheme();

  return (
    <BottomTab.Navigator
      initialRouteName="TabOne"
      tabBarOptions={{ activeTintColor: Colors[colorScheme].tint }}>
      <BottomTab.Screen
        name="TabOne"
        component={HomeScreenNavigator}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="ios-home" color={color} />,
        }}
      />
      <BottomTab.Screen
        name="TabTwo"
        component={FindTutorScreenNavigator}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="ios-search" color={color} />,
        }}
      />
    </BottomTab.Navigator>
  );
}

// You can explore the built-in icon families and icons on the web at:
// https://icons.expo.fyi/
function TabBarIcon(props: { name: React.ComponentProps<typeof Ionicons>['name']; color: string }) {
  return <Ionicons size={30} style={{ marginBottom: -3 }} {...props} />;
}

// Each tab has its own navigation stack, you can read more about this pattern here:
// https://reactnavigation.org/docs/tab-based-navigation#a-stack-navigator-for-each-tab
const HomeStack = createStackNavigator<HomeTabParamList>();

function HomeScreenNavigator() {
  return (
		<HomeStack.Navigator>
			<HomeStack.Screen
				name='HomeScreen'
				component={HomeScreen}
				options={{ headerTitle: 'Home' }}
			/>
		</HomeStack.Navigator>
	);
}

const FindTutorStack = createStackNavigator<FindTutorTabParamList>();

function FindTutorScreenNavigator() {
  return (
		<FindTutorStack.Navigator>
			<FindTutorStack.Screen
				name='FindTutorScreen'
				component={FindTutorScreen}
				options={{ headerTitle: 'Find Tutors' }}
			/>
		</FindTutorStack.Navigator>
	);
}