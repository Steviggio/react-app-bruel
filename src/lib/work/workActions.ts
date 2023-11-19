// // workActions.ts
// import { addWorkToAPI, deleteWorkFromAPI, fetchWorksFromAPI } from '../apiService';
// import { Work } from '../interfaces';
import { FETCH_WORKS, ADD_WORK, DELETE_WORK } from './workActionTypes';
import { Work } from "../interfaces";
import { getUserInfos, getToken } from "../common";
import { API_ROUTES } from '../../utils/constant';
import { Dispatch } from '@reduxjs/toolkit';

export const fetchWorksSuccess = (works: Work[]) => ({
  type: FETCH_WORKS,
  payload: works,
});

// apiService.ts
export const fetchWorksFromAPI = async () => {
  // Perform GET request to fetch works
  // Remember to handle the headers and authorization
  try {
    const authInfos = getUserInfos()
    const authToken = getToken()
    if (authInfos && authInfos.userId && authToken) {
      const userId = authInfos.userId;
      const token = authToken
      const response = await fetch(API_ROUTES.PROJECTS, {
        headers: {
          'Authorization': `Bearer ${token + " " + `userId:${userId}`}`,
          'Accept': '*/*'
        }
      });
      const works = await response.json();
      return works;
    } else {
      throw new Error('Authentication failed'); // Throw an error explicitly
    }
  } catch (error) {
    console.error('Error deleting work:', error);
    throw error; // Propagate the error
  }
}

// apiService.ts

export const deleteWorkFromAPI = async (id: number) => {
  try {
    const authInfos = getUserInfos();
    const authToken = getToken();

    if (authInfos && authInfos.userId && authToken) {
      const userId = authInfos.userId;
      const token = authToken;

      // Use userId and token for the DELETE request
      await fetch(`${API_ROUTES.PROJECTS}/${id}`, {
        method: 'DELETE',
        headers: {
          'Authorization': `Bearer ${token + " " + `userId:${userId}`}`,
          'Accept': '*/*'
        }
      });
    } else {
      throw new Error('Authentication failed'); // Throw an error explicitly
    }
  } catch (error) {
    console.error('Error deleting work:', error);
    throw error; // Propagate the error
  }
}

export const addWorkToAPI = async (newWork: Work) => {
  try {
    const authInfos = getUserInfos();
    const authToken = getToken();

    if (authInfos && authInfos.userId && authToken) {
      const userId = authInfos.userId;
      const token = authToken;

      // Use userId and token for the POST request
      const response = await fetch(API_ROUTES.PROJECTS, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${token + " " + `userId:${userId}`}`,
          'Accept': '*/*',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(newWork)
      });
      const addedWork = await response.json();
      return addedWork;
    } else {
      throw new Error('Authentication failed'); // Throw an error explicitly
    }
  } catch (error) {
    console.error('Error adding work:', error);
    throw error; // Propagate the error
  }
}
// workActions.ts

export const fetchWorks = () => async (dispatch: Dispatch<any>) => {
  try {
    const works: Work[] = await fetchWorksFromAPI();
    dispatch({ type: FETCH_WORKS, payload: works });
  } catch (error) {
    // Handle errors or dispatch an error action if needed
    console.error('Error fetching works:', error);
  }
};


export const addWork = (newWork: Work) => async (dispatch: any) => {
  try {
    const addedWork = await addWorkToAPI(newWork);
    dispatch({ type: ADD_WORK, payload: addedWork });
  } catch (error) {
    const err = error as Error;
    dispatch({ type: 'ADD_WORK_ERROR', payload: err.message || 'Failed to add work' });
    console.error('Error adding work:', err);
  }
};

export const deleteWork = (id: number) => async (dispatch: any) => {
  try {
    await deleteWorkFromAPI(id);
    dispatch({ type: DELETE_WORK, payload: id });
  } catch (error) {
    const err = error as Error;
    dispatch({ type: 'DELETE_WORK_ERROR', payload: err.message || 'Failed to delete work' });
    console.error('Error deleting work:', err);
  }
};

