import React from "react";
import ReactDom from "react-dom/client";
import { Greeting } from "./Greeting";
import Product from "./Product";
import { Button } from "./Button";
import { TaskCard } from "./Task";
import { Post } from "./Posts";

const root = ReactDom.createRoot(document.getElementById("root"));

const users = [
  {
    id: 1,
    name: "Ryan ray",
    image: "https://robohash.org/user1",
  },
  {
    id: 2,
    name: "Joe",
    image: "https://robohash.org/user2",
  },
];

root.render(
  <>
    {users.map((user, i) => {
      return (
        <div>
          <h1 key={i}>{user.name}</h1>
          <img src={user.image} />
        </div>
      );
    })}
  </>
);
