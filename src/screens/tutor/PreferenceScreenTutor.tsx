import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { useAppSelector } from '../../hooks/reactReduxHooks';
import { PreferenceType, TutorTypeTutor } from '../../types_store';

const PreferenceScreenTutor = () => {
  const preference = useAppSelector(
		(state): PreferenceType => state.tutorTutor.tutor.preference
	);
  
  return (
		<ScrollView style={styles.container}>
			<View style={styles.preferenceSection}>
				<Text>Location & gender</Text>
			</View>
			<View style={styles.preferenceSection}>
				<Text>Tuition Preferences</Text>
			</View>
			<View style={styles.preferenceSection}>
				<Text>Schedules</Text>
			</View>
		</ScrollView>
	);
}

export default PreferenceScreenTutor;

const styles = StyleSheet.create({
	container: {},
	preferenceSection: {},
});
