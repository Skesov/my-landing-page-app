import React from "react";
import Greeting from './content/Greeting'


function Content(props) {

  return (
    <div className="content">
          <Greeting name={props.name}/>
    </div>
  );
}

export default Content;
