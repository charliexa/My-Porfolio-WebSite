import "./app.scss"
import { Hero } from "./components/Hero/Hero";
import { NavBar } from "./components/NavBar/NavBar";
import { Parallax } from "./components/Parallax/Parallax";
import { Portfolio } from "./components/Portfolio/Portfolio";
import { Services } from "./components/Services/Services";

const App = () => {
  return <div>
    <section id="HomePage">
      <NavBar />
      <Hero />
    </section>  
    <section id="Services"><Parallax type="services"/></section>
    <section><Services /></section>
    <section id="Portfolio"><Parallax type="portfolio"/></section>
    <Portfolio />
    <section id="Contact">Contact</section>
  </div>;
};

export default App;
