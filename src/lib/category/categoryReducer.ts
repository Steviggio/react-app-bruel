// categoryReducer.ts
import { CategorySchema } from '../interfaces';
import { FETCH_CATEGORIES } from './categoryActionTypes';

const initialState: CategorySchema[] = [];

const categoryReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case FETCH_CATEGORIES:
      return action.payload;
    // Handle other category actions if needed
    default:
      return state;
  }
};

export default categoryReducer;
