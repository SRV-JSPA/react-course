import React, { useState, useEffect } from "react";
import ReactDom from "react-dom/client";
import { Greeting } from "./Greeting";
import Product from "./Product";
import { Button } from "./Button";
import { TaskCard } from "./Task";
import { Post } from "./Posts";

const root = ReactDom.createRoot(document.getElementById("root"));

function Mensaje() {
  const [mensaje, setMensaje] = useState("");
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    console.log("render")
  }, [counter])

  return (
    <div>
      <input onChange={(event) => {
        setMensaje(event.target.value)
      }} ></input>
      <button onClick={() => {
        alert('el mensaje es:' + mensaje)
      }} >Save</button>

      <hr/>

      <h1>Counter: {counter}</h1>
      <button onClick={() => {
        setCounter( counter + 1 )
      }} >Incrementar</button>


    </div>
    
  );
}

root.render(
  <>
    <Mensaje />
  </>
);
