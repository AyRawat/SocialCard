import React from "react";
import ReactDOM from "react-dom";
import Card from './card';
import "./styles.css";

function App() {
  return (
    <div className="App">
      <Card />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
