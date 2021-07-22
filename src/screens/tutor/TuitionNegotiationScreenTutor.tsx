import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button } from 'react-native-elements';
import { ReactNavigationProps } from '../../types';

const TuitionNegotiationScreenTutor = ({
	navigation,
}: ReactNavigationProps) => {
	const handleCancelTuition = () => {
		console.log('cancelling tuition');
	};

	const handleConfirmTuition = () => {
		console.log('confirming tuition');
    navigation.navigate('TuitionsScreenTutor');
	};

	return (
		<View>
			<Text>Tuition negotiation by chatting</Text>
			<Button
				title='Cancel'
				onPress={handleCancelTuition}
				buttonStyle={{
					backgroundColor: 'red',
				}}
			/>
			<Button
				title='Confirm'
				onPress={handleConfirmTuition}
				buttonStyle={{
					backgroundColor: 'green',
				}}
			/>
		</View>
	);
};

export default TuitionNegotiationScreenTutor;

const styles = StyleSheet.create({})
