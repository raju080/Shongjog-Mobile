import React from 'react';
import { StyleSheet, Text, View, ImageBackground, Image, Platform, Alert } from 'react-native';
import { Card, Icon, Button } from 'react-native-elements';

import { CustomButton } from './CustomComponents';
import { tutors, requireTutorImage } from '../shared/tutors';
import { TutorDetailsTypeStudent, TutorTypeStudent } from '../types_store';

type PropType = {
	tutor: TutorDetailsTypeStudent;
	handleTuitionRequest: () => void;
};

const TutorDetailsHeader = ({tutor, handleTuitionRequest}: PropType) => {
	const ugEQ = tutor.educationQualifications[2];

  return (
		<View style={styles.headerContainer}>
			<ImageBackground
				style={styles.headerBackgroundImage}
				blurRadius={10}
				source={{ uri: 'https://i.imgur.com/rXVcgTZ.jpg' }}
			>
				<View style={styles.headerColumn}>
					<View style={styles.tutorTopRow}>
						<View style={styles.rating}>
							<Icon
								name='star'
								type='font-awesome'
								underlayColor='transparent'
								iconStyle={{ fontSize: 26, color: 'yellow' }}
								onPress={() => null}
							/>
							<Text style={{ color: 'white', fontSize: 16 }}>
								{tutor.rating}/5
							</Text>
						</View>
						<View style={styles.tutorImageContainer}>
							<Image
								style={styles.tutorImage}
								// source={{ uri: tutor.imageUri }}
								source={requireTutorImage(tutor.userId)}

							/>
						</View>
						<View style={styles.favorite}>
							<Icon
								name='heart'
								type='font-awesome'
								underlayColor='transparent'
								iconStyle={{ fontSize: 26, color: 'red' }}
								onPress={() => null}
							/>
							<Text style={{ color: 'white', fontSize: 16 }}>100</Text>
						</View>
					</View>
					<Text style={styles.tutorNameText}>{tutor.name}</Text>
					<View style={{ marginVertical: 10 }}>
						<Button
							title='Request Tuition'
							buttonStyle={{
								width: 200,
								height: 40,
								borderRadius: 20,
								backgroundColor: '#871c4a',
							}}
							onPress={handleTuitionRequest}
						/>
					</View>

					<View style={styles.universityDeptRow}>
						<Icon
							name='university'
							type='font-awesome'
							underlayColor='transparent'
							iconStyle={styles.placeIcon}
							onPress={() => null}
						/>
						<Text style={styles.universityDeptText}>
							{ugEQ?.department}, {ugEQ?.institute}
						</Text>
					</View>
				</View>
			</ImageBackground>
		</View>
	);
}

export default TutorDetailsHeader;

const styles = StyleSheet.create({
	headerBackgroundImage: {
		paddingBottom: 10,
		paddingTop: 10,
		flex: 1,
	},
	headerContainer: {
		height: 300,
		// backgroundColor: 'white',
	},
	headerColumn: {
		flex: 1,
		backgroundColor: 'transparent',
		...Platform.select({
			ios: {
				alignItems: 'center',
				elevation: 1,
				marginTop: -1,
			},
			android: {
				alignItems: 'center',
			},
		}),
	},
	tutorTopRow: {
		flex: 7,
		flexDirection: 'row',
	},
	placeIcon: {
		color: 'white',
		fontSize: 16,
		marginHorizontal: 10,
	},
	scroll: {
		backgroundColor: '#FFF',
	},
	universityDept: {
		flex: 2,
		alignItems: 'center',
	},
	universityDeptRow: {
		backgroundColor: 'transparent',
		flexDirection: 'row',
	},
	universityDeptText: {
		color: '#A5A5A5',
		fontSize: 16,
		fontWeight: '600',
		textAlign: 'center',
	},
	tutorImage: {
		borderColor: '#FFF',
		borderRadius: 80,
		borderWidth: 2,
		height: 160,
		marginBottom: 15,
		width: 160,
	},
	tutorImageContainer: {
		flex: 2,
		alignItems: 'center',
	},
	rating: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
	favorite: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
	tutorNameText: {
		flex: 1,
		color: '#FFF',
		fontSize: 22,
		fontWeight: 'bold',
		textAlign: 'center',
		marginBottom: 10,
	},
	requestButton: {
		marginVertical: 10,
	},
});
