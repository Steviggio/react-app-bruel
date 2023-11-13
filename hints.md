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