import { Work } from "./interfaces";
import { getUserInfos, getToken } from "./common";

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
      const response = await fetch('http://localhost:5678/api/works', {
        headers: {
          'Authorization': `Bearer ${token + " " + `userId:${userId}`}`,
          'Accept': '*/*'
        }
      });
      const works = await response.json();
      console.log()
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
      await fetch(`http://localhost:5678/api/works/${id}`, {
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
      const response = await fetch('http://localhost:5678/api/works', {
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

