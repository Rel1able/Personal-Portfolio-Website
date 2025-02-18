import Header from "./components/Header.tsx";
import About from "./components/About.tsx";
import TechStack from "./components/TechStack.tsx";
import Projects from "./components/Projects.tsx";
import Footer from "./components/Footer.tsx";

function App() {

  const description = "Hi, I'm Yaroslav. The front end developer, interested in web development.";

  return (
    <>
      <Header name={"Yaroslav Shchebovovk"} />
      <main>
        <About description={description} />
        <TechStack title={"My technology stack"} />
        <Projects/>
      </main>
      <Footer/>
    </>
  )
}

export default App
