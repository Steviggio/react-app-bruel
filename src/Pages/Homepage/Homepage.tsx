import Contact from "../Contact/Contact";
import Portfolio from "../Portfolio/Portfolio";
import Introduction from "../Introduction/Introduction";

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