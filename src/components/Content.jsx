import React from "react";
import Greeting from "./content/Greeting";
import Background from "./content/Background";
import Stack from './content/Stack'
import Contacts from './content/Contacts'
import Portfolio from './content/Portfolio'

function Content(props) {
  return (
    <div className="content">
      <Greeting name={props.name} />
      <Background />
      <Stack />
      <Contacts />
      <Portfolio/>
    </div>
  );
}

export default Content;
