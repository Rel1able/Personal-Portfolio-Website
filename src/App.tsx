import Header from "./components/Header.tsx";
import About from "./components/About.tsx";

function App() {

  const description = "Hi, I'm Yaroslav. The front end developer, interested in web development.";

  return (
    <>
      <Header name={"Yaroslav Shchebovovk"}/>
      <About description={description}/>
    </>
  )
}

export default App
