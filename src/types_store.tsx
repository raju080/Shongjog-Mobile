/**
 *  Tutor Reducer Types
 */

// data types
export interface Location {
	country: string;
	district: string;
	upazilla: string;
	area: string;
}

export interface AddressType extends Location {
	ward: number;
	postCode: number;
}

export type EducationQualificationType = {
	degree: string;
	institute: string;
	departmentOrGroup: string;
	passYear: number;
	levelOrYear: number;
	termOrSemester: number;
};

export type SubjectType = {
	id: string;
	name: string;
	medium: string;
	class: string;
};

// define availability later

export type PreferenceType = {
	gender: string;
	locations: Location[];
	subjects: SubjectType[];
	availability: any;
	remunerations: number[];
};


// student types

export type TutorTypeStudent = {
	id: number;
	name: string;
	imageUri: string;
	education: {
		college: string;
		version: string;
		university: string;
		department: string;
		levelOrYear: number;
	};
	preference: {
		gender: string;
		subjects: any;
		versions: any;
		availability: any | undefined;
		remunerations: any;
	};
	rating: number;
	introText: string;
	introVideoLink: string | undefined;
	subjectVideoLinks: { name: string; link: string }[] | undefined;
};


// tutor types

export type TutorTypeTutor = {
	mobile: number;
	name: string;
	email: string;
	imageUri: string;
	address: AddressType;
	education: EducationQualificationType[];
	preference: PreferenceType;
	introText: string;
	introVideoLink: string;
	subjectVideoLinks: { name: string; link: string }[];
};


// state types student
export type TutorStateTypeStudent = {
	currentTutor: TutorTypeStudent;
	tutors: TutorTypeStudent[];
};

// action types student
export type ChangeTutorActionTypeStudent = {
	type: string;
	payload: TutorTypeStudent;
};
