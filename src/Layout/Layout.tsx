import Header from "./Header/Header";
import Footer from "./Footer/Footer";
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

export default Layout;