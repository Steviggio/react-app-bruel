// workReducer.ts
import { Work } from '../interfaces';
import { FETCH_WORKS, ADD_WORK, DELETE_WORK } from './workActionTypes';

const initialState: Work[] = [];

const workReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case FETCH_WORKS:
      // Handle fetching works from the API
      // This should be performed in a middleware like Redux Thunk or Redux Saga
      // Update the state with the fetched works
      return action.payload;

    case ADD_WORK:
      // Add new work to the state
      return [...state, action.payload];

    case DELETE_WORK:
      // Remove work by ID from the state
      return state.filter(work => work.id !== action.payload);

    default:
      return state;
  }
};

export default workReducer;
