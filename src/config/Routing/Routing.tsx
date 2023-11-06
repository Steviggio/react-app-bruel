import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import App from "../../App";
import Footer from "../../Layout/Footer/Footer";
import Header from "../../Layout/Header/Header";
import Layout from "../../Layout/Layout";
import Login from "../../Pages/Login/Login";


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
    element: <Layout children={<Login />} />
  }
])


export default function Routing() {
  return <RouterProvider router={router}
    future={{ v7_startTransition: true }}
  />
}

