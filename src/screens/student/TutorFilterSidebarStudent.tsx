import React, { useState } from 'react';
import { StyleSheet, Text, View, SafeAreaView, Platform, StatusBar } from 'react-native';

import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';
import { ListItem, Button } from 'react-native-elements';

type PropsType = {
	customText: string;
};

const TutorFilterSidebarStudent = ({ customText }: PropsType) => {
	const [subjectFiltersOpen, setSubjectFiltersOpen] = useState<boolean>(false);
	return (
		<SafeAreaView style={styles.container}>
			<View style={styles.header}>
				<Text style={styles.headerText}>Filters</Text>
			</View>
			<DrawerContentScrollView style={styles.filterSection}>
				<View>
					<ListItem.Accordion
						isExpanded={subjectFiltersOpen}
						onPress={() => {
							setSubjectFiltersOpen(!subjectFiltersOpen);
						}}
						content={
							<ListItem>
								<Text>Subjects</Text>
							</ListItem>
						}
					>
						<ListItem topDivider bottomDivider>
							<Text>Hello</Text>
						</ListItem>
						<ListItem bottomDivider>
							<Text>Hello</Text>
						</ListItem>
						<ListItem bottomDivider>
							<Text>Hello</Text>
						</ListItem>
					</ListItem.Accordion>
					<ListItem.Accordion
						isExpanded={subjectFiltersOpen}
						onPress={() => {
							setSubjectFiltersOpen(!subjectFiltersOpen);
						}}
						content={
							<ListItem>
								<Text>Subjects</Text>
							</ListItem>
						}
					>
						<ListItem topDivider bottomDivider>
							<Text>Hello</Text>
						</ListItem>
						<ListItem bottomDivider>
							<Text>Hello</Text>
						</ListItem>
						<ListItem bottomDivider>
							<Text>Hello</Text>
						</ListItem>
					</ListItem.Accordion>
				</View>
			</DrawerContentScrollView>
			<View style={styles.bottomSection}>
				<Button title='Apply' buttonStyle={styles.filterButton}></Button>
			</View>
		</SafeAreaView>
	);
};

export default TutorFilterSidebarStudent;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		height: '100%',
		backgroundColor: '#009B77',
		paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
	},
	header: {
		height: 56,
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: '#009B77',
	},
  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
  },
	filterSection: {
		flex: 1,
		backgroundColor: 'white',
	},
	bottomSection: {},
	filterButton: {
		backgroundColor: '#955251',
		height: 50,
		borderRadius: 0,
	},
});
