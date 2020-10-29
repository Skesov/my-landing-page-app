import React from "react";
import StartPage from "./StartPage";

function Body(props) {
  let [name, setName] = React.useState('');

  function takeName(input) {
    setName(input);
    console.log(name)
  }

  return (
    <div>{name === '' ? <StartPage takeName={takeName} /> : <h1>Congats</h1>}</div>
  );
}

export default Body;
