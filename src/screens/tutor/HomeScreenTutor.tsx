import * as React from 'react';
import { StyleSheet, Button, FlatList, View, Text } from 'react-native';

import { Tab } from 'react-native-elements';

import { useAppSelector, useAppDispatch } from '../../hooks/reactReduxHooks';

import { ReactNavigationProps } from '../../types';
import { TutorTypeStudent } from '../../types_store';

import { changeSelectedTutor } from '../../store/actionCreators';

export default function HomeScreenTutor({ navigation }: ReactNavigationProps) {

	return (
		<View style={styles.container}>
			{/* <Tab>
				<Tab.Item title='tab 1'>
					<Text>Tab 1</Text>
				</Tab.Item>
				<Tab.Item title='tab 2'></Tab.Item>
			</Tab> */}
			<Text style={styles.title}>Tutor Home</Text>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
	},
	title: {
		fontSize: 20,
		fontWeight: 'bold',
	},
	separator: {
		marginVertical: 30,
		height: 1,
		width: '80%',
	},
});
