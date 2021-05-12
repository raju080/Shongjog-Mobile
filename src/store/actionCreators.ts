import * as ActionTypes from './ActionTypes';
import * as StateTypes from '../StateTypes';
import { AppDispatch } from './store';

import { Dispatch } from 'redux';

export const changeCurrentTutor = (tutor: StateTypes.Tutor) => ({
	type: ActionTypes.CHANGE_CURRENT_TUTOR,
	payload: tutor,
});

