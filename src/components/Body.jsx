import React from "react";
import StartPage from "./StartPage";
import Content from "./Content";

function Body(props) {
  const [name, setName] = React.useState("");

  function takeName(input) {
    setName(input);
    props.haveAName(true);
  }

  return (
    <div>
      {name === "" ? (
        <StartPage takeName={takeName} />
      ) : (
        <Content name={name} />
      )}
    </div>
  );
}

export default Body;
