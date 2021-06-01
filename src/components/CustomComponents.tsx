import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';




// 
// Component: Custom Input
// 
// export const CustomInput = (field) => {
//   const {
//     meta: { touched, error },
//     label,
//     secureTextEntry,
//     maxLength,
//     keyboardType,
//     placeholder,
//     input: { onChange, ...restInput },
//   } = field;
//   return (
//     <View>
//       <InputText
//         onChangeText={onChange}
//         maxLength={maxLength}
//         placeholder={placeholder}
//         keyboardType={keyboardType}
//         secureTextEntry={secureTextEntry}
//         label={label}
//         {...restInput}
//       />
//       {touched && error && <Text style={styles.errorText}>{error}</Text>}
//     </View>
//   );
// }


// 
// Component: Custom Button
// 

type CustomButtonProps = {
  onPress: () => void;
  text: string;
  styleProp: {}
}

export const CustomButton = ({ text, onPress, styleProp }: CustomButtonProps) => {
  return (
		<View style={styleProp}>
			<TouchableOpacity style={buttonStyles.button} onPress={onPress}>
				<Text style={buttonStyles.buttonText}>{text}</Text>
			</TouchableOpacity>
		</View>
	);
}

const buttonStyles = StyleSheet.create({
	button: {
		width: 300,
		backgroundColor: '#1c313a',
		borderRadius: 25,
		paddingVertical: 15,
	},
	buttonText: {
		fontSize: 18,
		fontWeight: '500',
		color: '#ffffff',
		textAlign: 'center',
	},
});




