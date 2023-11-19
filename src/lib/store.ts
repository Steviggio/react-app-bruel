// import { configureStore, combineReducers } from '@reduxjs/toolkit';
// import workReducer from './work/workReducer'; // Adjust the path as per your file structure
// import categoryReducer from './category/categoryReducer';

// const rootReducer = combineReducers({
//   works: workReducer,
//   categories: categoryReducer,
// });

// export type RootState = ReturnType<typeof rootReducer>;

// const store = configureStore({
//   reducer: {
//     works: workReducer,
//     categories: categoryReducer
//   }
// });

// export default store;

// store.ts
import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './rootReducer';

const store = configureStore({
  reducer: rootReducer,
});

export default store;
