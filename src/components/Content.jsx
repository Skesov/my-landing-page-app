import React from "react";
import Greeting from "./content/Greeting/Greeting.jsx";
import Background from "./content/Background/Background.jsx";
import Stack from "./content/Stack/Stack";
import Contacts from "./content/Contacts/Contacts";
import Portfolio from "./content/Portfolio/Portfolio";

function Content(props) {
  return (
    <div className="content">
      <Greeting name={props.name} />
      <Background />
      <Stack />
      <Contacts />
      <Portfolio />
    </div>
  );
}

export default Content;
