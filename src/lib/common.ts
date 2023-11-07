import axios from "axios";
import { API_ROUTES } from "../utils/constant";
import { User, Work } from "./interfaces";

export async function filterByCategory() {

}

export async function AddANewProject() {

}

export async function getWork() {
  try {
    const response = await axios({
      method: "GET",
      url: `${API_ROUTES.PROJECTS}`,
    });
  }
}

export async function deleteAProject() {

}

export async function logIn(email: string, password: string) {
  try {
    const response = await axios.post<User>(
      "http://localhost:5678/api/users/login",
      { email, password },
      {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      },
    );

    console.log(JSON.stringify(response));

    return response
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.log('error message: ', error.message);
      // 👇️ error: AxiosError<any, any>
      return error.message;
    } else {
      console.log('unexpected error: ', error);
      return 'An unexpected error occurred';
    }
  }
}

export async function displayModal() {

}


// 