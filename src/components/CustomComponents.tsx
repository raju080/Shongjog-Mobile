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

let BUTTON_WIDTH: number = 300;
let BUTTON_FONT_SIZE: number = 18;
let BUTTON_VERTICAL_PADDING: number = 14;
let BUTTON_BG_COLOR: string = '#1c313a';

type CustomButtonProps = {
  onPress: any;
  text: string;
  height?: number;
	width?: number;
	bgColor?: string;
}

export const CustomButton = ({ text, onPress, height, width, bgColor }: CustomButtonProps) => {
	if (height) {
		BUTTON_VERTICAL_PADDING = (height-BUTTON_FONT_SIZE)/2;
	}
	if (width) {
		BUTTON_WIDTH = width;
	}
	if (bgColor) {
		BUTTON_BG_COLOR = bgColor
	}

  return (
		<TouchableOpacity
			style={{
				width: BUTTON_WIDTH,
				backgroundColor: BUTTON_BG_COLOR,
				borderRadius: 25,
				paddingVertical: BUTTON_VERTICAL_PADDING,
			}}
			onPress={onPress}
		>
			<Text style={buttonStyles.buttonText}>{text}</Text>
		</TouchableOpacity>
	);
}

const buttonStyles = StyleSheet.create({
	button: {
		width: BUTTON_WIDTH,
		backgroundColor: '#1c313a',
		borderRadius: 25,
		paddingVertical: BUTTON_VERTICAL_PADDING,
	},
	buttonText: {
		fontSize: BUTTON_FONT_SIZE,
		fontWeight: '500',
		color: '#ffffff',
		textAlign: 'center',
	},
});




