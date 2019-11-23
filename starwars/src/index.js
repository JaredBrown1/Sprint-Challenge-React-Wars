import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import axios from "axios";

ReactDOM.render(<App />, document.getElementById("root"));

const axiosPromise = axios.get("https://swapi.co/api/people/?page=2");
console.log(axiosPromise);
