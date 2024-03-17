import React from "react";
import ReactDom from "react-dom/client";
import { Greeting } from "./Greeting";
import Product from "./Product";
import { Button } from "./Button";
import { TaskCard } from "./Task";

const root = ReactDom.createRoot(document.getElementById("root"));

root.render(
  <>
    {/* <TaskCard ready={false}/> */}
    <Button text="Hola" name='jose'/>

    <input onChange={function (event){
      console.log(event.target.value)
    }} />
  </>
);
