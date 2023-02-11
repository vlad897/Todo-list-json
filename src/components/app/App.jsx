import {useState, useEffect} from "react";
import "./App.css";

import Header from "../header/Header";
import TodoForm from "../todo-form/TodoForm";
import TodoList from "../todo-list/TodoList";

const App = () => {

   const [todos, setTodos] = useState([]);

   useEffect(() => {
      getTodos()
   }, []);

   const getTodos = () => {
      fetch('http://localhost:3000/todos')
      .then((response) => response.json())
      .then((data) => setTodos(data));
      console.log('get', todos)
   };

   const addTodo = (name) => {
      if(name.trim()) {
         fetch('http://localhost:3000/todos', {
      method: 'POST',
      body: JSON.stringify({
         id: Date.now(),
         name,
         done: false
      }),
      headers: {
         'Content-type': 'application/json; charset=UTF-8',
      },
      })
      .then(response => response.json())
      .then(json => console.log(json))
      .then(getTodos);
      }      
   };

   const deleteTodo = (id) => {
      console.log(id);
      fetch('http://localhost:3000/todos/' + id, {
         method: 'DELETE',
      })
      .then(getTodos);
   };

   const editTodo = (id, name, done) => {
      if(name.trim()) {
         fetch('http://localhost:3000/todos/' + id, {
         method: 'PUT',
         body: JSON.stringify({
            id,
            name,
            done
         }),
         headers: {
            'Content-type': 'application/json; charset=UTF-8',
         },
      })
      .then(getTodos);
      }     
   };

   

   return (
      <div className="app">
         <Header todos={todos} />
         <TodoForm addTodo={addTodo} />
         <TodoList todos={todos} getTodos={getTodos} deleteTodo={deleteTodo} editTodo={editTodo} itemsPerPage={5} />
      </div>
   )
};


export default App;