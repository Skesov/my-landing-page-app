import "./App.css";
import React from 'react'
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";

function App() {
  const [showMenu, setShow] = React.useState(false);

  return (
    <div className="App">
      <Header showMenu={showMenu}/>
      <Body
        haveAName={(haveName) => {
          setShow(haveName);
        }}
      />
      <Footer />
    </div>
  );
}

export default App;
