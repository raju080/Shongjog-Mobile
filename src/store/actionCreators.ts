import * as ActionTypes from './ActionTypes';
import * as StateTypes from '../types_store';
import { baseURL } from '../shared/baseURL';
import { AppDispatch } from './store';
import { useAppDispatch } from '../hooks/reactReduxHooks';
import axios from 'axios';

import { Action, ActionCreator, Dispatch } from 'redux';
import { ThunkAction, ThunkDispatch } from 'redux-thunk';

import * as apiURLs from '../shared/apiURLs';

// 
// Student side actions
// 


// UI actions

export const toggleNavDrawerOpen = () => ({
	type: ActionTypes.TOGGLE_NAV_DRAWER_OPEN,
	payload: null,
});

export const toggleFilterDrawerOpen = () => ({
	type: ActionTypes.TOGGLE_FILTER_DRAWER_OPEN,
	payload: null,
});

export const loginStudent = () => {

}

export const logoutStudent = () => {

};


export const registerStudent = () => {

}



// Other actions

export const addTutorsStudent = (tutors: StateTypes.TutorTypeStudent) => ({
	type: ActionTypes.ADD_TUTORS,
	payload: tutors,
})

export const fetchTutorsStudent = () => (dispatch: Dispatch) => {
	// const dispatch = useAppDispatch();
	console.log('fetching tutors')

	return axios({
		method: 'GET',
		url: '/tutors',
		baseURL: baseURL,
	})
		.then(
			(response) => {
				console.log('response get')
				if (response && response.status === 200) {
					return response.data;
				} else {
					let error = new Error(
						'Error ' + response.status + ': ' + response.statusText
					);
					throw error;
				}
			},
			(error) => {
				throw error;
			}
		)
		.then((response) => {
			console.log('Response : ')
			console.log(response.results)
			response.results.imageUri = ''

			dispatch(addTutorsStudent(response.results));
		})
		.catch((error) => {
			console.log('error : ')
			console.log(error)
		});	
}

export const changeSelectedTutor = (tutor: StateTypes.TutorDetailsTypeStudent) => ({
	type: ActionTypes.CHANGE_SELECTED_TUTOR,
	payload: tutor,
});

export const addSelectedTutor = (tutor: StateTypes.TutorTypeStudent) => ({
	type: ActionTypes.ADD_NEW_TUTOR
})

export const fetchSelectedTutorStudent = (tutorID: number) => ( dispatch: Dispatch ) => {
	// const dispatch = useAppDispatch();

	return axios({
		method: 'GET',
		url: '/tutors/' + tutorID,
		baseURL: baseURL,
	})
		.then(
			(response) => {
				if (response && response.status === 200) {
					return response.data;
				} else {
					let error = new Error(
						'Error ' + response.status + ': ' + response.statusText
					);
					throw error;
				}
			},
			(error) => {
				throw error;
			}
		)
		.then((response) => {
			console.log('Response : ');
			console.log(response);
			dispatch(changeSelectedTutor(response))
		})
		.catch((error) => {
			console.log('error : ');
			console.log(error);
		});	
}


export const filterTutorStudent =
	(fields: any) => (dispatch: Dispatch) => {
		// const dispatch = useAppDispatch();

		return axios({
			method: 'GET',
			url: apiURLs.filterURL,
			params: fields,
			baseURL: baseURL,
		})
			.then(
				(response) => {
					if (response && response.status === 200) {
						return response.data;
					} else {
						let error = new Error(
							'Error ' + response.status + ': ' + response.statusText
						);
						throw error;
					}
				},
				(error) => {
					throw error;
				}
			)
			.then((response) => {
				console.log('Response : ');
				console.log(response);
				response.results.imageUri = '';
				dispatch(addTutorsStudent(response.results));
			})
			.catch((error) => {
				console.log('error : ');
				console.log(error);
			});
	};








// 
// Tutor side actions
// 


// UI actions

export const loginTutor = (fields: any) => (dispatch: Dispatch) => {
	return axios({
		method: 'POST',
		url: apiURLs.loginURL,
		data: fields,
		baseURL: baseURL,
	})
		.then(
			(response) => {
				if (response && response.status === 200) {
					return response.data;
				} else {
					let error = new Error(
						'Error ' + response.status + ': ' + response.statusText
					);
					throw error;
				}
			},
			(error) => {
				throw error;
			}
		)
		.then((response) => {
			console.log('Response : ');
			console.log(response);
			dispatch(changeSelectedTutor(response));
		})
		.catch((error) => {
			console.log('error : ');
			console.log(error);
		});
};

export const logoutTutor = () => {};


// Tutor reducer

export const addRegisteredTutor = (tutor: StateTypes.TutorTypeTutor) => ({
	action: ActionTypes.ADD_REGISTERED_TUTOR,
	payload: tutor
})


export const registerTutor =
	(fields: any) => (dispatch: Dispatch) => {
		// const dispatch = useAppDispatch();

		return axios({
			method: 'POST',
			url: apiURLs.userURL,
			data: fields,
			baseURL: baseURL,
		})
			.then(
				(response) => {
					if (response && response.status === 200) {
						return response.data;
					} else {
						let error = new Error(
							'Error ' + response.status + ': ' + response.statusText
						);
						throw error;
					}
				},
				(error) => {
					throw error;
				}
			)
			.then((response) => {
				console.log('Response : ');
				console.log(response);
				// dispatch(changeSelectedTutor(response));
			})
			.catch((error) => {
				console.log('error : ');
				console.log(error);
			});
	};



export const fetchRegisteredTutor =
	(tutorID: number) => (dispatch: Dispatch) => {
		// const dispatch = useAppDispatch();

		return axios({
			method: 'GET',
			url: '/tutors/' + tutorID,
			baseURL: baseURL,
		})
			.then(
				(response) => {
					if (response && response.status === 200) {
						return response.data;
					} else {
						let error = new Error(
							'Error ' + response.status + ': ' + response.statusText
						);
						throw error;
					}
				},
				(error) => {
					throw error;
				}
			)
			.then((response) => {
				console.log('Response : ');
				console.log(response);
				dispatch(changeSelectedTutor(response));
			})
			.catch((error) => {
				console.log('error : ');
				console.log(error);
			});
	};