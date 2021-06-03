import { createStore, combineReducers } from "redux";
import tutorReducer from "./tutorReducer";
import uIReducerStudent from "./uIReducerStudent";

const rootReducer = combineReducers({
  uiStudent: uIReducerStudent,
  tutor: tutorReducer,
});

const store = createStore(rootReducer);

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch

export default store;
