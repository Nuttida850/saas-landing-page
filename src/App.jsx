import Apps from "./components/Apps";
import Customise from "./components/Customise";
import Data from "./components/Data";
import Extension from "./components/Extension";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Plan from "./components/Plan";
import Project from "./components/Project";
import Sponsors from "./components/Sponsors";
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
    </>
  );
}

export default App;
