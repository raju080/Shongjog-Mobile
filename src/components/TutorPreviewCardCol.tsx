import React from 'react';
import { StyleSheet, Text, View, Image, Dimensions } from 'react-native';
import {
	FlatList,
	ScrollView,
	TextInput,
	TouchableHighlight,
	TouchableOpacity,
} from 'react-native-gesture-handler';

import { MaterialIcons } from '@expo/vector-icons';
import { COLORS } from '../constants/Colors';
import { NavigationProp } from '../types';
import { Tutor } from '../store/StateTypes';

const screenWidth = Dimensions.get('screen').width;
const cardProperties = {
	cardWidth: screenWidth / 2 - 20,
	cardHeight: 300,
	cardRadius: 5,
};

type Props = {
	tutor: Tutor;
	navigation: NavigationProp;
};

const TutorPreviewCardCol = ({ tutor, navigation }: Props) => {
	return (
		<TouchableHighlight
			underlayColor={COLORS.light}
			activeOpacity={0.9}
			onPress={() => navigation.navigate('Find Tutor')}
		>
			<View style={styles.card}>
				<View style={{ alignItems: 'center' }}>
					<Image
						source={{
							uri: tutor.imageUri,
						}}
						style={{
							height: cardProperties.cardHeight / 2,
							width: cardProperties.cardWidth,
							borderTopLeftRadius: cardProperties.cardRadius,
							borderTopRightRadius: cardProperties.cardRadius,
						}}
					/>
				</View>
				<View style={{ marginHorizontal: 10, marginTop: 10 }}>
					<Text style={{ fontSize: 18, fontWeight: 'normal' }}>
						{tutor.name}
					</Text>
					<Text style={{ fontSize: 14, color: COLORS.grey, marginTop: 2 }}>
						{tutor.department} {', '} {tutor.university}
					</Text>
				</View>
				<View
					style={{
						marginTop: 10,
						marginHorizontal: 10,
						flexDirection: 'row',
						justifyContent: 'space-between',
					}}
				>
					<Text style={{ fontSize: 14, fontWeight: 'normal' }}>College</Text>
					<Text style={{ fontSize: 14, fontWeight: 'normal' }}>
						{tutor.tuitionFees.college}
					</Text>
				</View>
				<View
					style={{
						marginTop: 10,
						marginHorizontal: 10,
						flexDirection: 'row',
						justifyContent: 'space-between',
					}}
				>
					<Text style={{ fontSize: 14, fontWeight: 'normal' }}>School</Text>
					<Text style={{ fontSize: 14, fontWeight: 'normal' }}>
						{tutor.tuitionFees.school}
					</Text>
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
		marginBottom: 20,
		marginTop: 50,
		borderRadius: cardProperties.cardRadius,
		elevation: 5,
		backgroundColor: COLORS.white,
	},
	addToCartBtn: {
		height: 30,
		width: 30,
		borderRadius: 20,
		backgroundColor: COLORS.primary,
		justifyContent: 'center',
		alignItems: 'center',
	},
});
