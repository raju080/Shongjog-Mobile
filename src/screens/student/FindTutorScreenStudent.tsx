import * as React from 'react';
import { StyleSheet, FlatList, TextInput } from 'react-native';

import { useAppSelector, useAppDispatch } from '../../hooks/reactReduxHooks';
import { Text, View } from '../../components/Themed';
import { ReactNavigationProps } from '../../types';
import TutorPreviewCardCol from '../../components/TutorPreviewCardCol';
import { TutorTypeStudent } from '../../types_store';
import { ListItem, SearchBar, Button } from 'react-native-elements';
import { useState } from 'react';

import { FilterContext } from '../../store/contexts';
import { toggleFilterDrawerOpen } from '../../store/actionCreators';

export default function FindTutorScreenStudent({ navigation }: ReactNavigationProps) {
	const tutors = useAppSelector((state): TutorTypeStudent[] => state.tutor.tutors);
	const dispatch = useAppDispatch();

  const [search, setSearch] = useState('');

  const handleTutorClick = (tutor: TutorTypeStudent) => {
    navigation.push('TutorDetailsScreenStudent');
  }

	return (
		<View style={styles.container}>
			<ListItem bottomDivider>
				{/* <SearchBar
					placeholder='Type Here...'
					onChangeText={setSearch}
					value={search}
          platform='android'
				/> */}
				<TextInput
					value={search}
					placeholder='Search'
					onChangeText={setSearch}
					style={styles.searchInput}
				></TextInput>
				{/* <FilterContext.Consumer>
					{(value) => (
						<Button
							title='Filters'
							buttonStyle={{
								width: 80,
								height: 45,
								borderRadius: 25,
								backgroundColor: '#871c4a',
							}}
							onPress={() => value.handleDrawerOpen()}
						></Button>
					)}
				</FilterContext.Consumer> */}
				<Button
					title='Filters'
					buttonStyle={{
						width: 80,
						height: 45,
						borderRadius: 25,
						backgroundColor: '#871c4a',
					}}
					onPress={() => dispatch(toggleFilterDrawerOpen())}
				></Button>
			</ListItem>
			<FlatList
				data={tutors}
				numColumns={2}
				renderItem={({ item }) => (
					<TutorPreviewCardCol tutor={item} onClick={handleTutorClick} />
				)}
			/>
			{/* <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" /> */}
		</View>
	);
}

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
	searchInput: {
		width: 250,
		// backgroundColor: 'rgba(255, 255,255,0.5)',
		borderWidth: 0.2,
		// borderBottomWidth: 1,
		borderRadius: 25,
		paddingHorizontal: 16,
		paddingVertical: 8,
		fontSize: 14,
	},
});
