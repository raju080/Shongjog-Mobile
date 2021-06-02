import { TutorTypeStudent } from '../types_store';


export const tutors: TutorTypeStudent[] = [
	{
		id: 0,
		name: 'Asif Ahmed',
		imageUri:
			'https://highschooltutors.imgix.net/84323.jpg?auto=compress%2Cformat&facepad=2.5&fit=crop&h=300&w=300&s=22ae96449509f50aaf46cb5fc7ea2a0e',
		education: {
			college: 'Government Science College, Dhaka',
			version: 'Bangla',
			university: 'BUET',
			department: 'CSE',
			levelOrYear: 4,
		},
		preference: {
			gender: 'M',
			subjects: {
				hsc: ['physics', 'chemistry', 'mathematics'],
				ssc: ['physics', 'chemistry', 'mathematics'],
			},
			versions: ['english', 'bangla'],
			availability: '',
			remunerations: {
				hsc: { from: 10000, to: 12000 },
				ssc: { from: 8000, to: 10000 },
			},
		},
		rating: 5,
		introText:
			"Hello I'm Asif the copper. Tuition is my passion. And money is my motivation. Hire me if you wanna cop in BUET like me.",
		introVideoLink: '',
		subjectVideoLinks: [],
	},
	{
		id: 1,
		name: 'Iqbal Hossain Raju',
		imageUri:
			'https://highschooltutors.imgix.net/84323.jpg?auto=compress%2Cformat&facepad=2.5&fit=crop&h=300&w=300&s=22ae96449509f50aaf46cb5fc7ea2a0e',
		education: {
			college: 'Notre Dame College, Dhaka',
			version: 'Bangla',
			university: 'BUET',
			department: 'CSE',
			levelOrYear: 4,
		},
		preference: {
			gender: 'M',
			subjects: {
				hsc: ['physics', 'chemistry', 'mathematics'],
				ssc: ['physics', 'chemistry', 'mathematics'],
			},
			versions: ['english', 'bangla'],
			availability: '',
			remunerations: {
				hsc: 12000,
			},
		},
		rating: 4,
		introText: "Hello I'm Asif the copper. Hire me",
		introVideoLink: '',
		subjectVideoLinks: [],
	},
	{
		id: 2,
		name: 'Abdur Rashid Tushar',
		imageUri:
			'https://highschooltutors.imgix.net/84323.jpg?auto=compress%2Cformat&facepad=2.5&fit=crop&h=300&w=300&s=22ae96449509f50aaf46cb5fc7ea2a0e',
		education: {
			college: 'Notre Dame College, Dhaka',
			version: 'Bangla',
			university: 'BUET',
			department: 'CSE',
			levelOrYear: 4,
		},
		preference: {
			gender: 'M',
			subjects: {
				hsc: ['physics', 'chemistry', 'mathematics'],
				ssc: ['physics', 'chemistry', 'mathematics'],
			},
			versions: ['english', 'bangla'],
			availability: '',
			remunerations: {
				hsc: 12000,
			},
		},
		rating: 4.5,
		introText: "Hello I'm Asif the copper. Hire me",
		introVideoLink: '',
		subjectVideoLinks: [],
	},
	{
		id: 0,
		name: 'Asif Ahmed',
		imageUri:
			'https://highschooltutors.imgix.net/84323.jpg?auto=compress%2Cformat&facepad=2.5&fit=crop&h=300&w=300&s=22ae96449509f50aaf46cb5fc7ea2a0e',
		education: {
			college: 'Government Science College, Dhaka',
			version: 'Bangla',
			university: 'BUET',
			department: 'CSE',
			levelOrYear: 4,
		},
		preference: {
			gender: 'M',
			subjects: {
				hsc: ['physics', 'chemistry', 'mathematics'],
				ssc: ['physics', 'chemistry', 'mathematics'],
			},
			versions: ['english', 'bangla'],
			availability: '',
			remunerations: {
				hsc: { from: 10000, to: 12000 },
				ssc: { from: 8000, to: 10000 },
			},
		},
		rating: 5,
		introText:
			"Hello I'm Asif the copper. Tuition is my passion. And money is my motivation. Hire me if you wanna cop in BUET like me.",
		introVideoLink: '',
		subjectVideoLinks: [],
	},
	{
		id: 1,
		name: 'Iqbal Hossain Raju',
		imageUri:
			'https://highschooltutors.imgix.net/84323.jpg?auto=compress%2Cformat&facepad=2.5&fit=crop&h=300&w=300&s=22ae96449509f50aaf46cb5fc7ea2a0e',
		education: {
			college: 'Notre Dame College, Dhaka',
			version: 'Bangla',
			university: 'BUET',
			department: 'CSE',
			levelOrYear: 4,
		},
		preference: {
			gender: 'M',
			subjects: {
				hsc: ['physics', 'chemistry', 'mathematics'],
				ssc: ['physics', 'chemistry', 'mathematics'],
			},
			versions: ['english', 'bangla'],
			availability: '',
			remunerations: {
				hsc: 12000,
			},
		},
		rating: 4,
		introText: "Hello I'm Asif the copper. Hire me",
		introVideoLink: '',
		subjectVideoLinks: [],
	},
	{
		id: 2,
		name: 'Abdur Rashid Tushar',
		imageUri:
			'https://highschooltutors.imgix.net/84323.jpg?auto=compress%2Cformat&facepad=2.5&fit=crop&h=300&w=300&s=22ae96449509f50aaf46cb5fc7ea2a0e',
		education: {
			college: 'Notre Dame College, Dhaka',
			version: 'Bangla',
			university: 'BUET',
			department: 'CSE',
			levelOrYear: 4,
		},
		preference: {
			gender: 'M',
			subjects: {
				hsc: ['physics', 'chemistry', 'mathematics'],
				ssc: ['physics', 'chemistry', 'mathematics'],
			},
			versions: ['english', 'bangla'],
			availability: '',
			remunerations: {
				hsc: 12000,
			},
		},
		rating: 4.5,
		introText: "Hello I'm Asif the copper. Hire me",
		introVideoLink: '',
		subjectVideoLinks: [],
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
