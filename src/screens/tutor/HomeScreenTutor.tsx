import * as React from 'react';
import { StyleSheet, Button, FlatList, View, Text } from 'react-native';

import { useAppSelector, useAppDispatch } from '../../hooks/reactReduxHooks';

import { ReactNavigationProps } from '../../types';
import { TutorType } from '../../types_store';

import { changeCurrentTutor } from '../../store/actionCreators';

export default function HomeScreenTutor({ navigation }: ReactNavigationProps) {

	return (
		<View style={styles.container}>
			<Text style={styles.title}>
				Tutor Home
			</Text>
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
