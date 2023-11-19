// categoryActions.ts
import { Dispatch } from 'redux';
import { CategorySchema } from '../interfaces';
import { FETCH_CATEGORIES } from './categoryActionTypes';

export const fetchCategories = () => async (dispatch: Dispatch) => {
  try {
    const response = await fetch('http://localhost:5678/api/categories');
    const categories: CategorySchema[] = await response.json();
    dispatch({ type: FETCH_CATEGORIES, payload: categories });
  } catch (error) {
    console.error('Error fetching categories:', error);
    // Handle errors or dispatch an error action
  }
};
// You might need other actions like addCategory, deleteCategory, etc.
