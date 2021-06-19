import * as ActionTypes from '../ActionTypes';
import {
	TutorTypeTutor,
  StateTypeTutor,
	GeneralActionType,
} from '../../types_store';

import { tutor } from '../../shared/tutors';

const initialState = {
	tutor: tutor,
};

const tutorReducerTutor = (
	state: StateTypeTutor = initialState,
	action: GeneralActionType
): StateTypeTutor => {
	switch (action.type) {
		case ActionTypes.ADD_REGISTERED_TUTOR:
			return { ...state, tutor: action.payload };

		default:
			return state;
	}
};

export default tutorReducerTutor;
