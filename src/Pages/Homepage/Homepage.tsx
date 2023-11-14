import Contact from "../../Sections/Contact/Contact";
import Portfolio from "../../Sections/Portfolio/Portfolio";
import Introduction from "../../Sections/Introduction/Introduction";

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