import { StyleSheet } from 'react-native';
import { COLORS } from '../../constants/Colors';

export const formStyles = StyleSheet.create({
	formGroup: {
		marginHorizontal: 20
	},
	formLabel: {
		fontSize: 14,
	},
	formInputProfile: {
		borderBottomWidth: 0.5,
		paddingVertical: 10,
		paddingHorizontal: 5,
		fontSize: 14,
		backgroundColor: '#ffffff',
	},
	formInput: {
		width: 340,
		// backgroundColor: 'rgba(255, 255,255,0.5)',
		borderWidth: 0.5,
		// borderBottomWidth: 1,
		borderRadius: 25,
		paddingHorizontal: 16,
		paddingVertical: 10,
		fontSize: 16,
		marginTop: 10,
		marginBottom: 20,
	},
	formSelect: {
		// marginVertical: 5,
		// marginHorizontal: 5,
	},
	formMultiSelect: {
		marginVertical: 10,
		minWidth: 300,
	},
	formSelectModal: {
		width: 300,
		borderWidth: 0.5,
		backgroundColor: COLORS.light,
		paddingHorizontal: 16,
		paddingVertical: 10,
		fontSize: 16,
		elevation: 7,
		marginTop: 10,
		marginBottom: 20,
	},
	formModalSelect: {
		width: 300,
		fontSize: 16,
		marginTop: 10,
		marginBottom: 20,
	},
});
