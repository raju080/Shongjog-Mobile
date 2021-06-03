import { createStore, combineReducers } from "redux";
import tutorReducerStudent from "./tutorReducerStudent";
import uIReducerStudent from "./uIReducerStudent";

const rootReducer = combineReducers({
  uiStudent: uIReducerStudent,
  tutor: tutorReducerStudent,
});

const store = createStore(rootReducer);

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch

export default store;
