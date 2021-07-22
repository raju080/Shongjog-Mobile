import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

type Props = {
  tuitionRequest : any;
  onClick: any;
}

const TuitionRequestCard = ({tuitionRequest, onClick}: Props) => {
  

  return (
		<TouchableOpacity onPress={onClick}>
			<View style={style.cartCard}>
				<Text style={{ fontWeight: 'bold', fontSize: 16 }}>
					{tuitionRequest.studentName}
				</Text>
				<Text> send you a tuition request from </Text>
				<Text style={{ fontWeight: 'bold', fontSize: 16 }}>
					{tuitionRequest.details.area}, {tuitionRequest.details.district}
				</Text>
			</View>
		</TouchableOpacity>
	);
}

export default TuitionRequestCard;

const style = StyleSheet.create({
	cartCard: {
		height: 80,
		elevation: 10,
		borderRadius: 5,
		backgroundColor: '#FFF',
		marginVertical: 10,
		marginHorizontal: 20,
		flexDirection: 'row',
    flexWrap: 'wrap',
		alignItems: 'center',
    justifyContent: 'center',
	},
});

