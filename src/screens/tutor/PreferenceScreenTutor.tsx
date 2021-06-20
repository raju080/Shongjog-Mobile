import React, { useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { StyleSheet, Text, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { ListItem, Button, Icon, Overlay, Card } from 'react-native-elements';

import { Dropdown, MultiselectDropdown } from 'sharingan-rn-modal-dropdown';
import { useAppSelector } from '../../hooks/reactReduxHooks';
import { PreferenceType, TutorTypeTutor } from '../../types_store';


import {
	AREAS,
	COLLEGES,
	UNIVERSITIES,
	levels,
	genders,
} from '../../shared/lists';
import { formStyles } from '../../assets/styles/formStyles';
import { COLORS } from '../../constants/Colors';
import { STUDENT_CLASSES, STUDENT_TYPES, SUBJECTS } from '../../shared/filters';
import { ListModeType } from 'react-native-dropdown-picker';

const PreferenceScreenTutor = () => {
	const preference = useAppSelector(
		(state): PreferenceType => state.tutorTutor.tutor.preference
	);

	const studentTypes = STUDENT_TYPES.map((d, k) => ({ value: d, label: d }));

	const [sTypeSelected, setSTypeSelected] = useState('');
	const [classSelected, setClassSelected] = useState('');

	const [addLocationOverlayOpen, setAddLocationOverlayOpen] = useState(false);
	const [addStudentOverlayOpen, setAddStudentOverlayOpen] = useState(false);

	const {
		control,
		handleSubmit,
		getValues,
		watch,
		formState: { errors },
	} = useForm({});
	const [dist, setDist] = useState<string>('');

	const districts = Object.keys(AREAS)
		.sort()
		.map((d, k) => ({ value: d, label: d }));

	const toggleLocationOverlay = () => {
		setAddLocationOverlayOpen(!addLocationOverlayOpen);
	};

	const toggleStudentOverlay = () => {
		setAddStudentOverlayOpen(!addStudentOverlayOpen);
	};

	return (
		<ScrollView contentContainerStyle={styles.container}>
			<View style={styles.preferenceSection}>
				<Controller
					control={control}
					render={({ field: { onChange, onBlur, value } }) => (
						<Dropdown
							label='Gender'
							data={genders}
							value={value}
							onChange={(option) => {
								onChange(option);
							}}
							mainContainerStyle={formStyles.formSelect}
						/>
					)}
					name='gender'
				/>
			</View>
			<View style={styles.preferenceSection}>
				<ListItem>
					<ListItem.Title>Preferred Locations</ListItem.Title>
				</ListItem>
				<ListItem.Content>
					{preference.locations.map((item, k) => (
						<View style={styles.listItem} key={k}>
							<ListItem.Subtitle style={styles.listItemText}>
								{item.area}, {item.district}
							</ListItem.Subtitle>
							<Button
								title='delete'
								buttonStyle={{ backgroundColor: COLORS.red }}
								icon={
									<Icon
										name='trash'
										size={18}
										type='font-awesome-5'
										style={{ marginRight: 5 }}
									/>
								}
							></Button>
						</View>
					))}
				</ListItem.Content>
				<Button
					title='Add new location'
					onPress={() => toggleLocationOverlay()}
				></Button>
			</View>
			<View style={styles.preferenceSection}>
				<ListItem>
					<ListItem.Title>
						<Text>Preferred Students</Text>
					</ListItem.Title>
				</ListItem>
				<ListItem.Content>
					{preference.tuitions.map((item, k) => (
						<View style={styles.listItem} key={k}>
							<View style={{ flex: 1, flexDirection: 'column' }}>
								<ListItem.Subtitle style={styles.listItemText}>
									Student: {item.studentType}, {item.studentClass}
								</ListItem.Subtitle>
								<ListItem.Subtitle style={styles.listItemText}>
									Subjects: {item.subjects.map((sub) => sub + ', ')}
								</ListItem.Subtitle>
								<ListItem.Subtitle style={styles.listItemText}>
									Salary: {item.expectedMinRemuneration} -{' '}
									{item.expectedMaxRemuneration}
								</ListItem.Subtitle>
							</View>

							<Button
								title='delete'
								buttonStyle={{ backgroundColor: COLORS.red }}
								icon={
									<Icon
										name='trash'
										size={18}
										type='font-awesome-5'
										style={{ marginRight: 5 }}
									/>
								}
							></Button>
						</View>
					))}
				</ListItem.Content>
				<Button
					title='Add new student preference'
					onPress={() => toggleStudentOverlay()}
				></Button>
			</View>
			<View style={styles.preferenceSection}>
				<ListItem>
					<ListItem.Title>
						<Text>Preferred Schedule</Text>
					</ListItem.Title>
					<ListItem.Content>

					</ListItem.Content>
				</ListItem>
			</View>

			{/* Location Preference add */}
			<Overlay
				isVisible={addLocationOverlayOpen}
				onBackdropPress={toggleLocationOverlay}
				overlayStyle={{ width: 300 }}
			>
				<Card.Title>Add Location Preference</Card.Title>
				<Card.Divider></Card.Divider>
				<ListItem>
					<Controller
						control={control}
						render={({ field: { onChange, onBlur, value } }) => (
							<Dropdown
								label='Your District'
								data={districts}
								value={value}
								onChange={(option) => {
									onChange(option);
									setDist(option);
								}}
								mainContainerStyle={formStyles.formSelect}
							/>
						)}
						name='district'
					/>
				</ListItem>
				<ListItem>
					<Controller
						control={control}
						render={({ field: { onChange, onBlur, value } }) => {
							let areas = AREAS[dist]?.map((d: string, k: string) => ({
								value: d,
								label: d,
							}));
							return (
								<Dropdown
									label='Your Area'
									data={areas}
									value={value}
									onChange={onChange}
									mainContainerStyle={formStyles.formSelect}
								/>
							);
						}}
						name='area'
					/>
				</ListItem>
				<Button title='Add'></Button>
			</Overlay>

			{/* Student Preference add */}
			<Overlay
				isVisible={addStudentOverlayOpen}
				onBackdropPress={toggleStudentOverlay}
				overlayStyle={{ width: 300 }}
			>
				<Card.Title>Add Student Preference</Card.Title>
				<Card.Divider></Card.Divider>
				<ListItem>
					<Controller
						control={control}
						render={({ field: { onChange, onBlur, value } }) => (
							<Dropdown
								label='Select your version'
								data={studentTypes}
								value={value}
								onChange={(option) => {
									onChange(option);
									setSTypeSelected(option);
								}}
							/>
						)}
						name='studentType'
						defaultValue=''
					/>
				</ListItem>

				{/* Class */}
				{/* <Text style={styles.formLabel}>Student Class</Text> */}
				<ListItem>
					<Controller
						control={control}
						render={({ field: { onChange, onBlur, value } }) => {
							let classes = STUDENT_CLASSES[sTypeSelected]?.map(
								(d: string, k: string) => ({ key: k, value: d, label: d })
							);
							return (
								<Dropdown
									label='Select your class'
									data={classes}
									value={value}
									onChange={(option) => {
										onChange(option);
										setClassSelected(option);
									}}
								/>
							);
						}}
						name='class'
						defaultValue=''
					/>
				</ListItem>

				<ListItem>
					<Controller
						control={control}
						render={({ field: { onChange, onBlur, value } }) => {
							let subjects = SUBJECTS[classSelected]?.map(
								(d: string, k: string) => ({ key: k, value: d, label: d })
							);
							return (
								<MultiselectDropdown
									label='Select Subjects for tuition'
									data={subjects}
									chipType='outlined'
									value={value}
									onChange={(val) => onChange(val)}
								/>
							);
						}}
						name='subjects'
						defaultValue=''
					/>
				</ListItem>
				
				<Button title='Add'></Button>
			</Overlay>
		</ScrollView>
	);
};

export default PreferenceScreenTutor;

const styles = StyleSheet.create({
	container: {},
	preferenceSection: {
		flex: 1,
		backgroundColor: 'white',
		marginVertical: 5,
		marginHorizontal: 10,
	},
	listItem: {
		flex: 1,
		flexDirection: 'row',
		alignItems: 'center',
		marginHorizontal: 15,
		marginVertical: 10,
	},
	listItemText: { flex: 1, flexWrap: 'wrap', paddingRight: 5 },
});
