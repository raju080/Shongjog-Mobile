import * as ActionTypes from '../ActionTypes';
import { TutorTypeStudent, StateTypeTutorStudent , GeneralActionType} from '../../types_store';


const initialState = {
	selectedTutor: null,
	tutors: [],
};

const tutorReducerStudent = (
	state: StateTypeTutorStudent = initialState,
	action: GeneralActionType
): StateTypeTutorStudent => {
	switch (action.type) {
		case ActionTypes.CHANGE_SELECTED_TUTOR:
			return { ...state, selectedTutor: action.payload };

		case ActionTypes.ADD_TUTORS: 
			return { ...state, tutors: action.payload }

		default:
			return state;
	}
};

export default tutorReducerStudent;