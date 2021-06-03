import * as ActionTypes from './ActionTypes';
import * as StateTypes from '../types_store';
import { AppDispatch } from './store';


export const changeSelectedTutor = (tutor: StateTypes.TutorTypeStudent) => ({
	type: ActionTypes.CHANGE_SELECTED_TUTOR,
	payload: tutor,
});

export const toggleNavDrawerOpen = () => ({
	type: ActionTypes.TOGGLE_NAV_DRAWER_OPEN,
	payload: null,
});

export const toggleFilterDrawerOpen = () => ({
	type: ActionTypes.TOGGLE_FILTER_DRAWER_OPEN,
	payload: null,
});

