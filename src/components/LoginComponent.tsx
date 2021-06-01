import React from 'react';
import { StyleSheet, Text, View } from 'react-native';


const LoginComponent = () => {
  return (
    <View style={styles.container}>
      <Text>Login Component</Text>
    </View>
  )
}

export default LoginComponent;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
	},
});
