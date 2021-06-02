import * as ActionTypes from './ActionTypes';
import * as StateTypes from '../types_store';
import { AppDispatch } from './store';

import { Dispatch } from 'redux';

export const changeCurrentTutor = (tutor: StateTypes.TutorType) => ({
	type: ActionTypes.CHANGE_CURRENT_TUTOR,
	payload: tutor,
});

