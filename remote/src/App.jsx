import React from "react";
import ReactDOM from "react-dom";
import Compute from "host/Compute";
import Counter from "./Counter";

import "./index.scss";

const App = () => (
  <div className="mt-10 text-3xl mx-auto max-w-6xl">
    <div>Name: remote</div>
    <div>Framework: react</div>
    <div>Language: JavaScript</div>
    <div>CSS: Tailwind</div>
    <Counter/>
    <Compute/>
  </div>
);
ReactDOM.render(<App />, document.getElementById("app"));
