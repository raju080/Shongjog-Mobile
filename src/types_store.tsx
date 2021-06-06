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
	userId: number;
	verified: boolean;
	enabled: boolean;
	name: string;
	gender: string;
	imageUri: string;
	// education: {
	// 	college: string;
	// 	version: string;
	// 	university: string;
	// 	department: string;
	// 	levelOrYear: number;
	// };
	ugInstitute: string;
	ugDepartment: string;
	// preference: {
	// 	gender: string;
	// 	subjects: any;
	// 	versions: any;
	// 	availability: any | undefined;
	// 	remunerations: any;
	// };
	rating: number;
	// introText: string;
	// introVideoLink: string | undefined;
	// subjectVideoLinks: { name: string; link: string }[] | undefined;
};

export type TutorEQ = {
    degree: string;
    medium?: string;
    department?: string;
    group?: string;
    institute: string;
    level?: number;
    term?: number;
}

export type VideoLink = {
    title: string;
    subject: string;
    videoLink: string;
}

export type Schedule = {
	saturday?: string[];
    sunday?: string[];
    monday?: string[];
    tuesday?: string[];
    wednesday?: string[];
    thursday?: string[];
    friday?: string[];
}

export type Remuneration = {
	type: string;
    subjects: string[];
    from: number;
    to: number;
}
export type Preference = {
	gender: string;
    country: string;
    district: string;
    areas: string[];
    schedule: Schedule;
    remunerations: Remuneration[];
}

export type TutorDetailsTypeStudent = {
	userId: string;
    enabled: boolean;
    verified: boolean;
    name: string;
    gender: string;
    profilePicture: string;
    rating: number;
    educationQualifications: TutorEQ[];
    introVideoLink?: string;
    demoVideoLinks?: VideoLink[];
    introText?: string;
    preference: Preference;
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
export type StateTypeTutorStudent = {
	selectedTutor: TutorDetailsTypeStudent | null;
	tutors: TutorTypeStudent[];
};

export type StateTypeUIStudent = {
	isNavDrawerOpen: boolean;
	isFilterDrawerOpen: boolean;
};

// action types student
export type GeneralActionType = {
	type: string;
	payload: any;
};
