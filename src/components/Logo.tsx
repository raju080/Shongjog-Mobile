import React, { Component } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

const Logo = () => {
		return (
			<View style={styles.container}>
				<Image
					style={{ width: 70, height: 100 }}
					source={require('../assets/images/logo2.png')}
				/>
				<Text style={styles.logoText}>Welcome to Shongjog</Text>
			</View>
		);
}

export default Logo;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
	logoText: {
		fontSize: 28,
    fontWeight: '500',
		color: '#1c313a',
	},
});
