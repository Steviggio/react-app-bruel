import { Work } from "./interfaces";
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

export const fetchWorks = (): Promise<Work[]> => {
  return fetch(API_ROUTES.PROJECTS).then(response => response.json());
};
