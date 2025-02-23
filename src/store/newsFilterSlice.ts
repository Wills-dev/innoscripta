import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface NewsFilterState {
  category: string | null;
  source: string | null;
  date: string | null;
}

const initialState: NewsFilterState = {
  category: null,
  source: null,
  date: null,
};

const newsFilterSlice = createSlice({
  name: "newsFilter",
  initialState,
  reducers: {
    setCategory: (state, action: PayloadAction<string | null>) => {
      state.category = action.payload;
    },
    setSource: (state, action: PayloadAction<string | null>) => {
      state.source = action.payload;
    },
    setDate: (state, action: PayloadAction<string | null>) => {
      state.date = action.payload;
    },
    resetFilters: () => initialState,
  },
});

export const { setCategory, setSource, setDate, resetFilters } =
  newsFilterSlice.actions;
export default newsFilterSlice.reducer;
