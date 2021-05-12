import * as React from 'react';
import { StyleSheet } from 'react-native';

import { useAppSelector, useAppDispatch } from '../hooks/reactReduxHooks';

import { Text, View } from '../components/Themed';
import TutorPreviewCardRow from '../components/TutorPreviewCardRow';
import TutorPreviewCardCol from '../components/TutorPreviewCardCol';

import { ReactNavigationProps } from '../types';

import { changeCurrentTutor } from '../store/actionCreators';

export default function HomeScreen({ navigation }: ReactNavigationProps) {
  const tutor = useAppSelector(state => state.tutor);
  const dispatch = useAppDispatch();

  const changeTutor = () => {
    dispatch(changeCurrentTutor(tutor.tutors[1]))
  }

	return (
		<View style={styles.container}>
			<Text style={styles.title}>Home Screen</Text>
			<TutorPreviewCardCol tutor={tutor.currentTutor} navigation={navigation} />
			<TutorPreviewCardRow tutor={tutor.currentTutor} onClick={changeTutor} />
			<View
				style={styles.separator}
				lightColor='#eee'
				darkColor='rgba(255,255,255,0.1)'
			/>
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
