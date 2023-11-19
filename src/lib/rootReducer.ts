// rootReducer.ts
import { combineReducers } from '@reduxjs/toolkit';
import workReducer from './work/workSlice';
import categoryReducer from './category/categorySlice';

const rootReducer = combineReducers({
  works: workReducer,
  categories: categoryReducer,
});

export default rootReducer;
