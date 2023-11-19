import { Work, WorkList } from "./interfaces";
import { API_ROUTES } from "../utils/constant";


// Generate filtered work / Having to arrays => work | categories --> check the categorie of the work
// and render / Only one call to store 
export default function filteredWork(work: Work[], category: number) {
  const filteredWork = work.filter((work) => {
    return work.categoryId === category
  })
  return filteredWork
};


export const isAuthTokenPresent = () => {
  const authToken = document.cookie.split(';').find(cookie => cookie.trim().startsWith('_auth='));
  return authToken !== undefined;
}

export const fetchWorks = async (): Promise<Work[]> => {
  try {
    const response = await fetch(API_ROUTES.PROJECTS)
    const projects = response.json()

    return projects
  } catch (error) {
    console.error("Error fetching projects: ", error);
    return []
  }
};

export const getUserInfos = () => {
  const authInfos = document.cookie.split(";").find(cookie => cookie.trim().startsWith("_auth_state="));

  if (authInfos) {

    // Get the userId value after the semicolon 
    //  need to use "=" sign to acces the value
    const authValue = authInfos.split('=')[1];

    // Displays the value of the stored cookie
    console.log("Cookie value:", authValue);
    try {

      // Displays the decode value in the console
      const decodedValue = decodeURIComponent(authValue);
      console.log("Decoded value:", decodedValue);

      // Displays the Json object extracted from the cookie
      const authObject = JSON.parse(decodedValue);
      console.log("Auth object:", authObject);

      return authObject;
    } catch (error) {
      // Displays errors from JSON parsing 
      console.error("Erreur lors du parsing JSON:", error);

      //  returns null if a JSON parsing error occur 
      return null;
    }
  }

  // Returns null if cookie not found or unvalid
  return null;
}


export const getToken = () => {
  const authCookie = document.cookie.split(";").find(cookie => cookie.trim().startsWith("_auth="));

  if (authCookie) {
    const token = authCookie.split('=')[1]; // Récupère la partie après le "="
    return token;
  }

  return null; // Retourne null si le cookie n'est pas trouvé ou n'est pas valide
}
