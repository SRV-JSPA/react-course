import React from "react";
import ReactDom from "react-dom/client";
import { Greeting } from "./Greeting";
import Product from "./Product";

const root = ReactDom.createRoot(document.getElementById("root"));

root.render(
  <>
    <Greeting />
    <Product/>
  </>
);
