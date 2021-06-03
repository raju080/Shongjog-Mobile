import * as ActionTypes from './ActionTypes';
import { TutorTypeStudent, TutorStateTypeStudent, ChangeTutorActionTypeStudent } from '../types_store';

import { tutors } from '../shared/tutors';

const initialState = {
	currentTutor: tutors[0],
	tutors: tutors,
};

const tutorReducer = (
	state: TutorStateTypeStudent = initialState,
	action: ChangeTutorActionTypeStudent
): TutorStateTypeStudent => {
	switch (action.type) {
		case ActionTypes.CHANGE_CURRENT_TUTOR:
			return { ...state, currentTutor: action.payload };

		default:
			return state;
	}
};

export default tutorReducer;
