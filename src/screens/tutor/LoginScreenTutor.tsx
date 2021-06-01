import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import LoginComponent from '../../components/LoginComponent';


const LoginScreenTutor = () => {
  return (
    <View style={styles.container}>
      <LoginComponent />
    </View>
  )
}

export default LoginScreenTutor;

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
});
