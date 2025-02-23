import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface PreferencesState {
  preferredCategories: string[];
  preferredSources: string[];
  preferredAuthors: string[];
}

const initialState: PreferencesState = {
  preferredCategories: [],
  preferredSources: [],
  preferredAuthors: [],
};

const newsPreferencesSlice = createSlice({
  name: "preferences",
  initialState,
  reducers: {
    setPreferences: (state, action: PayloadAction<PreferencesState>) => {
      state.preferredCategories = action.payload.preferredCategories;
      state.preferredSources = action.payload.preferredSources;
      state.preferredAuthors = action.payload.preferredAuthors;
    },
    clearPreference: () => initialState,
  },
});

export const { setPreferences, clearPreference } = newsPreferencesSlice.actions;
export default newsPreferencesSlice.reducer;
