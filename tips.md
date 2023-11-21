### React Reducer : 

For the work array containing every projects after the fetch to the API url. The reducer could handle the differents requests of the project list. 

```js 
import {useReducer} from "react";

function reducer(state, action) {
  if (action.type === "delete_a_project") {
    fetch(API_ROUTES.PROJECTS)
  }
}

```


```js
const initialState = {
  loading: true,
  error: "",
  post: {}
}

const reducer = (state, action) {
  switch (action.type) {
    case "FETCH_SUCCESS": 
      return {
        loading: false,
        post: action.payload,
        error: ""
      }
    case "FETCH_ERROR": {
      return {
        loading: false,
        post: {},
        error: "Something went wrong"
      }
    default:
      return state
    }
  }
}
```


### Updater :


To update a state, you should use an updater to re-new it's state just like in the following example : 

```js 
function handleClick() {
  setAge(a => a + 1); // setAge(42 => 43)
  setAge(a => a + 1); // setAge(43 => 44)
  setAge(a => a + 1); // setAge(44 => 45)
}
```