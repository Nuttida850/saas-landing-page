import Apps from "./components/Apps";
import Clients from "./components/Clients";
import Customise from "./components/Customise";
import Data from "./components/Data";
import Extension from "./components/Extension";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Plan from "./components/Plan";
import Project from "./components/Project";
import Sponsors from "./components/Sponsors";
import Try from "./components/Try";
import Work from "./components/Work";
import YourWork from "./components/YourWork";

function App() {
  return (
    <>
      <Navbar />
      <Header />
      <Project />
      <Work />
      <Extension />
      <Customise />
      <Plan />
      <YourWork />
      <Data />
      <Sponsors />
      <Apps />
      <Clients />
      <Try />
      <Footer />
    </>
  );
}

export default App;
