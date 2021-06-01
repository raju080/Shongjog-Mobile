import { Tutor } from '../types_store';


export const tutors: Tutor[] = [
	{
		id: 0,
		name: 'Asif Ahmed',
		imageUri:
			'https://highschooltutors.imgix.net/84323.jpg?auto=compress%2Cformat&facepad=2.5&fit=crop&h=300&w=300&s=22ae96449509f50aaf46cb5fc7ea2a0e',
		university: 'BUET',
		department: 'CSE',
		location: 'Azimpur, Dhaka',
		tuitionFees: {
			college: 10000,
			school: 8000,
		},
	},
	{
		id: 1,
		name: 'Iqbal Hossain',
		imageUri:
			'https://highschooltutors.imgix.net/84323.jpg?auto=compress%2Cformat&facepad=2.5&fit=crop&h=300&w=300&s=22ae96449509f50aaf46cb5fc7ea2a0e',
		university: 'BUET',
		department: 'CSE',
		location: 'Azimpur, Dhaka',
		tuitionFees: {
			college: 10000,
			school: 8000,
		},
	},
	{
		id: 2,
		name: 'Abdur Rashid',
		imageUri:
			'https://highschooltutors.imgix.net/84323.jpg?auto=compress%2Cformat&facepad=2.5&fit=crop&h=300&w=300&s=22ae96449509f50aaf46cb5fc7ea2a0e',
		university: 'BUET',
		department: 'CSE',
		location: 'Azimpur, Dhaka',
		tuitionFees: {
			college: 10000,
			school: 8000,
		},
	},
	{
		id: 3,
		name: 'Asif Ahmed',
		imageUri:
			'https://highschooltutors.imgix.net/84323.jpg?auto=compress%2Cformat&facepad=2.5&fit=crop&h=300&w=300&s=22ae96449509f50aaf46cb5fc7ea2a0e',
		university: 'BUET',
		department: 'CSE',
		location: 'Azimpur, Dhaka',
		tuitionFees: {
			college: 10000,
			school: 8000,
		},
	},
	{
		id: 4,
		name: 'Iqbal Hossain',
		imageUri:
			'https://highschooltutors.imgix.net/84323.jpg?auto=compress%2Cformat&facepad=2.5&fit=crop&h=300&w=300&s=22ae96449509f50aaf46cb5fc7ea2a0e',
		university: 'BUET',
		department: 'CSE',
		location: 'Azimpur, Dhaka',
		tuitionFees: {
			college: 10000,
			school: 8000,
		},
	},
	{
		id: 5,
		name: 'Abdur Rashid',
		imageUri:
			'https://highschooltutors.imgix.net/84323.jpg?auto=compress%2Cformat&facepad=2.5&fit=crop&h=300&w=300&s=22ae96449509f50aaf46cb5fc7ea2a0e',
		university: 'BUET',
		department: 'CSE',
		location: 'Azimpur, Dhaka',
		tuitionFees: {
			college: 10000,
			school: 8000,
		},
	},
];


export const requireTutorImage = (id: number) => {
	if (id%3 === 0) {
		return require('../assets/images/newasif.png');
	} else if (id%3 === 1) {
		return require('../assets/images/raju.jpg');
	} else if (id%3 === 2) {
		return require('../assets/images/newtushar.png');
	}
}
