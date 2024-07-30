import Experience from "./components/Experience";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import SocialLinks from "./components/SocialLinks";
import ScrollButton from "./components/ScrollButton";
import ContactForm from "./components/ContactForm";

function App() {
  return (
    <div className="gradient-bg">
      
      <Home />
      <Experience />
      
      <ContactForm />
      <SocialLinks />
      <ScrollButton/>
    </div>
  );
}

export default App;
