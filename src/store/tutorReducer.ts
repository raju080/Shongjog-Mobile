import * as ActionTypes from './ActionTypes';
import { Tutor, TutorState, ChangeTutorAction } from '../StateTypes';

import { tutors } from '../shared/tutors';

const initialState = {
	currentTutor: tutors[0],
	tutors: tutors,
};

const tutorReducer = (
	state: TutorState = initialState,
	action: ChangeTutorAction
): TutorState => {
	switch (action.type) {
		case ActionTypes.CHANGE_CURRENT_TUTOR:
			return { ...state, currentTutor: action.payload };

		default:
			return state;
	}
};

export default tutorReducer;
