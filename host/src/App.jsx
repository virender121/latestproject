import React from "react";
import ReactDOM from "react-dom";
import Counter from 'remote/Counter'
import Input from "./components/views/Input/Input";
import "./index.scss";

const App = () => (
  <div className="mt-10 text-3xl mx-auto max-w-6xl">
    <div>Name: host</div>
    <div>Framework: react</div>
      <Counter/>
      <Input/>
  </div>
);
ReactDOM.render(<App />, document.getElementById("app"));
