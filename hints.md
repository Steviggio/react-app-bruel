## Hint List for issues encountered during the project 


Use a React componenent as a children : 

An interface is required for TypeScript to accept the children properties.

```ts
export interface LayoutProps {
  children: ReactNode;
}
```

Those props need to be used for the children setting inside your component.

```ts
import { LayoutProps } from "../config/Types/interfaces";

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  )
}
```

Then, you have the possibility to wrap another component inside your Layout component to display it's content as the children props.

```ts
import Layout from './Layout/Layout'
import Homepage from './Pages/Homepage'

function App() {
  return (
    <>
      <Layout>
        <Homepage />
      </Layout>
    </>
  )
}
```

Adding the coomponent logic inside the Types file and looking a way to implement the login logic inside the component/ with a redirection to the homepage



### Routing with react-router-dom : 

To set up the routing of your react app, you can use react-router-dom to handle the content of the different urls of your app, each of these urls will be associated to a specific 'element" prop corresponding to the React content (component) meant to be displayed. 

Here is an example of basic router: 

```ts
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import App from "../../App";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  }
])

export default function Routing() {
  return (
    <>
      <RouterProvider router={router}
        future={{ v7_startTransition: true }}
      />
    </>
  )
}
```

