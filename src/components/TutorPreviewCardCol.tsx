import React from 'react';
import { StyleSheet, Text, View, Image, Dimensions } from 'react-native';
import {
	FlatList,
	ScrollView,
	TextInput,
	TouchableHighlight,
	TouchableOpacity,
} from 'react-native-gesture-handler';

import { Rating, AirbnbRating, Icon } from 'react-native-elements';

import { MaterialIcons } from '@expo/vector-icons';
import { COLORS } from '../constants/Colors';
import { NavigationProp } from '../types';
import { TutorTypeStudent } from '../types_store';

import { requireTutorImage } from '../shared/tutors';

const screenWidth = Dimensions.get('screen').width;
const cardProperties = {
	cardWidth: screenWidth / 2 - 20,
	cardHeight: 240,
	cardRadius: 5,
};

type Props = {
	tutor: TutorTypeStudent;
	onClick: (tutor: TutorTypeStudent) => void;
};

const TutorPreviewCardCol = ({ tutor, onClick }: Props) => {
	return (
		<TouchableHighlight
			underlayColor={COLORS.light}
			activeOpacity={0.9}
			style={styles.card}
			onPress={() => onClick(tutor)}
		>
			<View style={{ alignItems: 'center' }}>
				<View style={styles.top}>
					<Image
						source={requireTutorImage(tutor.userId)}
						style={{
							height: cardProperties.cardHeight / 2 + 10,
							width: cardProperties.cardWidth,
							borderTopLeftRadius: cardProperties.cardRadius,
							borderTopRightRadius: cardProperties.cardRadius,
						}}
					/>
				</View>
				<View style={styles.bottom}>
					<Text style={{ fontSize: 16, fontWeight: 'normal' }}>
						{tutor.name}
					</Text>
					<View style={{ alignItems: 'center' }}>
						<Rating
							imageSize={16}
							readonly
							startingValue={tutor.rating}
							style={styles.rating}
						/>
					</View>
					<View style={styles.universityDeptRow}>
						<Icon
							name='university'
							type='font-awesome'
							iconStyle={styles.placeIcon}
						/>
						<Text style={styles.universityDeptText}>
							{tutor.ugDepartment}, {tutor.ugInstitute}
						</Text>
					</View>
				</View>
			</View>
		</TouchableHighlight>
	);
};

export default TutorPreviewCardCol;

const styles = StyleSheet.create({
	card: {
		height: cardProperties.cardHeight,
		width: cardProperties.cardWidth,
		marginHorizontal: 10,
		marginVertical: 10,
		borderRadius: cardProperties.cardRadius,
		elevation: 3,
		backgroundColor: COLORS.white,
	},
	top: {
		alignItems: 'center',
	},
	bottom: { marginHorizontal: 10, marginTop: 10, alignItems: 'center' },
	rating: {
		marginVertical: 10,
	},
	placeIcon: {
		color: '#517fa4',
		fontSize: 16,
		marginHorizontal: 10,
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
});
