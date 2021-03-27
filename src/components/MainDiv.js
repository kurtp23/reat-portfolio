import React from "react";
import BioDiv from "./pages/BioDiv.js";
import Portfolio from "./pages/Portfolio.js";
import Contact from "./pages/Contact.js";

class MainDiv extends React.Component {
  state = {
    currentPage: "Home",
  };
  //consturctordiufhusf that takes in props
  //call cuper(props)
  render(props) {
    //conditionally render
    //if props = whateres <react component 1: portfolio>

    if ("Bio" === "Bio") {
      return <BioDiv />;
    }
    if (props.buttonname === "Portfolio") {
      return <Portfolio />;
    }
    if (props.buttonname === "Contact") {
      return <Contact />;
    }
  }
}

export default MainDiv;
