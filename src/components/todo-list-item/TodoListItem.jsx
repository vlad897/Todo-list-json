import { useState } from "react";
import "./TodoListItem.css";


const TodoListItem = ({todo, deleteTodo, editTodo}) => {

   const [newName, setNewName] = useState(todo.name);
   const [isEdit, setIsEdit] = useState(false);

   const iconClass = isEdit ? "fa fa-regular fa-square-check m-0.5" : "fa fa-edit m-0.5";
   const inputClass = isEdit ? "todo-input-isEdit" : "";

   return (
      <li className="m-1 flex items-center">
         <input className={`text-xl todo-input mr-1 ${inputClass}`} readOnly={!isEdit} value={newName} onChange={e => setNewName(e.target.value)} />
         <i className="fa fa-trash" onClick={() => deleteTodo(todo.id)} />
         <i className={iconClass} onClick={() => {if(newName.trim()) {
                                                   editTodo(todo.id, newName, todo.done)
                                                   setIsEdit(!isEdit)
                                                   console.log(newName)
                                                   }  
                                                   }} />
         <input disabled={isEdit} type="checkbox" checked={todo.done} onChange={() => editTodo(todo.id, newName, !todo.done)} />                                                   
         <br/>                                                   
      </li>
   )
};


export default TodoListItem;