import Header from "./components/Header.tsx";
import About from "./components/About.tsx";
import TechStack from "./components/TechStack.tsx";
import Projects from "./components/Projects.tsx";
import Footer from "./components/Footer.tsx";

function App() {

  const description = "Hi, I'm Yaroslav, nice to meet you. My journey started at school when I discovered what programming is. Currently I am on my way to become a full-stack developer.";

  return (
    <>
      <Header name={"Yaroslav Shchebovovk"} />
      <main>
        <About description={description} />
        <TechStack title={"Skills"} />
        <Projects/>
      </main>
      <Footer/>
    </>
  )
}

export default App
