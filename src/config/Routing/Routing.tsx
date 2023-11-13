import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import App from "../../App";
import Footer from "../../Layout/Footer/Footer";
import Header from "../../Layout/Header/Header";
import Layout from "../../Layout/Layout";
import Login from "../../Pages/Login/Login";
import Form from "../../Pages/Login/Form";
import Identify from "../../Pages/Login/LoginForm";
import AxiosForm from "../../Pages/Login/AxiosForm";
import { AuthProvider } from "react-auth-kit";


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/header",
    element: <Header />
  },
  {
    path: "/footer",
    element: <Footer />
  },
  {
    path: "/login",
    element: <Layout children={<AxiosForm />} />
  },
  {
    path: "/form",
    element: <Form />
  },
  {
    path: "/connect",
    element: <Identify />
  },
  {
    path: "axios",
    element: <AxiosForm />
  }
])


export default function Routing() {
  return (
    <>
      <AuthProvider
        authType={"cookie"}
        authName={"_auth"}
        cookieDomain={window.location.hostname}
        cookieSecure={false}
      >
        <RouterProvider router={router}
          future={{ v7_startTransition: true }}
        />
      </AuthProvider>
    </>
  )
}

