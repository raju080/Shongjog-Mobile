import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import TuitionRequestCard from '../../components/TuitionRequestCard';

import { TUITION_REQUESTS } from '../../shared/lists';
import { ReactNavigationProps } from '../../types';

const TuitionsScreenTutor = ({ navigation }: ReactNavigationProps) => {
	const tuition_requests = TUITION_REQUESTS;

	const handleTuitionRequestClick = () => {
		console.log('tuition request details');
		navigation.navigate('TuitionRequestDetailsScreenTutor');
	};

	return (
		<View style={styles.container}>
			{tuition_requests.length === 0 ? (
				<Text style={styles.title}>No Tuitions Yet</Text>
			) : (
				<FlatList
					data={tuition_requests}
					numColumns={1}
					renderItem={({ item }) => (
						<TuitionRequestCard
							tuitionRequest={item}
							onClick={handleTuitionRequestClick}
						/>
					)}
				/>
			)}
		</View>
	);
};

export default TuitionsScreenTutor;

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
