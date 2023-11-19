// workSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Work } from '../interfaces';

interface WorksState {
  works: Work[];
  loading: boolean;
  error: string | null;
}

const initialState: WorksState = {
  works: [],
  loading: false,
  error: null,
};

const workSlice = createSlice({
  name: 'works',
  initialState,
  reducers: {
    fetchWorksStart(state) {
      state.loading = true;
      state.error = null;
    },
    fetchWorksSuccess(state, action: PayloadAction<Work[]>) {
      state.works = action.payload.slice(); // or use spread operator [...action.payload]
    },
    fetchWorksFailure(state, action: PayloadAction<string>) {
      state.loading = false;
      state.error = action.payload;
    },
    // Add more actions as needed (add, delete, update)
  },
});

export const {
  fetchWorksStart,
  fetchWorksSuccess,
  fetchWorksFailure,
  // Other actions from the slice
} = workSlice.actions;

export default workSlice.reducer;
