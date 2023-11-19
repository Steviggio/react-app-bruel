// categorySlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { CategorySchema } from '../interfaces';

interface CategoriesState {
  categories: CategorySchema[];
  loading: boolean;
  error: string | null;
}

const initialState: CategoriesState = {
  categories: [],
  loading: false,
  error: null,
};

const categorySlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {
    fetchCategoriesStart(state) {
      state.loading = true;
      state.error = null;
    },
    fetchCategoriesSuccess(state, action: PayloadAction<CategorySchema[]>) {
      state.loading = false;
      state.categories = action.payload;
    },
    fetchCategoriesFailure(state, action: PayloadAction<string>) {
      state.loading = false;
      state.error = action.payload;
    },
    // Add more actions as needed (add, delete, update)
  },
});

export const {
  fetchCategoriesStart,
  fetchCategoriesSuccess,
  fetchCategoriesFailure,
  // Other actions from the slice
} = categorySlice.actions;

export default categorySlice.reducer;
