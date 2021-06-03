import * as React from 'react';
import { StyleSheet, Button, FlatList } from 'react-native';

import { useAppSelector, useAppDispatch } from '../../hooks/reactReduxHooks';

import { Text, View } from '../../components/Themed';
import TutorPreviewCardCol from '../../components/TutorPreviewCardCol';

import { ReactNavigationProps } from '../../types';
import { TutorTypeStudent } from '../../types_store';

import { changeSelectedTutor } from '../../store/actionCreators';

export default function HomeScreenStudent({ navigation }: ReactNavigationProps) {
	const tutors = useAppSelector(
		(state): TutorTypeStudent[] => state.tutor.tutors
	);
	const currentTutor = useAppSelector((state) => state.tutor.currentTutor);
	const dispatch = useAppDispatch();

	const changeTutor = () => {
		dispatch(changeSelectedTutor(tutors[(currentTutor.id + 1) % 3]));
	};

	return (
		<View style={styles.container}>
			{/* <Text style={styles.title}>Home Screen</Text> */}
			{/* {tutors.map((tutor, key) => (
				<TutorPreviewCardCol key={key} tutor={tutor} navigation={navigation} />
			))} */}
			
			{/* <Button title='Change Tutor' onPress={() => changeTutor()} /> */}
			{/* <View
				style={styles.separator}
				lightColor='#eee'
				darkColor='rgba(255,255,255,0.1)'
			/> */}
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