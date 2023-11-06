import Contact from "../../components/Contact/Contact";
import Portfolio from "../../components/Portfolio/Portfolio";
import Introduction from "../../components/Introduction/Introduction";

const Homepage = () => {
  return (
    <>
      <main>
        <Introduction />
        <Portfolio />
        <Contact />
      </main>
    </>
  )
}

export default Homepage;