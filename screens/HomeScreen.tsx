import * as React from 'react';
import { StyleSheet } from 'react-native';

import { Text, View } from '../components/Themed';
import TutorPreviewCardRow from '../components/TutorPreviewCardRow';
import TutorPreviewCardCol from '../components/TutorPreviewCardCol';

import { ReactNavigationProps } from '../types';

import { tutors } from '../shared/tutors';

export default function HomeScreen({ navigation }: ReactNavigationProps) {
	return (
		<View style={styles.container}>
			<Text style={styles.title}>Home Screen</Text>
			<TutorPreviewCardCol tutor={tutors[0]} navigation={navigation} />
			<TutorPreviewCardRow />
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
