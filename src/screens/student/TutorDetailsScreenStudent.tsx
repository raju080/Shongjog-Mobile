import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';

import { Card, ListItem } from 'react-native-elements';

import TutorDetailsHeader from '../../components/TutorDetailsHeader';


import { tutors } from '../../shared/tutors';

const TutorDetailsScreenStudent = () => {

	const tutor = tutors[0];

	return (
		<View style={styles.container}>
			<TutorDetailsHeader tutor={tutor} />
			<ScrollView>
				<Card>
					<Card.Title>Introduction</Card.Title>
					<Card.Divider />
					<View>
						<Text>{tutor.introText}</Text>
					</View>
				</Card>
				<Card>
					<Card.Title>Subject Preference</Card.Title>
					<Card.Divider />
					<ListItem bottomDivider>
						<Text>HSC: Physics, Math</Text>
					</ListItem>
					<ListItem bottomDivider>
						<Text>SSC: Physics, Chemistry, Math</Text>
					</ListItem>
				</Card>
				<Card>
					<Card.Title>Remuneration Preference</Card.Title>
					<Card.Divider />
					<ListItem bottomDivider>
						<Text>
							HSC: {tutor.preference.remunerations.hsc.from} -{' '}
							{tutor.preference.remunerations.hsc.to} Tk
						</Text>
					</ListItem>
					<ListItem bottomDivider>
						<Text>
							SSC: {tutor.preference.remunerations.ssc.from} -{' '}
							{tutor.preference.remunerations.ssc.to} Tk
						</Text>
					</ListItem>
				</Card>
				<Card>
					<Card.Title>Reviews</Card.Title>
					<Card.Divider />
					<ListItem bottomDivider>
						<Text>Sir is very caring and genius.</Text>
					</ListItem>
					<ListItem bottomDivider>
						<Text>I got chance in BUET because of him. Love you sir.</Text>
					</ListItem>
				</Card>
			</ScrollView>
		</View>
	);
};

export default TutorDetailsScreenStudent;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		// backgroundColor: '#34568B',
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
	education: {
		flex: 1,
	},
});
