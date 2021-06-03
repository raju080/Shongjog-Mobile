import * as ActionTypes from './ActionTypes';
import { TutorTypeStudent, StateTypeTutorStudent , GeneralActionType} from '../types_store';

import { tutors } from '../shared/tutors';

const initialState = {
	selectedTutor: null,
	tutors: tutors,
};

const tutorReducerStudent = (
	state: StateTypeTutorStudent = initialState,
	action: GeneralActionType
): StateTypeTutorStudent => {
	switch (action.type) {
		case ActionTypes.CHANGE_SELECTED_TUTOR:
			return { ...state, selectedTutor: action.payload };

		default:
			return state;
	}
};

export default tutorReducerStudent;
