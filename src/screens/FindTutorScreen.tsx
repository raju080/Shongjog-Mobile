import * as React from 'react';
import { StyleSheet, FlatList } from 'react-native';

import { useAppSelector, useAppDispatch } from '../hooks/reactReduxHooks';
import { Text, View } from '../components/Themed';
import { ReactNavigationProps } from '../types';
import TutorPreviewCardCol from '../components/TutorPreviewCardCol';
import { Tutor } from '../StateTypes';

export default function FindTutorScreen({ navigation }: ReactNavigationProps) {
	const tutors = useAppSelector((state): Tutor[] => state.tutor.tutors);
	const dispatch = useAppDispatch();

  const handleTutorClick = (tutor: Tutor) => {
    navigation.push('TutorDetailsScreen');
  }

	return (
		<View style={styles.container}>
			<Text style={styles.title}>Find Tutor Screen</Text>
			<FlatList
				data={tutors}
				numColumns={2}
				renderItem={({ item }) => (
					<TutorPreviewCardCol tutor={item} onClick={handleTutorClick} />
				)}
			/>
			{/* <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" /> */}
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
