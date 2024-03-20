import React, { useState, useEffect } from "react";
import ReactDom from "react-dom/client";
import { Greeting } from "./Greeting";
import Product from "./Product";
import { Button } from "./Button";
import { TaskCard } from "./Task";
import { Post } from "./Posts";

const root = ReactDom.createRoot(document.getElementById("root"));

async function api (){
  const datos = await fetch('http://localhost:3000/posts')
  const json = await datos.json()

  return json
}

function Mensaje() {
  const [titulos, setTitulos] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await api();
        const titulos = data.map(item => item.title); 
        setTitulos(titulos); 
      } catch (error) {
        console.error('Error al obtener los datos:', error);
      }
    };
    
    fetchData();

    
  }, []);

  return (
    <div>
      {titulos.map((titulo, index) => (
        <h1 key={index}>{titulo}</h1>
      ))}
    </div>
  );
}


root.render(
  <>
    <Mensaje />
  </>
);
