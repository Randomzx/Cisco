import React, { Component } from "react";
import './App.css';
import Banner from "./Banner";

function App() {
  function FancyBorder(props) {
    return (
      <div className={'FancyBorder FancyBorder-' + props.color}>
        {props.children}
      </div>
    );
  }

  function Dialog(props) {
    return (
      <FancyBorder color="blue">
        <h1 className="Dialog-title">
          {props.title}
        </h1>
        <p className="Dialog-message">
          {props.message}
        </p>
      </FancyBorder>
    );
  }
  return (
    <div className="App">

      <Banner />

      <Dialog
        title="Welcome"
        message="Thank you for visitng!" />


    </div>
  );
}

export default App;
