import Header from "../components/Header/Header";
import Main from "../components/Main/Main";
import About from "../components/About/About";
import Skills from "../components/Skills/Skills";
import Projects from "../components/Projects/Projects";
import Footer from "../components/Footer/Footer";
import Gradient from "../components/Gradient/Gradient";

const HomePage = () => {
  return (
    <>
      <Gradient />
      <Header />
      <Main />
      <About />
      <Skills />
      <Projects />
      <Footer />
    </>
  );
};

export default HomePage;
