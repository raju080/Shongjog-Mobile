import { Action, ActionCreator, Dispatch } from 'redux';
import { ThunkAction, ThunkDispatch } from 'redux-thunk';

/**
 *  Tutor Reducer Types
 */

// data types
export interface Location {
	// country: string;
	district: string;
	area: string;
}

export interface AddressType extends Location {
	ward: number;
	postCode: number;
}

// export type EducationQualificationType = {
// 	degree: string;
// 	institute: string;
// 	departmentOrGroup: string;
// 	passYear: number;
// 	levelOrYear: number;
// 	termOrSemester: number;
// };

export type EducationQualificationType = {
	university: string;
	department: string;
	levelOrYear: string;
	college: string;
};

// export type SubjectType = {
// 	id: string;
// 	name: string;
// 	medium: string;
// 	class: string;
// };

export type TuitionType = {
	studentType: string;
	studentClass: string;
	subjects: string[];
	expectedMinRemuneration: number;
	expectedMaxRemuneration: number;
};

// define availability later

export type PreferenceType = {
	gender: string;
	locations: Location[];
	tuitions: TuitionType[];
	schedule: Schedule;
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
};

export type VideoLink = {
	title: string;
	subject: string;
	videoLink: string;
};

export type Schedule = {
	saturday?: string[];
	sunday?: string[];
	monday?: string[];
	tuesday?: string[];
	wednesday?: string[];
	thursday?: string[];
	friday?: string[];
};

export type Remuneration = {
	type: string;
	subjects: string[];
	from: number;
	to: number;
};
export type Preference = {
	gender: string;
	country: string;
	district: string;
	areas: string[];
	schedule: Schedule;
	remunerations: Remuneration[];
};

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

type ReviewType = {
	studentId: string;
	studentName: string;
	rating: number;
	reviewText: string;
	date: string;
}

export type TutorTypeTutor = {
	mobile: string;
	name: string;
	email: string;
	password: string;
	imageUri: string;
	address: Location;
	education: EducationQualificationType;
	preference: PreferenceType;
	introText: string;
	introVideoLink: string;
	subjectVideoLinks: { name: string; link: string }[];
	reviews: ReviewType[];
};

// state types student
export type StateTypeTutorStudent = {
	selectedTutor: TutorDetailsTypeStudent | null;
	tutors: TutorTypeStudent[];
};

export type StateTypeUIStudent = {
	isNavDrawerOpen: boolean;
	isFilterDrawerOpen: boolean;
	isLoggedIn: boolean;
};


// state types student
export type StateTypeTutor = {
	tutor: TutorTypeTutor;
};

export type StateTypeUITutor = {
	isNavDrawerOpen: boolean;
	isLoggedIn: boolean;
};


// action types student
export type GeneralActionType = {
	type: string;
	payload: any;
};

export type ThunkActionType = (dispatch: Dispatch) => ({
	type: string;
	payload: any;
});

// Redux action
// const reduxAction: ActionCreator<Action> = (text: string) => {
// 	return {
// 		type: SET_TEXT,
// 		text,
// 	};
// };

// Redux-Thunk action
// const thunkAction: ActionCreator<ThunkAction<Action, IState, void>> = (
// 	text: string
// ) => {
// 	return (dispatch: Dispatch<IState>): Action => {
// 		return dispatch({
// 			type: SET_TEXT,
// 			text,
// 		});
// 	};
// };

// Async Redux-Thunk action
// const asyncThinkAction: ActionCreator<
// 	ThunkAction<Promise<Action>, IState, void>
// > = () => {
// 	return async (dispatch: Dispatch<IState>): Promise<Action> => {
// 		try {
// 			const text = await Api.call();
// 			return dispatch({
// 				type: SET_TEXT,
// 				text,
// 			});
// 		} catch (e) {}
// 	};
// };
