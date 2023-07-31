import "./App.css";
import Header from "./myComponents/Header";
import { Footer } from "./myComponents/Footer";
import { Todos } from "./myComponents/Todos";
import React, { useState, useEffect } from "react";
import { AddItem } from "./myComponents/AddItem";
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import { About } from "./myComponents/About";
function App() {
  let initTodo;
  if (localStorage.getItem("todos") === null) {
    initTodo = [];
  } else {
    initTodo = JSON.parse(localStorage.getItem("todos"));
  }
  const onDelete = (todo) => {
    console.log("on Delete", todo);
    setTodos(
      todos.filter((e) => {
        return e !== todo;
      })
    );
    localStorage.setItem("todos", JSON.stringify(todos));
    // let index = todos.indexOf(todo);
    // todos.splice(index, 1)
  };
  const addTodo = (title, desc) => {
    console.log("I'm Adding this todo" + title + "and description " + desc);
    let sno;
    if (todos.length === 0) {
      sno = 0;
    } else {
      sno = todos[todos.length - 1].sno + 1;
    }
    const myTodo = {
      sno: sno,
      title: title,
      desc: desc,
    };
    setTodos([...todos, myTodo]);
    console.log(myTodo);
  };

  const [todos, setTodos] = useState(initTodo);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <>
        <Header title="TodosList" searchBar={false} />
        <AddItem addTodo={addTodo} />
        <Todos todo={todos} onDelete={onDelete} />
        <Footer />
        </>
      ),
    },
    {
      path: "/about",
      element: (
      <>
        <Header title="TodosList" searchBar={false} />
        <About />
        <Footer />
      </>
      ),
    },
  ]);
  
  return (
    <>
        <RouterProvider router={router} />
    </>
  );
}

export default App;
