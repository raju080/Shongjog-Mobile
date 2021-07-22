import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button } from 'react-native-elements';
import { ReactNavigationProps } from '../../types';

const TuitionRequestDetailsScreenTutor = ({
	navigation,
}: ReactNavigationProps) => {
  const handleCancelTuition = () => {
    console.log('cancelling tuition');
  }

  const handleNegotiateTuition = () => {
    console.log('go to negotiate tuition');
    navigation.navigate('TuitionNegotiationScreenTutor');
  }

	return (
		<View>
			<Text>Tuition request details</Text>

			<Button
				title='Cancel'
				onPress={handleCancelTuition}
				buttonStyle={{
					backgroundColor: 'red',
				}}
			/>
			<Button
				title='Negotiate'
				onPress={handleNegotiateTuition}
			/>
		</View>
	);
};

export default TuitionRequestDetailsScreenTutor;

const styles = StyleSheet.create({})
