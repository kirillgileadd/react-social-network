import { configureStore } from '@reduxjs/toolkit';
import {postsReducer} from "./reducers/posts";

export const store = configureStore({
  reducer: {
    posts: postsReducer,
  },
});
