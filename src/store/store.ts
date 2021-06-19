import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from 'redux-thunk';

import tutorReducerStudent from "./student/tutorReducerStudent";
import uIReducerStudent from './student/uIReducerStudent';
import tutorReducerTutor from "./tutor/tutorReducerTutor";

const rootReducer = combineReducers({
  uiStudent: uIReducerStudent,
  tutorStudent: tutorReducerStudent,
  tutorTutor: tutorReducerTutor,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch

export default store;
