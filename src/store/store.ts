import { configureStore } from "@reduxjs/toolkit";

import searchReducer from "./searchSlice";
import newsFilterReducer from "./newsFilterSlice";
import newsPreferencesReducer from "./newsPreferencesSlice";

export const store = configureStore({
  reducer: {
    newsFilter: newsFilterReducer,
    preferences: newsPreferencesReducer,
    search: searchReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
