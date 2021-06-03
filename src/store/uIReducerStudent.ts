import { Action } from 'redux';
import * as ActionTypes from './ActionTypes';
import {
	TutorTypeStudent,
	TutorStateTypeStudent,
	GeneralActionType,
	StateTypeUIStudent,
} from '../types_store';


const initialState: StateTypeUIStudent = {
	isNavDrawerOpen: false,
	isFilterDrawerOpen: false,
	selectedTutor: null,
};


const uIReducerStudent = (
	state: StateTypeUIStudent = initialState,
	action: GeneralActionType
) => {
	console.log('in UI reducer')
	console.log(action.type)
	switch (action.type) {
		case ActionTypes.CHANGE_CURRENT_TUTOR:
			return { ...state, selectedTutor: action.payload };

		case ActionTypes.TOGGLE_NAV_DRAWER_OPEN:
			return { ...state, isNavDrawerOpen: !state.isNavDrawerOpen };

		case ActionTypes.TOGGLE_FILTER_DRAWER_OPEN:
			return { ...state, isFilterDrawerOpen: !state.isFilterDrawerOpen };

		default:
			return state;
	}
};

export default uIReducerStudent;
