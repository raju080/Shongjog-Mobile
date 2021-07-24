import { TutorTypeStudent, TutorTypeTutor } from '../types_store';


export const tutor: TutorTypeTutor = {
	mobileNumber: '01853355578',
	name: 'Iqbal Hossain Raju',
	password: 'abc',
	email: 'iqbalhossainraju47@gmail.com',
	imageUri: 'https://highschooltutors.imgix.net/84323.jpg?auto=compress%2Cformat&facepad=2.5&fit=crop&h=300&w=300&s=22ae96449509f50aaf46cb5fc7ea2a0e',
	address: {
		district: 'Dhaka',
		area: 'Azimpur',
	},
	education: {
		university: 'BUET',
		department: 'CSE',
		levelOrYear: '4th',
		college: 'Notre Dame College, Dhaka'
	},
	preference: {
		gender: 'any',
		locations: [
			{
				district: 'dhaka', area: 'azimpur'
			},
		],
		schedule: {
		},
		tuitions: [
			{
				studentType: 'Bangla Version',
				studentClass: 'College 1st Year',
				subjects: ['Physics', 'Chemistry'],
				expectedMinRemuneration: 8000,
				expectedMaxRemuneration: 12000,
			}
		],
	},
	introText: 'Hello I am Asif the copper. Keep kopping.',
	introVideoLink: '',
	subjectVideoLinks: [],
	reviews: [],
}

export function getRandomInt(max: number, min = 0) {
    return Math.floor(Math.random() * (max - min)) + min;
}

export const requireTutorImage = (id: string) => {
	const n = getRandomInt(7);
	if (n%3 === 0) {
		return require('../assets/images/newasif.png');
	} else if (n%3 === 1) {
		return require('../assets/images/raju.jpg');
	} else if (n%3 === 2) {
		return require('../assets/images/newtushar.png');
	}
}
