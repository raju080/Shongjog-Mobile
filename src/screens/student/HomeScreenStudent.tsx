import React, {useEffect} from 'react';
import { StyleSheet, Button, FlatList, ImageBackground, Image, ScrollView } from 'react-native';
import { useAppSelector, useAppDispatch } from '../../hooks/reactReduxHooks';
import { Text, View } from '../../components/Themed';
import TutorPreviewCardCol from '../../components/TutorPreviewCardCol';
import { ReactNavigationProps } from '../../types';
import { TutorTypeStudent } from '../../types_store';
import { changeSelectedTutor, fetchTutorsStudent } from '../../store/actionCreators';


export default function HomeScreenStudent({ navigation }: ReactNavigationProps) {
	const tutors = useAppSelector(
		(state): TutorTypeStudent[] => state.tutor.tutors
	);

	const teachers = [
		{image:require('../../assets/images/newtushar.png')},
		{image:require('../../assets/images/newtushar.png')},
		{image:require('../../assets/images/newtushar.png')},
		{image:require('../../assets/images/newtushar.png')}
	];

	const currentTutor = useAppSelector((state) => state.tutor.selectedTutor);
	const dispatch = useAppDispatch();

	const changeTutor = () => {
		dispatch(changeSelectedTutor(tutors[(currentTutor.id + 1) % 3]));
	};

	useEffect(() => {
		dispatch(fetchTutorsStudent());
	}, []);

	return (
		<View style={styles.container}>
			<ScrollView>
				<ImageBackground source={require('../../assets/images/bg-blur-2-1024x357.jpg')} style={styles.upperContainer}>
					<Image
						style={{ width: 360, height: 220, resizeMode: 'cover'}}
						source={require('../../assets/images/unnamed.jpg')}
					/>
					<Text style={styles.text1}>Total Tutors : 2000</Text>
				</ImageBackground>
				<View style={styles.middleContainer}>
					<Text style={styles.text1}>Discover</Text>
					<ScrollView>
					<View>
						<View style={{flexDirection: 'row'}}>
							<Text style={styles.text2}>Featured Tutors</Text>
							<Text style={styles.text3}>Search More</Text>
						</View>
						<FlatList
							horizontal
							data = {teachers}
							renderItem = {({item}) => (
								<Image
									style={{width: 150, height: 150, resizeMode: 'contain', marginLeft: 10}}
									source={item.image}
								/>
							)
						}
						/>
					</View>
					<View>
						<View style={{flexDirection: 'row'}}>
							<Text style={styles.text2}>Featured Tutors</Text>
							<Text style={styles.text3}>Search More</Text>
						</View>
						<FlatList
							horizontal
							data = {teachers}
							renderItem = {({item}) => (
								<Image
									style={{width: 150, height: 150, resizeMode: 'contain', marginLeft: 10}}
									source={item.image}
								/>
							)
						}
						/>
					</View>
					<View>
						<View style={{flexDirection: 'row'}}>
							<Text style={styles.text2}>Featured Tutors</Text>
							<Text style={styles.text3}>Search More</Text>
						</View>
						<FlatList
							horizontal
							data = {teachers}
							renderItem = {({item}) => (
								<Image
									style={{width: 150, height: 150, resizeMode: 'contain', marginLeft: 10}}
									source={item.image}
								/>
							)
						}
						/>
					</View>
					</ScrollView>
				</View>
			</ScrollView>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		flexDirection: 'column',
		justifyContent: 'flex-start',
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
	upperContainer: {
		alignItems: 'center',
		paddingBottom: 10
	},
	middleContainer: {
		alignItems: 'flex-start',
		paddingTop: 10,
		paddingLeft: 10
	},
	text1: {
		marginTop: 10,
		fontSize: 20,
		fontWeight: 'bold',
	},
	text2: {
		marginTop: 10,
		fontSize: 16,
	},
	text3: {
		marginTop: 10,
		fontSize: 16,
		paddingLeft: 140,
		color: '#B55A30'
	},
});
