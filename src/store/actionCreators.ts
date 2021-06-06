import * as ActionTypes from './ActionTypes';
import * as StateTypes from '../types_store';
import { baseURL } from '../shared/baseURL';
import { AppDispatch } from './store';
import { useAppDispatch } from '../hooks/reactReduxHooks';
import axios from 'axios';



export const toggleNavDrawerOpen = () => ({
	type: ActionTypes.TOGGLE_NAV_DRAWER_OPEN,
	payload: null,
});

export const toggleFilterDrawerOpen = () => ({
	type: ActionTypes.TOGGLE_FILTER_DRAWER_OPEN,
	payload: null,
});



// Tutor actions

export const addTutorsStudent = (tutors: StateTypes.TutorTypeStudent) => ({
	type: ActionTypes.ADD_TUTORS,
	payload: tutors,
})

export const fetchTutorsStudent = () => (dispatch) => {
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

export const fetchSelectedTutorStudent = (tutorID: number) => ( dispatch ) => {
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

