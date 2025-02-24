import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface NewsFilterState {
  filteredCategories: string[];
  filteredSources: string[];
  date: string | null;
}

const initialState: NewsFilterState = {
  filteredCategories: [],
  filteredSources: [],
  date: null,
};

const newsFilterSlice = createSlice({
  name: "newsFilter",
  initialState,
  reducers: {
    setFilter: (
      state,
      action: PayloadAction<Omit<NewsFilterState, "date">>
    ) => {
      state.filteredCategories = action.payload.filteredCategories;
      state.filteredSources = action.payload.filteredSources;
    },
    setDate: (state, action: PayloadAction<string | null>) => {
      state.date = action.payload;
    },
    clearFilter: () => initialState,
  },
});

export const { setFilter, setDate, clearFilter } = newsFilterSlice.actions;
export default newsFilterSlice.reducer;
