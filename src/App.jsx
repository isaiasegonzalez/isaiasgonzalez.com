import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Work from "./components/Work";
import About from "./components/About";
import Experience from "./components/Experience";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div>
      <Navbar />
      <div className="flex flex-col pt-[5rem] space-y-24 sm:space-y-48" >
        <Hero />
        <About />
        <Experience />
        <Work />
        <Footer />
      </div>
    </div>
  );
};

export default App;