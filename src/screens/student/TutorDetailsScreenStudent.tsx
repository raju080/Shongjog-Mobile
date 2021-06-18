import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';

import { Card, ListItem } from 'react-native-elements';

import TutorDetailsHeader from '../../components/TutorDetailsHeader';
import { useAppSelector } from '../../hooks/reactReduxHooks';
import { NavigationProp, ReactNavigationProps } from '../../types';

import { TutorDetailsTypeStudent, TutorTypeStudent } from '../../types_store';

const TutorDetailsScreenStudent = ({navigation}: ReactNavigationProps) => {

	const tutor = useAppSelector(
		(state): TutorDetailsTypeStudent | null => state.tutor.selectedTutor
	);

	const handleTuitionRequest = () => {
		navigation.navigate('TuitionRequestInitialScreenStudent');
	}

	return (
		tutor === null ? <View></View> :
		<View style={styles.container}>
			<TutorDetailsHeader tutor={tutor} handleTuitionRequest={handleTuitionRequest} />
			<ScrollView>
				<Card>
					<Card.Title>Introduction</Card.Title>
					<Card.Divider />
					<View>
						<Text>{"Hello I'm Asif the copper. Tuition is my passion. And money is my motivation. Hire me if you wanna cop in BUET like me."}</Text>
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
							{tutor.preference.remunerations[0].type}: {tutor.preference.remunerations[0].from} -{' '}
							{tutor.preference.remunerations[0].to} Tk
						</Text>
						</ListItem>
						{tutor.preference.remunerations[1] ?
							<ListItem bottomDivider>
								<Text>
									{tutor.preference.remunerations[1]?.type}: {tutor.preference.remunerations[1]?.from} -{' '}
									{tutor.preference.remunerations[1]?.to} Tk
						</Text>
							</ListItem> : null
						}
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
