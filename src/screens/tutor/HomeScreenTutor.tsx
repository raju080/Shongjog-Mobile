import React, {useEffect} from 'react';
import { StyleSheet, Button, FlatList, ImageBackground, Image, ScrollView } from 'react-native';
import { useAppSelector, useAppDispatch } from '../../hooks/reactReduxHooks';
import { Text, View } from '../../components/Themed';
import TutorPreviewCardCol from '../../components/TutorPreviewCardCol';
import { ReactNavigationProps } from '../../types';
import { TutorTypeStudent } from '../../types_store';
import { changeSelectedTutor, fetchSelectedTutorStudent, fetchTutorsStudent } from '../../store/actionCreators';


export default function HomeScreenStudent({ navigation }: ReactNavigationProps) {
	const tutors = useAppSelector(
		(state) => state.tutorStudent.tutors
	);

	const currentTutor = useAppSelector((state) => state.tutorStudent.selectedTutor);
	const dispatch = useAppDispatch();

	const handleTutorClick = (tutor: TutorTypeStudent) => {
		console.log('changing selected tutor ' + tutor.name);
		dispatch(fetchSelectedTutorStudent(tutor.userId));
		navigation.push('TutorDetailsScreenStudent');
	};
	
	const changeTutor = () => {
		dispatch(changeSelectedTutor(tutors[(currentTutor.id + 1) % 3]));
	};

	useEffect(() => {
		dispatch(fetchTutorsStudent());
	}, []);

	return (
		<View style={styles.container}>
			<ScrollView>
				<View style={styles.middleContainer}>
					<Text style={styles.text1}>My Students</Text>
					<ScrollView>
					<View>
						<View style={{flexDirection: 'row'}}>
							<Text style={styles.text2}>Current Students</Text>
						</View>
						<FlatList
							horizontal
							data = {tutors}
							renderItem = {({item}) => (
								<TutorPreviewCardCol tutor={item} onClick={handleTutorClick} />
							)
						}
						/>
					</View>
					<View>
						<View style={{flexDirection: 'row'}}>
							<Text style={styles.text2}>Requested Students</Text>
						</View>
						<FlatList
							horizontal
							data = {tutors}
							renderItem = {({item}) => (
								<TutorPreviewCardCol tutor={item} onClick={handleTutorClick} />
							)
						}
						/>
					</View>
					<View>
						<View style={{flexDirection: 'row'}}>
							<Text style={styles.text2}>Previous Students</Text>
						</View>
						<FlatList
							horizontal
							data = {tutors}
							renderItem = {({item}) => (
								<TutorPreviewCardCol tutor={item} onClick={handleTutorClick} />
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
		color: '#B55A30',
		alignSelf: 'flex-end',
		paddingRight: 10
	},
	searchMore: {
		flex: 1,
	},
});
