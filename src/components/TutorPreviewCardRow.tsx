import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons'; 
import { TouchableOpacity } from 'react-native-gesture-handler';

import { Tutor } from '../StateTypes';

type Props = {
	tutor: Tutor;
	onClick: () => void;
}

const TutorPreviewCardRow = ({ tutor, onClick } : Props) => {
	return (
		<TouchableOpacity onPress={onClick}>
			<View style={style.cartCard}>
				<Image
					source={{
						uri: 'https://highschooltutors.imgix.net/84323.jpg?auto=compress%2Cformat&facepad=2.5&fit=crop&h=300&w=300&s=22ae96449509f50aaf46cb5fc7ea2a0e',
					}}
					style={{ height: 80, width: 80 }}
				/>
				<View
					style={{
						height: 100,
						marginLeft: 10,
						paddingVertical: 20,
						flex: 1,
					}}
				>
					<Text style={{ fontWeight: 'bold', fontSize: 16 }}>
						{'Asif Ahmed'}
					</Text>

					<Text style={{ fontSize: 17, fontWeight: 'bold' }}>${5000}</Text>
				</View>
				<View style={{ marginRight: 20, alignItems: 'center' }}>
					<Text style={{ fontWeight: 'bold', fontSize: 18 }}>3</Text>
					<View style={style.actionBtn}>
						<MaterialIcons name='remove' size={25} color='#FFF' />
						<MaterialIcons name='add' size={25} color='#FFF' />
					</View>
				</View>
			</View>
		</TouchableOpacity>
	);
};

export default TutorPreviewCardRow;

const style = StyleSheet.create({
	cartCard: {
		height: 100,
		elevation: 15,
		borderRadius: 10,
		backgroundColor: '#FFF',
		marginVertical: 10,
		marginHorizontal: 20,
		paddingHorizontal: 10,
		flexDirection: 'row',
		alignItems: 'center',
	},
	actionBtn: {
		width: 80,
		height: 30,
		backgroundColor: '#F9813A',
		borderRadius: 30,
		paddingHorizontal: 5,
		flexDirection: 'row',
		justifyContent: 'center',
		alignContent: 'center',
	},
});
