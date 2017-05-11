import React from "react";
import { render } from "react-dom";
import Home from "../home_react";

document.addEventListener("DOMContentLoaded", () => {
  render(<Home />, document.getElementById("react-root"));
});
