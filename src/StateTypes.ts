/**
 *  Tutor Reducer Types
 */

// data types
export type Tutor = {
	id: number;
	name: string;
	imageUri: string;
	university: string;
	department: string;
	location: string;
	tuitionFees: {
		college: number;
		school: number;
	};
};

// state type
export type TutorState = {
	currentTutor: Tutor;
	tutors: Tutor[];
};

// action types
export type ChangeTutorAction = {
	type: string;
	payload: Tutor;
};
