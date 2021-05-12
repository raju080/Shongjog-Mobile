import { createStore, combineReducers } from "redux";
import tutorReducer from "./tutorReducer";

const rootReducer = combineReducers({
  tutor: tutorReducer,
});

const store = createStore(rootReducer);

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch

export default store;
