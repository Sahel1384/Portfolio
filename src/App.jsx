import About from "./Components/About/About";
import Chatbot from "./Components/Chatbot/Chatbot";
import Experience from "./Components/Experience/Experience";
import Hero from "./Components/Hero/Hero";
import Navbar from "./Components/Navbar/Navbar";
import Projects from "./Components/Projects/Projects";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Chatbot />
    </>
  );
}

export default App;
